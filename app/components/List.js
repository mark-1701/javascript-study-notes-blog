import { ListItems } from "./ListItems.js";

export function List() {
  const $ul = document.createElement("ul");
  $ul.innerHTML = ListItems();
  $ul.classList.add("list-group");
  return $ul;
}
