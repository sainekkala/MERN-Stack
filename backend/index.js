const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require('dotenv');
const app = express();


const userRouter = require('./routes/user.router');

app.use(cors());
app.use(express.json());
dotenv.config();
const portno = process.env.PORT_NO || 5000;


app.get('/', (req, res) => {
    res.status(200);
    res.send('health check')
});

app.use('/api/users', userRouter);

app.listen(portno, () => {
    console.log(`server is running on ${portno}`)
});

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("connected to db")
}).catch((error) => {
    console.log(error)
})
