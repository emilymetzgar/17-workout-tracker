const express = require("express");
const mongoose = require("mongoose");

//connection
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(require('./controllers/api'));
app.use(require('./controllers/html'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});