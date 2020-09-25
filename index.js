const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require ("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");
const usersController = require("./user/UsersController");


const Article = require("./articles/Article");
const Category = require("./categories/Category");
const User = require("./user/User");

//view engine
app.set('view engine', 'ejs');


//Static
app.use(express.static('public'));



//body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//Database
connection
    .authenticate()
    .then(() => {
    console.log("conexão com sucesso!");
}).catch((error) => {
    console.log(error);
});


app.use("/",categoriesController);
app.use("/",articlesController);
app.use("/", usersController);



app.get("/", (req, res) => {

    Article.findAll().then(articles => {
        res.render("index", {articles: articles });
    });

   
});

app.listen(8080, () => {
    console.log("Ok")
});