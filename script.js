// Basit bir scroll animasyonu örneği
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    nav.style.background = "#111";
  } else {
    nav.style.background = "#000";
  }
});
