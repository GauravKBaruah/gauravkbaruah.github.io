document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("bibsearch");
  if (!input) return;
  const entries = [...document.querySelectorAll(".publications .bibliography > li")];
  const status = document.getElementById("publication-search-status");
  const normalize = (text) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const index = entries.map((entry) => normalize(entry.textContent));
  function filter() {
    const terms = normalize(input.value).trim().split(/\s+/).filter(Boolean);
    let count = 0;
    entries.forEach((entry, i) => {
      entry.hidden = !terms.every((term) => index[i].includes(term));
      if (!entry.hidden) count++;
    });
    document.querySelectorAll(".publications ol.bibliography").forEach((list) => {
      list.hidden = ![...list.children].some((entry) => !entry.hidden);
      const heading = list.previousElementSibling;
      if (heading && heading.matches("h2.bibliography, h3.bibliography")) heading.hidden = list.hidden;
    });
    document.querySelectorAll(".publication-section").forEach((section) => {
      section.hidden = ![...section.querySelectorAll(".bibliography > li")].some((entry) => !entry.hidden);
    });
    status.textContent = count
      ? `${count} publication${count === 1 ? "" : "s"}${terms.length ? " found" : ""}.`
      : "No publications found. Try another title, author or keyword.";
  }
  input.addEventListener("input", filter);
  // Section anchors remain navigation anchors, never search terms.
  filter();
});
