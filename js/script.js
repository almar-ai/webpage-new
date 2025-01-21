// Detecta el idioma del navegador y redirige
document.addEventListener("DOMContentLoaded", () => {
    const userLang = navigator.language || navigator.userLanguage; // Idioma del navegador
    const langCode = userLang.slice(0, 2); // Extrae el código del idioma (es, en, etc.)
  
    // Redirige si el usuario está en la raíz (index.html)
    const currentPath = window.location.pathname;
    if (currentPath === "/" || currentPath === "/index.html") {
      if (langCode === "es") {
        window.location.href = "/es/index.html";
      } else {
        window.location.href = "/en/index.html";
      }
    }
  });
  