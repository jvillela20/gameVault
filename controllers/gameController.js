import { getAllGames } from "../Services/gameService.js";

export const getHome = (req, res) => {
    res.render("home", {
        title: "GameVault - Home"
    });
};

export const getCatalog = (req, res) => {
    const games = getAllGames(req.app.locals.games);

    res.render("catalog", {
        title: "GameVault - Catalog",
        games: games
    });
};