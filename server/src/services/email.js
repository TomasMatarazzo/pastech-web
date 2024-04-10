const nodemailer = require('nodemailer');
const from = 'pastech.soporte@gmail.com'
const mailReceptor = 'geninfernando@gmail.com'

class EmailSender {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: from,
                pass: 'spjf mhco bopm qemo'
            }
        });
    }

    async enviarCorreoConsulta(nombre, correo, numero, textoConsulta) {
        const mailOptions = {
            from: from,
            to: mailReceptor, // aca iria el mail de fernando
            subject: 'Nuevo mensaje de consulta recibido',
            html: `
                <html>
                <head>
                    <style>
                        body {
                            background-color: #c7f168; /* Fondo verde claro */
                            color: #000000; /* Texto negro */
                            font-family: Arial, sans-serif; /* Fuente del texto */
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        h1 {
                            color: #ffffff; /* Texto blanco */
                        }
                        .logo {
                                margin-bottom: 20px;
                                margin:auto;
                                width:100px;
                                height:100px;
                                display: block;
                            }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Nuevo mensaje de consulta recibido</h1>
                        <p>Hola,</p>
                        <p>Se ha recibido un nuevo mensaje de consulta a través del formulario en la página web:</p>
                        <ul>
                            <li><strong>Nombre del consultor:</strong> ${nombre}</li>
                            <li><strong>Número de contacto:</strong> ${numero}</li>
                            <li><strong>Correo electrónico:</strong> ${correo}</li>
                            <li><strong>Texto de la consulta:</strong> ${textoConsulta}</li>
                        </ul>
                        <p>Saludos,<br/>El equipo de Pastech</p>
                    </div>
                </body>
                </html>
            `
        };
        try {
            console.log('hola')
            await this.transporter.sendMail(mailOptions);
            console.log('¡Tu correo ha sido enviado!');
        } catch (error) {
            throw new Error('¡Vaya! ' + JSON.stringify(error));
        }
    }

    async enviarAvisoDeCompra(nombre, correo, numero, tipoCompra) {
        let tipoSubscripcion;
        switch(tipoCompra) {
            case "1":
                tipoSubscripcion = "Subscripción Básica";
                break;
            case "2":
                tipoSubscripcion = "Subscripción Avanzada";
                break;
            case "3":
                tipoSubscripcion = "Subscripción Inteligente";
                break;
            default:
                tipoSubscripcion = "Tipo de subscripción no especificado";
        }
    
        const mailOptions = {
            from: from,
            to: mailReceptor, // aca iria el mail de fernando
            subject: 'Nueva compra realizada en tu empresa',
            html: `
                <html>
                <head>
                    <style>
                        body {
                            background-color: #c7f168; /* Fondo verde claro */
                            color: #000000; /* Texto negro */
                            font-family: Arial, sans-serif; /* Fuente del texto */
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        h1 {
                            color: #ffffff; /* Texto blanco */
                        }
                        .logo {
                            margin-bottom: 20px;
                            margin:auto;
                            width:100px;
                            height:100px;
                            display: block;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>Nueva compra realizada en tu empresa</h1>
                        <p>Hola,</p>
                        <p>Se ha realizado una nueva compra en tu empresa:</p>
                        <ul>
                            <li><strong>Nombre del comprador:</strong> ${nombre}</li>
                            <li><strong>Número de contacto:</strong> ${numero}</li>
                            <li><strong>Correo electrónico:</strong> ${correo}</li>
                            <li><strong>Tipo de subscripción:</strong> ${tipoSubscripcion}</li>
                        </ul>
                        <p>Saludos,<br/>El equipo de Pastech</p>
                    </div>
                </body>
                </html>
            `
        };
        try {
            console.log('hola')
            await this.transporter.sendMail(mailOptions);
            console.log('¡Tu correo ha sido enviado!');
        } catch (error) {
            throw new Error('¡Vaya! ' + JSON.stringify(error));
        }
    }

    async enviarCorreoCompra(nombre, correoDestino) {
        const mailOptions = {
            from: from,
            to: correoDestino,
            subject: 'Gracias por realizar una compra con Pastech',
            html: `
                <html>
                <head>
                    <style>
                        body {
                            background-color: #c7f168; /* Fondo blanco */
                            color: #000000; /* Texto negro */
                            font-family: Arial, sans-serif; /* Fuente del texto */
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        h1 {
                            color: #000000; /* Texto azul */
                        }
                        .logo {
                            margin-bottom: 20px;
                            margin:auto;
                            width:150px;
                            height:150px;
                            display: block;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img src="https://pastech-web.netlify.app/assets/icono-voGCpR3S.svg" alt="Logo de Pastech" class="logo"> 
                        <h1>¡Gracias por realizar una compra con Pastech!</h1>
                        <p>Hola, ${nombre}</p>
                        <p>Queremos expresar nuestro sincero agradecimiento por haber realizado una compra con nosotros. Valoramos tu confianza en nuestros productos y servicios.</p>
                        <p>Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en cualquier momento.</p>
                        <p>Esperamos que disfrutes de tu compra y que tengas una excelente experiencia con nuestros productos.</p>
                        <strong><p>Gracias nuevamente por elegir Pastech.</p>
                        <p>Saludos,<br/>El equipo de Pastech</p></strong>
                    </div>
                </body>
                </html>
            `
        };
        try {
            console.log('hola')
            await this.transporter.sendMail(mailOptions);
            console.log('¡Tu correo ha sido enviado!');
        } catch (error) {
            throw new Error('¡Vaya! ' + JSON.stringify(error));
        }
    }
}


module.exports = EmailSender;