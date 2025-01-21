const express = require("express");
const app = express();

// Middleware para servir archivos estáticos
app.use(express.static("public"));

// Detección automática del idioma
app.get("/", (req, res) => {
  const acceptLanguage = req.headers["accept-language"];
  const userLanguage = acceptLanguage ? acceptLanguage.split(",")[0].slice(0, 2) : "en";
  
  if (userLanguage === "es") {
    res.redirect("/es/");
  } else {
    res.redirect("/en/");
  }
});

// Redirección al index de cada idioma
app.get("/en/", (req, res) => res.sendFile(__dirname + "/public/en/index.html"));
app.get("/es/", (req, res) => res.sendFile(__dirname + "/public/es/index.html"));

// Arranca el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
