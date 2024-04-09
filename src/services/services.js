import axios from "axios";

async function enviarCorreo( nombre , correo ,numero, message) {

    const data = {

      nombre,correo,numero,textoConsulta:message
    };
    const url = 'http://localhost:3000/email/emailConsulta'

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

async function generarLink(correo, tipo) {

    const url = 'http://localhost:3000/mercadopago/generarLink'

    tipo = tipo.toString()
    console.log(tipo)
    try {

        console.log('tipo', tipo)
        if (!tipo || (tipo !== '1' && tipo !== '2' && tipo !== '3')) {
            throw new Error('Valor de tipo inválido');
        }

        const response = await axios.get(url, {
            params: {
                tipo: tipo
            }
        });

        return response.data
    } catch (error) {
        throw new Error('Valor de tipo inválido' + error);
    }
}


  export { enviarCorreo, generarLink };