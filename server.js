import express from 'express'
import Game from "./models/Game.js";

const app = express();
const port = 3000;

const games = [
    new Game(1, "Minecraft", "Sandbox", 29.99, "/images/minecraft.jpg"),
    new Game(2, "Elden Ring", "RPG", 59.99, "/images/eldenRing.jpg"),
    new Game(3, "GTA V", "Action", 39.99, "/images/gtaV.jpg"),
    new Game(4, "Cyberpunk 2077", "RPG", 49.99, "/images/cyberpunk.jpg"),
    new Game(5, "Stardew Valley", "Simulation", 14.99, "/images/stardewValley.jpg")
];

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render('home', { title: 'GameVault - Home'});
});

app.get("/catalog", (req, res) => {
    res.render("catalog", {
        title: "GameVault - Catalog",
        games: games
    });
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
