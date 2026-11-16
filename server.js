import express from 'express';
import Game from "./models/Game.js";
import Cart from "./models/Cart.js";
import User from "./models/User.js";
import Order from "./models/Order.js";
import gameRoutes from "./routes/gameRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import helmet from "helmet";
import requestLogger from "./middleware/requestLogger.js";
import errorHandler from "./middleware/errorHandler.js";


// Create Express application
const app = express();
const port = 3000;

// Create objects
const cart = new Cart();

const orders = [];
const reviews = [];
const users = [];

const user = new User(1, "Alex", "alex@example.com");
users.push(user);

// Create games
const games = [
    new Game(1, "Minecraft", "Sandbox", 29.99, "/images/minecraft.jpg"),
    new Game(2, "Elden Ring", "RPG", 59.99, "/images/elderRing.jpg"),
    new Game(3, "GTA V", "Action", 39.99, "/images/gtaV.jpg"),
    new Game(4, "Cyberpunk 2077", "RPG", 49.99, "/images/cyberpunk.jpg"),
    new Game(5, "Stardew Valley", "Simulation", 14.99, "/images/stardewValley.jpg")
];

// Configure Express
app.set("view engine", "ejs");

// Security middleware
app.use(helmet());

// Request logging middleware
app.use(requestLogger);

// Built-in middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Make games available to controllers
app.locals.games = games;
app.locals.cart = cart;
app.locals.user = user;
app.locals.orders = orders;
app.locals.Order = Order;
app.locals.reviews = reviews;

// Connect game routes
app.use("/", gameRoutes);
app.use("/", cartRoutes);
app.use("/", userRoutes);
app.use("/", orderRoutes);
app.use("/", reviewRoutes);

// Handle unknown routes
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
    console.log(`Running server on port ${port}`);
});
