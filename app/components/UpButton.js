export function UpButton() {
  const $button = document.createElement("button");
  $button.id = "up-btn";
  $button.classList.add("hidden");
  $button.innerHTML = `
    <span class="material-symbols-outlined">arrow_upward</span>`;

  document.addEventListener("scroll", e => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollTop > window.innerHeight 
    ? $button.classList.remove("hidden") 
    : $button.classList.add("hidden");
  });

  document.addEventListener("click", e => {
    if (e.target.matches("#up-btn") || e.target.matches("#up-btn *")) {
      window.scrollTo({
        behavior: "smooth",
        top: 0
      });
    }
  });
  return $button;
}
