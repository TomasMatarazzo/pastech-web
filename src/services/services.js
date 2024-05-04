import axios from "axios";
import { urlBack}  from "../assets/constants/constants.js"

async function enviarCorreo( nombre , correo ,numero, message) {

    const data = {

      nombre,correo,numero,textoConsulta:message
    };
    const url = `${urlBack}/email/emailConsulta`

      try {
          const response = await axios.post(url, JSON.stringify(data), {
              headers: {
                  'Content-Type': 'application/json'
              }
          });
          console.log(response)
          alert('¡Tu correo ha sido enviado!');
      } catch (error) {
          alert('¡Vaya! ' + error);
      }
  }

async function generarLink(correo, nombre,numero , tipo) {


    const url = `${urlBack}/mercadopago/generarLink`

    tipo = tipo.toString()
    try {

        console.log('tipo', tipo)

        console.log(correo, nombre,numero, tipo )
        const response = await axios.get(url, {
            params: {
                correo:correo,
                nombre:nombre,
                numero:numero,
                tipo: tipo,
            }
        });

        return response.data
    } catch (error) {
        throw new Error('Valor de tipo inválidoooo' + error);
    }
}

async function enviarCorreoCompraGratuita( nombre, correo,numero,tipo) {

    const url1 = `${urlBack}/email/emailCompra`
    const url2 = `${urlBack}/email/emailAvisoCompra`
    //cambiar este link

    tipo = tipo.toString()
    try {

        console.log(correo, nombre,numero, tipo )
        const data = {'correo':correo,'nombre':nombre,'numero':numero,'tipo':tipo}

        const response = await axios.post(url1, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const response2 = await axios.post(url2, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return response.data
    } catch (error) {
        throw new Error('Valor de tipo inválidoooo' + error);
    }
}


  export { enviarCorreo, generarLink, enviarCorreoCompraGratuita };