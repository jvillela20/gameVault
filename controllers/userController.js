import {
    getUser,
    updateUser
} from "../Services/userService.js";

export const getAccount = (req, res) => {
    const user = getUser(req.app.locals.user);

    res.render("account", {
        title: "GameVault - Account",
        user: user
    });
};

export const updateAccount = (req, res) => {
    const user = req.app.locals.user;
    const { name, email } = req.body;

    const success = updateUser(user, name, email);

    if (!success) {
        return res.status(400).send("Name and email are required");
    }

    res.redirect("/account");
};