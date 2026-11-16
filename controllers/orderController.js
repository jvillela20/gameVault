import {
    createOrder,
    findOrderById
} from "../Services/orderService.js";

export const placeOrder = (req, res) => {
    const cart = req.app.locals.cart;
    const user = req.app.locals.user;
    const orders = req.app.locals.orders;

    const order = createOrder(cart, user, orders);

    if (!order) {
        return res.redirect("/cart");
    }

    res.redirect(`/order/${order.id}`);
};

export const getOrder = (req, res) => {
    const id = Number(req.params.id);
    const orders = req.app.locals.orders;

    const order = findOrderById(orders, id);

    if (!order) {
        return res.status(404).send("Order not found");
    }

    res.render("order", {
        title: "GameVault - Order Confirmation",
        order: order
    });
};