export const getAllGames = (games) => {
    return games;
};

export const findGameById = (games, id) => {
    return games.find(game => game.id === id);
};