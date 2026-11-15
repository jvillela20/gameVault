import express from 'express'
import Game from "./models/Game.js";
import Cart from "./models/Cart.js";
import User from "./models/User.js";

const app = express();
const port = 3000;

const cart = new Cart();

const users = [];
const user = new User(1, "Alex", "alex@example.com");
users.push(user);

const games = [
    new Game(1, "Minecraft", "Sandbox", 29.99, "/images/minecraft.jpg"),
    new Game(2, "Elden Ring", "RPG", 59.99, "/images/elderRing.jpg"),
    new Game(3, "GTA V", "Action", 39.99, "/images/gtaV.jpg"),
    new Game(4, "Cyberpunk 2077", "RPG", 49.99, "/images/cyberpunk.jpg"),
    new Game(5, "Stardew Valley", "Simulation", 14.99, "/images/stardewValley.jpg")
];

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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
    res.render("account", {
        title: "GameVault - Account",
        user: user
    });
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

app.post("/account/update", (req, res) => {
    const { name, email } = req.body;

    if (!name?.trim() || !email?.trim()) {
        return res.status(400).send("Name and email are required");
    }

    user.name = name.trim();
    user.email = email.trim();

    res.redirect("/account");
});

app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
