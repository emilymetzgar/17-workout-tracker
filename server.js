const express = require('express');
//const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const db = require('./models');

const app = express();

//app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));



mongoose.connect(
    process.env.MONGODB_URL || 'mongo_db://localhost/workout_tracker', 
{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}
);

app.use(require('./controllers/api.js'));
app.use(require('./controllers/html.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});