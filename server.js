import express from 'express'
import Game from "./models/Game.js";
import Cart from "./models/Cart.js";

const app = express();
const port = 3000;

const cart = new Cart();

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
    res.render("cart", {
        title: "GameVault - Cart",
        items: cart.items,
        total: cart.getTotal()
    });
});

app.get("/account", (req, res) => {
    res.render("account", { title: "GameVault - Account" });
});

app.post("/cart/add/:id", (req, res) => {
    const id = Number(req.params.id);

    const game = games.find(game => game.id === id);

    if (!game) {
        return res.status(404).send("Game not found");
    }

    cart.addGame(game);

    res.redirect("/cart");
});

app.post("/cart/remove/:id", (req, res) => {
    const id = Number(req.params.id);

    cart.removeGame(id);

    res.redirect("/cart");
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
