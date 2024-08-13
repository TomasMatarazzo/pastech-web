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
                <body>
                    <div>
                        <h1>Nuevo mensaje de consulta recibido</h1>
                        <p>Hola,</p>
                        <p>Se ha recibido un nuevo mensaje de consulta a través del formulario en la página web:</p>
                        <ul>
                            <li>Nombre del consultor: ${nombre}</li>
                            <li>Número de contacto: ${numero}</li>
                            <li>Correo electrónico: ${correo}</li>
                            <li>Texto de la consulta: ${textoConsulta}</li>
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
            subject: 'Nueva compra realizada en Pastech',
            html: `
                <html>
                <body>
                    <div >
                        <h1>Nueva compra realizada en Pastech</h1>
                        <ul>
                            <li><strong>Nombre del comprador:</strong> ${nombre}</li>
                            <li><strong>Número de contacto:</strong> ${numero}</li>
                            <li><strong>Correo electrónico:</strong> ${correo}</li>
                            <li><strong>Tipo de subscripción:</strong> ${tipoSubscripcion}</li>
                        </ul>
                        <p>Saludos</p>
                    </div>
                </body>
                </html>
            `
        };
        try {
            console.log('hola')
            await this.transporter.sendMail(mailOptions);
            console.log('¡Se envio mail a fernando!');
        } catch (error) {
            throw new Error('¡Vaya! ' + JSON.stringify(error));
        }
    }

    async enviarCorreoCompra(nombre, correoDestino) {
        const mailOptions = {
            from: from,
            to: correoDestino,
            subject: 'Bienvenido a Pastech',
            html: `
                <html>
                <body>
                <div >
                    <h2>¡Gracias por adquirir nuestros servicios!</h2>
                    <p>Hola, ${nombre}</p>
                    <p>Para comenzar a disfrutar de nuestra plataforma, te invitamos a visitar <a href="https://www.pastech2.com.ar"> https://www.pastech2.com.ar </a>.</p>
                    <p>Nos alegra que nos hayas elegido para tus necesidades tecnológicas.</p>
                    <p>Saludos,<br/>El equipo de Pastech</p>
                </div>
                </body>
                </html>
            `
        };
        try {
            console.log('hola')
            await this.transporter.sendMail(mailOptions);
            console.log('¡Se envio mail a comprador!');
        } catch (error) {
            throw new Error('¡Vaya! ' + JSON.stringify(error));
        }
    }
}


module.exports = EmailSender;