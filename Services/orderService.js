import Order from "../models/Order.js";

export const createOrder = (cart, user, orders) => {
    if (cart.items.length === 0) {
        return null;
    }

    const order = new Order(
        orders.length + 1,
        user,
        [...cart.items]
    );

    orders.push(order);
    cart.items = [];

    return order;
};

export const findOrderById = (orders, id) => {
    return orders.find(order => order.id === id);
};