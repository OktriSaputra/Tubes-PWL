// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Step 1

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://<username>:<password>@cluster0-vyg6a.mongodb.net/test?retryWrites=true&w=majority'

// Step 2
mongoose.connect(MONGODB_URI || 'mongodb://localhost/mystore', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});

//schema
const Schema = mongoose.Schema;
const BlogPostSchema = new Schema({
    title: String,
    body: String,
    date: {
        type: String,
        default: Date.now()
    }
});

//model
const BlogPost = mongoose.model('BlogPost', BlogPostSchema);

//saving data to our mongo database
const data = {
    title: "Welcome to My Store",
    body : "Ingredients Cake"
};

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}


// HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);




app.listen(PORT, console.log(`Server is starting at ${PORT}`));