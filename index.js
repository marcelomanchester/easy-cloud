const express = require('express');

const db = require('./src/db');
const routers = require('./src/routers');

const initApp = async () => {
    await initDatabase();

    initServer();
};

const initDatabase = async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

const initServer = () => {
    const app = express();

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            'Origin, X-Requested-With, Content-Type, Accept, Authorization'
        );
        res.header(
            'Access-Control-Allow-Methods',
            'PUT, POST, GET, DELETE, OPTIONS'
        );

        next();
    });

    app.use(express.json());

    routers(app);

    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};

initApp();
