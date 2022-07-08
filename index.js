require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const ShortUrl = require('./models/model');
const bodyParser = require('body-parser');
const dns = require('dns');

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', (req, res) => {
    res.sendFile(`${process.cwd()}/views/index.html`);
});

// Your first API endpoint
app.get("/api/hello", (req, res) => {
    res.json({ greeting: 'Hello API' });
});

app.post('/api/shorturl/:originalUrl', (req, res) => {
    console.log('post request received');
    const originalUrl = req.params.originalUrl;
    console.log(originalUrl);
    /*
    const shortUrl = Math.floor(Math.random() * 1000000);
    const shortUrlObject = new ShortUrl({
        original_url: originalUrl,
        short_url: shortUrl
    });
    shortUrlObject.save((err, data) => {
        if (err) {
            res.json({ error: err });
        } else {
            res.json({ original_url: data.original_url, short_url: data.short_url });
        }
    });*/
});

app.listen(port, () => {
    console.log(`Node.js listening on port ${port}`);
});