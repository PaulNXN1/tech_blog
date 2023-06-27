const express = require("express");
const routes = require("./api/index");
const app = express();
const exphb = require("express-handlebars");

const PORT = process.env.PORT || 8888;
const hbs = exphb.create();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")
app.use(express.json())
app.use(express.static("public"))



app.use(routes);

app.listen(PORT, () => console.log('Running PORT - Neato!'));

