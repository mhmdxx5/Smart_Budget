const express = require("express");
const logger = require("morgan");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger("dev")); 
const {UsersRouter} = require("./routers/UsersRouter");
// const {FlightRouter} = require("./routers/FlightRouter");
app.use('/api/Users', UsersRouter);
// app.use(check);
// app.use('/api/Flights', FlightRouter);
app.use((req, res) => {
    res.status(400).send('Something is broken!');
});
app.listen(port, () => console.log(`Express server is running on port ${port}`));