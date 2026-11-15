class Order {
    constructor(id, user, games) {
        this.id = id;
        this.user = user;
        this.games = [...games];
        this.total = this.calculateTotal();
        this.date = new Date();
    }

    calculateTotal() {
        return this.games.reduce(
            (total, game) => total + game.price, 0
        );
    }
}

export default Order;