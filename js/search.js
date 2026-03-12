const Search = (() => {
  const filterResults = (query, data) => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) => {
      return (
        item.title.toLowerCase().includes(q) ||
        item.question.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    });
  };

  const createResultCard = (item) => {
    return `
      <div class="card result-card soft">
        <span class="badge">${item.category}</span>
        <h3>${item.title}</h3>
        <p class="muted">${item.answer.slice(0, 140)}...</p>
        <div class="latest-meta">
          <span>${item.language}</span>
          <a href="#question/${item.slug}">Read More</a>
        </div>
      </div>
    `;
  };

  return { filterResults, createResultCard };
})();
