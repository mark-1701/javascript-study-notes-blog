import { Title } from "./components/Title.js";
import { List } from "./components/List.js";
import { ListItems } from "./components/ListItems.js";
import { Router } from "./components/Router.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { UpButton } from "./components/UpButton.js";

export function App() {
  const $root = document.getElementById("root");
  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(UpButton());
  Router();
}
