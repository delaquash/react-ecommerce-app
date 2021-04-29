const bcrypt = require("bcryptjs");

const users = [
    {
        name: "admin user",
        email: "admin@example.com",
        password: bcrypt.hashSync('1234567', 8),
        isAdmin: true
    },
    {
        name: "Segun Joseph",
        email: "segun@example.com",
        password:  bcrypt.hashSync('1234567', 8),
    },
    {
        name: "Oni Olayemi",
        email: "olayemi@example.com",
        password:  bcrypt.hashSync('1234567', 8),
    }
]

module.exports = users;