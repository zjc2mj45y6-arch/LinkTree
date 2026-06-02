const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("click", () => {
    const platform = link.dataset.platform;
    console.log(`Abriendo ${platform}`);
  });
});
