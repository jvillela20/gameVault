export const getUser = (user) => {
    return user;
};

export const updateUser = (user, name, email) => {
    if (!name?.trim() || !email?.trim()) {
        return false;
    }

    user.name = name.trim();
    user.email = email.trim();

    return true;
};