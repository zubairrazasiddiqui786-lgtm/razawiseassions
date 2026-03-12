const Router = (() => {
  const listeners = [];

  const getRoute = () => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return { name: "home" };
    const parts = hash.split("/");
    if (parts[0] === "question" && parts[1]) {
      return { name: "question", slug: parts[1] };
    }
    return { name: parts[0] };
  };

  const notify = () => {
    const route = getRoute();
    listeners.forEach((cb) => cb(route));
    setActiveLinks(route.name);
  };

  const setActiveLinks = (routeName) => {
    document.querySelectorAll("[data-route]").forEach((link) => {
      if (link.dataset.route === routeName) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  };

  const init = () => {
    window.addEventListener("hashchange", notify);
    notify();
  };

  const onChange = (cb) => listeners.push(cb);

  return { init, onChange, getRoute };
})();
