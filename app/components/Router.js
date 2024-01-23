import { List } from "./List.js";
import { ajax } from "../helpers/ajax.js";

export async function Router() {
  const $main = document.getElementById("main");
  let { hash } = location;

  // console.log(hash);

  if (!hash || hash === "#/") {
    ajax({
      url: `app/assets/blogs.json`,
      cbSuccess: res => {       
        $main.appendChild(List(res.data.all));
      },
      cbError: err => {
        let message = err.statusText || "Ocurrió un error";
        // $main.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
        $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
      }
    });    
  } else if (hash.includes("#/article")) {
    let words = hash.split("/");
    let word = words[words.length - 1];

    ajax({
      url: `app/assets/md/${word}.md`,
      cbSuccess: res => {
        $main.innerHTML = marked.parse(res.data);
        Prism.highlightAll();
      },
      cbError: err => {
        let message = err.statusText || "Ocurrió un error";
        // $main.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
        $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
      }
    });
  } else if (hash.includes("#/information")) {
    ajax({
      url: `app/assets/md/information.md`,
      cbSuccess: res => {
        $main.innerHTML = marked.parse(res.data);
        Prism.highlightAll();
      },
      cbError: err => {
        let message = err.statusText || "Ocurrió un error";
        // $main.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
        $main.innerHTML = `<p><b>Error ${err.status}: ${message}</b></p>`;
      }
    });
  } else {
    $main.innerHTML = `<p class="error-message">Not Found</p>`;
  }
}
