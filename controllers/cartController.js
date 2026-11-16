import {
    getCartItems,
    getCartTotal,
    addGameToCart,
    removeGameFromCart
} from "../services/cartService.js";

export const getCart = (req, res) => {
    const cart = req.app.locals.cart;

    res.render("cart", {
        title: "GameVault - Cart",
        items: getCartItems(cart),
        total: getCartTotal(cart)
    });
};

export const addToCart = (req, res) => {
    const id = Number(req.params.id);
    const games = req.app.locals.games;
    const cart = req.app.locals.cart;

    const success = addGameToCart(cart, games, id);

    if (!success) {
        return res.status(404).send("Game not found");
    }

    res.redirect("/cart");
};

export const removeFromCart = (req, res) => {
    const id = Number(req.params.id);
    const cart = req.app.locals.cart;

    removeGameFromCart(cart, id);

    res.redirect("/cart");
};