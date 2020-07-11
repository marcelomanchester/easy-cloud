const express = require('express');
const port = process.env.PORT;
// const userRouter = require('./routers/user')

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
// app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
