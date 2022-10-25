const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/courseCatagories.json');
const products = require('./data/products.json');

app.get('/', (req, res) => {
    res.send('News API Running');
});

app.get('/courses-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(products);
    }
    else {
        const category_news = news.filter(n => n.category_id === id);
        res.send(category_news);
    }
})

app.get('/products', (req, res) =>{
    res.send(products);
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.listen(port, () => {
    console.log('products Server running on port', port);
})

