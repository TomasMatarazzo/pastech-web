
const precios = [13,43,60]
const fetch = require("node-fetch");


let valorDelDolar = {
    valor: null,
    fechaActualizacion: null
  };

async function obtenerValorDolar() {
    try {
      const ahora = new Date().getTime();
      
      // Si ya tenemos el valor del dólar y no ha pasado mucho tiempo desde la última actualización, retornarlo directamente
      if (valorDelDolar.valor !== null && valorDelDolar.fechaActualizacion !== null) {
        const tiempoTranscurrido = ahora - valorDelDolar.fechaActualizacion.getTime();
        const horasTranscurridas = tiempoTranscurrido / (1000 * 60 * 60); 
        if (horasTranscurridas < 24) {
          return valorDelDolar.valor;
        }
      }
      
      // Realizar el fetch solo si no tenemos el valor del dólar o ha pasado mucho tiempo desde la última actualización
      const response = await fetch("https://dolarapi.com/v1/dolares/oficial");
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      // Guardar el valor de venta redondeado hacia abajo y la fecha de actualización en memoria
      valorDelDolar.valor = Math.floor(data.venta);
      valorDelDolar.fechaActualizacion = new Date();
      
      return valorDelDolar.valor;
    } catch (error) {
      console.error('Hubo un problema con la solicitud fetch:', error);
      throw error; // Propagar el error para manejarlo en el contexto donde se llama la función
    }
  }
  
  // Ejemplo de uso:
  async function actualizarPrecios() {
    try {
      const valorDolar = await obtenerValorDolar();
      let preciosActualizados = precios.map(precio => Math.floor(precio * valorDolar));
      console.log('Precios actualizados', preciosActualizados);
      return preciosActualizados; 
    } catch (error) {
      console.error('Ocurrió un error al actualizar los precios:', error);
      throw error;
    }
  }
  
  // Exportar los precios actualizados
  module.exports = {
    preciosActualizados: async () => {
      try {
        return await actualizarPrecios();
      } catch (error) {
        console.error('Error al exportar los precios actualizados:', error);
        throw error;
      }
    },
    obtenerValorDolar
  };
  
  
  // Llama a la función para obtener y mostrar el valor del dólar oficial