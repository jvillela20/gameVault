import Review from "../models/Review.js";

export const getAllReviews = (reviews) => {
    return reviews;
};

export const createReview = (reviews, games, user, gameId, rating, comment) => {
    const game = games.find(game => game.id === gameId);

    if (!game) {
        return { error: "Game not found", status: 404 };
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5 || !comment?.trim()) {
        return { error: "Invalid rating or comment", status: 400 };
    }

    const review = new Review(
        reviews.length + 1,
        user,
        game,
        rating,
        comment.trim()
    );

    reviews.push(review);

    return { review };
};