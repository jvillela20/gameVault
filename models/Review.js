class Review {
    constructor(id, user, game, rating, comment) {
        this.id = id;
        this.user = user;
        this.game = game;
        this.rating = rating;
        this.comment = comment;
        this.date = new Date();
    }
}

export default Review;