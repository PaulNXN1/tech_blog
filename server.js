const express = require("express");
const routes = require("./controllers/api/index");
const app = express();
const exphb = require("express-handlebars");
const sequelize = require("./config/connections");

const PORT = process.env.PORT || 8888;
const hbs = exphb.create();

// Handlebar implementation 

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars")



// setting up sessions
const sess1 = {
    secret: "placeholder",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
    db: sequelize
})
}

app.use(session(sess1));


//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.use(routes);

// Example server confirmation 
// app.listen(PORT, () => console.log('Running PORT - Neato!'));


sequelize.sync({force: false}).then(() => {
    app.listen(process.env.PORT || 8888, '0.0.0.0', () => {
        console.log("Server is active!.");
    });;
});

