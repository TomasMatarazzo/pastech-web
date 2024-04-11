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
        if (!tipo || (tipo !== '0' && tipo !== '1' && tipo !== '2' && tipo !== '3')) {
            throw new Error('Valor de tipo inválido');
        }

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
        throw new Error('Valor de tipo inválido' + error);
    }
}


  export { enviarCorreo, generarLink };