import {
    getAllReviews,
    createReview
} from "../Services/reviewService.js";

export const getReviews = (req, res) => {
    res.render("review", {
        title: "GameVault - Reviews",
        games: req.app.locals.games,
        reviews: getAllReviews(req.app.locals.reviews)
    });
};

export const addReview = (req, res) => {
    const games = req.app.locals.games;
    const reviews = req.app.locals.reviews;
    const user = req.app.locals.user;

    const gameId = Number(req.body.gameId);
    const rating = Number(req.body.rating);
    const comment = req.body.comment;

    const result = createReview(
        reviews,
        games,
        user,
        gameId,
        rating,
        comment
    );

    if (result.error) {
        return res.status(result.status).send(result.error);
    }

    res.redirect("/reviews");
};