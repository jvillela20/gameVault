class Cart {
    constructor() {
        this.items = [];
    }

    addGame(game) {
        this.items.push(game);
    }

    removeGame(id) {
        this.items = this.items.filter(
            game => game.id !== id
        );
    }

    getTotal() {
        return this.items.reduce(
            (total, game) => total + game.price, 0
        );
    }
}

export default Cart;