require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const shortUrlSchema = new mongoose.Schema({
    original_url: {
        type: String,
        required: true
    },
    short_url: Number
});

const ShortUrl = mongoose.model('ShortUrl', shortUrlSchema);

module.exports = { ShortUrl };