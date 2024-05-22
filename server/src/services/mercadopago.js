const { MercadoPagoConfig, Preference, MerchantOrder } = require('mercadopago');

const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const precios = require('../PRECIOS');

// Agrega credenciales
const client = new MercadoPagoConfig({ accessToken: process.env.MP_ACCESS_TOKEN });

router.get('/generarLink', async (req, res) => {
    try {
        const preference = new Preference(client);
        const tipo = req.query.tipo;

        const correo = req.query.correo;
        const nombre = req.query.nombre;
        const numero = req.query.numero;
        console.log(correo, numero, nombre)
        const info = {
            correo,
            numero,
            nombre,
            tipo
        };
        console.log(info)
        if (!tipo || (tipo !== '0' && tipo !== '1' && tipo !== '2' && tipo !== '3')) {
            throw new Error('Valor de tipo inválido');
        }

        let items = [];
        switch (tipo) {
            case '0':
                items = [
                    {
                        title: 'Pastech Satelital Gratis',
                        unit_price: 1,
                        quantity: 1,
                        currency_id: 'ARS',
                    },
                ];
                break;
            case '1':
                items = [
                    {
                        title: 'Pastech Satelital Basico',
                        unit_price: precios[0],
                        quantity: 1,
                        currency_id: 'ARS',
                    },
                ];
                break;
            case '2':
                items = [
                    {
                        title: 'Pastech Satelital Intermedio',
                        unit_price: precios[1],
                        quantity: 1,
                        currency_id: 'ARS',
                    },
                ];
                break;
            case '3':
                items = [
                    {
                        title: 'Pastech Satelital Avanzado',
                        unit_price: precios[2],
                        quantity: 1,
                        currency_id: 'ARS',
                    },
                ];
                break;
            default:
                throw new Error('Valor de tipo inválido');
        }

        const body = {
            items,
            back_urls: {
                success: 'http://pastech.com.ar/confirmacion',
                failure: 'http://pastech.com.ar/',
                pending: 'http://pastech.com.ar/',
            },
            auto_return: 'approved',
            additional_info: JSON.stringify(info),
            // tambien tiene que ser variable de entorno
            notification_url: `http://${process.env.HOST}:${process.env.PORT}/mercadopago/notificar`,
        };
        const result = await preference.create({ body });
        res.json(result.init_point.replace('checkout', 'payment-link'));
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al generar el link de pago' });
    }
});

router.post('/notificar', async (req, res) => {

    const { body, query } = req;
    console.log(query.id);
    const topic = query.topic;
    const merchantOrder = new MerchantOrder(client);
    console.log('recibimos pago', topic);
    try {
        switch (topic) {
            // case "payment":
            //   const id = query.id 
            //   let payment = new Payment(client)
            //   let info = await payment.get({id}) 
            //   console.log(info.order.id)
            //   var infoMerchant = await merchantOrder.get({merchantOrderId:info.order.id})
            //   // si es payment obtenemos la merchant order
            //   //payment = await payment.get(id)
            //   break; 
            case 'merchant_order':
                const orderId = query.id;
                var infoMerchant = await merchantOrder.get({ merchantOrderId: orderId });
                break;
        }

        if (infoMerchant) {
            let total = 0;
            infoMerchant.payments.forEach((payment) => {
                console.log('\nPAYMENT: ', { payment });
                if (payment.status === 'approved' || payment.status === 'closed') {
                    total += payment.transaction_amount;
                }
            });

            // abrir la posibilidad de chequear con el paid_amount 
            // dentro del merchant order paid_amount > total_amount siempre y cuando la orden este closed

            if (total >= infoMerchant.total_amount) {
                console.log(typeof infoMerchant.preference_id);
                console.log('\nel pago se completo');
                cancelarLink(infoMerchant.preference_id).then((data) => console.log('se cancelo el link'));

                //Busco preferencia para matar el hilo y pegarle al back
                const pref = new Preference(client);
                try{
                    const data = await pref.get({ preferenceId: infoMerchant.preference_id });

                    let info = data.additional_info;
                    info = JSON.parse(info);
                    
                    let bodi = { nombre:info.nombre,numero:info.numero,correo:info.correo,tipo:info.tipo};
                
                    // aca el puerto tiene que ver variable de entorno
                    const back = await fetch(`http://localhost:${process.env.PORT}/email/emailCompra`, {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(bodi),
                    });
                    console.log(back)

                    const back2 = await fetch(`http://localhost:${process.env.PORT}/email/emailAvisoCompra`, {
                        method: 'POST', 
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(bodi),
                    });
                }
                catch(e){
                    console.log(e)
                }
                
            } else {
                console.log('\nel pago NO SE COMPLETO');
            }
        }
    } catch (e) {
        console.log('Salto un error a la hora de pagar el link');
        console.log('el error es el siguiente');
    }

    res.json('pago realizado con exito');
});

router.post('/cancelarPreference', async (req, res) => {
    const { id } = req.body;
    let response = '';
    try {
        response = await cancelarLink(id);
    } catch {
        console.log('hubo un error en el cancelar');
    }
    res.json({ response: 'Se cancelo el link de pago' });
});

async function cancelarLink(id) {
    const pref = new Preference(client);
    try {
        const date = obtenerFechaISO8601();
        console.log(date);
        const data = await pref.update({ id: id, updatePreferenceRequest: { expiration_date_to: date } });
        const info = await pref.get({ preferenceId: id });
        console.log(info);
    } catch (e) {
        console.log(e);
    }
}

function obtenerFechaISO8601() {
    const fecha = new Date();

    const anio = fecha.getFullYear();
    const mes = pad(fecha.getMonth() + 1);
    const dia = pad(fecha.getDate());
    const horas = pad(fecha.getHours() - 1);
    const minutos = pad(fecha.getMinutes());
    const segundos = pad(fecha.getSeconds());
    const milisegundos = fecha.getMilliseconds();

    // Obtener la diferencia de tiempo con UTC en minutos
    const offsetMinutos = fecha.getTimezoneOffset();

    // Ajustar la lógica para que siempre sea -04:00
    const offsetHoras = -4;

    // Construir la cadena de fecha con la zona horaria y los milisegundos
    const zonaHoraria = `${offsetHoras < 0 ? '-' : '+'}${pad(Math.abs(offsetHoras))}:${pad(offsetMinutos % 60)}`;
    const fechaFormateada = `${anio}-${mes}-${dia}T${horas}:${minutos}:${segundos}.${pad(milisegundos)}${zonaHoraria}`;

    return fechaFormateada;
}

function pad(numero) {
    return numero < 10 ? '0' + numero : numero;
}

module.exports = router;
