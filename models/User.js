class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getInfo() {
        return {
            id: this.id,
            name: this.name,
            email: this.email
        };
    }
}

export default User;