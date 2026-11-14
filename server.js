import express from 'express'

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render('home', { title: 'GameVault - Home'});
});

app.get("/catalog", (req, res) => {
    res.render("catalog", { title: "GameVault - Catalog" });
});

app.get("/cart", (req, res) => {
    res.render("cart", { title: "GameVault - Cart" });
});

app.get("/account", (req, res) => {
    res.render("account", { title: "GameVault - Account" });
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
