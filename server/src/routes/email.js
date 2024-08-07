const express = require('express');
const EmailSender = require('../services/email.js');
const emailSender = new EmailSender();

const router = express.Router();

router.post('/emailConsulta', async (req, res) => {
    // Envio de mails para las consultas de los clientes
    const {nombre,correo,numero,textoConsulta} = req.body;

    try {
        await emailSender.enviarCorreoConsulta(nombre,correo,numero,textoConsulta);
        res.status(200).json({ message: 'Email de Consulta Enviado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar email' });
    }
});

router.post('/emailCompra', async (req, res) => {

    const {nombre, correo} = req.body;
    console.log(nombre,correo)

    try {
        await emailSender.enviarCorreoCompra(nombre,correo);

        // faltaria avisar a pastech que se realizo una compra
        res.status(200).json({ message: 'Email de compra enviado' });
    } catch (error) {
        console.log(error)
        res.status(500).json({error});
    }
});

router.post('/emailAvisoCompra', async (req, res) => {
    const {nombre,correo,numero,tipo} = req.body;

    try {
        await emailSender.enviarAvisoDeCompra(nombre,correo,numero,tipo);
        res.status(200).json({ message: 'Email de Consulta Enviado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al enviar email' });
    }
});

module.exports = router;