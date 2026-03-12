const FirebaseService = (() => {
  const firebaseConfig = {
    apiKey: "AIzaSyCa2bBRbphVlQff_q0aCRU39vcJBJkMov4",
    authDomain: "cold-email-bedb9.firebaseapp.com",
    projectId: "cold-email-bedb9",
    storageBucket: "cold-email-bedb9.firebasestorage.app",
    messagingSenderId: "589926581856",
    appId: "1:589926581856:web:f5879028c82dfdabe26505",
    measurementId: "G-R8P8VQ75NF",
  };

  let db = null;

  const init = () => {
    const app = firebase.initializeApp(firebaseConfig);
    db = firebase.firestore(app);
  };

  const seedIfEmpty = async () => {
    const qaSnap = await db.collection("qa").limit(1).get();
    if (!qaSnap.empty) return;

    const batch = db.batch();
    seedQaData.forEach((item) => {
      const ref = db.collection("qa").doc();
      batch.set(ref, item);
    });
    seedCategories.forEach((item) => {
      const ref = db.collection("categories").doc();
      batch.set(ref, item);
    });
    await batch.commit();
  };

  const getQa = async () => {
    const snap = await db.collection("qa").orderBy("date", "desc").get();
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const getCategories = async () => {
    const snap = await db.collection("categories").get();
    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  };

  const addQa = async (data) => {
    const docRef = await db.collection("qa").add(data);
    return docRef.id;
  };

  return { init, seedIfEmpty, getQa, getCategories, addQa };
})();
