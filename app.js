const express= require ("express");
const {homedir}= require("os");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public")
app.use(express.static(publicPath));
app.get("/", (req,res) => {res.sendFile(path.join(__dirname, "views/home.html"))});
app.get("/registro", (req,res) => {res.sendFile(path.join(__dirname, "views/register.html"))});
app.get("/login", (req,res) => {res.sendFile(path.join(__dirname, "views/login.html"))});
app.listen(process.env.PORT || 3030,() => {console.log("Mercado Liebre funciona")});