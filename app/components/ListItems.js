export function ListItems() {
  const articles = ["array", "math", "object"];
  let items = "";
  articles.forEach(el => {
    items += `<li class="item list-group-item"><a href="#/article/${el}">${el}</a></li>`;
  });

  document.addEventListener("mouseover", e => {
    if (e.target.matches(".item") || e.target.matches(".item *")) {
      if (e.target.tagName === "A") e.target.parentElement.classList.add("active");
      e.target.classList.add("active");
    }
  });
  document.addEventListener("mouseout", e => {
    if (e.target.matches(".item") || e.target.matches(".item *")) {
      e.target.classList.remove("active");
    }
  });
  return items;
}
