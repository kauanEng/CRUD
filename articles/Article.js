const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define('Articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type : Sequelize.TEXT,
        allowNull: false

    }
});

Category.hasMany(Article); // 1 - * Uma categoria pertence a muitos artigos (sequelize)
Article.belongsTo(Category); // 1 - 1 UM artigo pertence a uma categoria


module.exports = Article;