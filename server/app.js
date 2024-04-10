require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const emailRouter = require('./src/routes/email');
const mercadopagoRouter = require('./src/services/mercadopago');


const PORT = process.env.PORT || 3003;

// Middleware
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/email', emailRouter);
app.use('/mercadopago', mercadopagoRouter);

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});