require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

const emailRouter = require('./src/routes/email');
const mercadopagoRouter = require('./src/services/mercadopago');


const PORT = process.env.PORT || 3004;

// Middleware
const allowedOrigins = ["http://localhost:3004", "https://pastech.com.ar","http://pastech.com.ar","http://localhost:5173"];

const corsOptions = {
  origin: allowedOrigins,
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));


app.use('/email', emailRouter);
app.use('/mercadopago', mercadopagoRouter);

// Rutas
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});