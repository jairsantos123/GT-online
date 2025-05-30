document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
