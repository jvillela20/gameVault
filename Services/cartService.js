export const getCartItems = (cart) => {
    return cart.items;
};

export const getCartTotal = (cart) => {
    return cart.getTotal();
};

export const addGameToCart = (cart, games, id) => {
    const game = games.find(game => game.id === id);

    if (!game) {
        return false;
    }

    cart.addGame(game);
    return true;
};

export const removeGameFromCart = (cart, id) => {
    cart.removeGame(id);
};