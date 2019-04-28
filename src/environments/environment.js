const environment = {
    database: {
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        name: process.env.DATABASE_NAME,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD
    },
    google: {
        client_id: process.env.GOOGLE_CLIENT_ID
    },
    token: {
        secret: process.env.TOKEN_SECRET
    }
};

module.exports = environment;
