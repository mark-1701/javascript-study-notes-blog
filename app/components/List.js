import { ListItems } from "./ListItems.js";
import { ajax } from "../helpers/ajax.js";

export function List(articles) {
  const $ul = document.createElement("ul");
  $ul.innerHTML = ListItems(articles);
  $ul.classList.add("list-group");
  return $ul;
}
