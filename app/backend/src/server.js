const express = require('express');
const products = require('./data/products');

const app = express();
const port = 3001;

app.use(express.json());

// Endpoint para listar todos os produtos
app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});