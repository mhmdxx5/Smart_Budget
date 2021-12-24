const express = require("express");
const logger = require("morgan");
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.set('Content-Type', 'application/json');
    next();
});
const { UsersRouter } = require("./routers/UsersRouter");
app.use('/api/Users', UsersRouter);
app.use((req, res) => {
    res.status(400).send('Something is broken!');
});
app.listen(port, () => console.log(`Express server is running on port ${port}`));