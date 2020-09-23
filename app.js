const express = require("express");
const morgan = require("morgan"); //middleware application logger
const nunjucks = require("nunjucks");
const chalk = require("chalk");
const app = express(); 
 // crea una instancia de una aplicación de express

console.log(chalk.blue("Hello world!"));

/*app.use("/uno/dos", function (req, res, next) {
  console.log("LLEGASTE UN lugar ESPECIAL", req.path);
  
});;*/


// Configurando Nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan("tiny"));

let tweetsDeEjemplo = [
  { id: 1, name: "juan", content: "este es un tweeettt de juan" },
  { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
  { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
];

app.get("/", function (req, res) {
  res.render("index", { tweets: tweetsDeEjemplo });
});

app.listen(4000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});
