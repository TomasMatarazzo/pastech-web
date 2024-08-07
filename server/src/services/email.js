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
        // Mail de aviso a pastech que se realizo una compra
        let tipoSubscripcion;
        switch(tipoCompra) {
            case "0":
                tipoSubscripcion = "Subscripción Gratuita";
                break;  
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
                            color: #000000; /* Texto blanco */
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
                    <h2>¡Gracias por adquirir nuestros servicios en Pastech!</h2>
                    <p>Hola, ${nombre}</p>
                    <p>Agradecemos sinceramente tu elección de nuestros servicios. Para comenzar a disfrutar de nuestra plataforma, te invitamos a visitar <a href="http://www.pastech2.com.ar">www.pastech2.com.ar</a>.</p>
                    <strong>
                        <p>¡Gracias por confiar en nosotros!.</p>
                        <p>Saludos,<br/>El equipo de Pastech</p>
                    </strong>
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