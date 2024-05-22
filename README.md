## Instrucciones para ejecutar la aplicación la maquina virtual

Estas instrucciones te guiarán para correr la aplicación en una máquina virtual después de haber realizado los commits correspondientes. La aplicación consta de un front-end desarrollado en React y un back-end para procesar pagos a través de MercadoPago.

## Cambios en el frontend
Una vez realizado los cambios(commits) dentro del frontend, unicamente lo que hay que hacer es ubicarnos
dentro de la carpeta de trabajo y volver a deployarlo. Para eso unicamente tenemos que correr el script 
`start-front.sh`  Esto lo que hace es recrear la carpeta dist y 
pasarla a /var/www/html y al final se reinicia el servidor.

1. **Acceder al directorio del proyecto:**
   ```bash
   cd pastech-web
   ```

2. **Ejecutar el script de inicio del front:**

   ```bash
   cd pastech-web
   ```
## Cambios en el backend
Una vez realizado los cambios(commits) dentro del backend, unicamente lo que hay que hacer es ubicarnos
dentro de la carpeta de trabajo y volver a deployarlo. Para eso unicamente tenemos que correr el script 
`start-back.sh`  Esto lo que hace es reiniciar la aplicacion y correrla con pm2

1. **Acceder al directorio del proyecto:**
   ```bash
   cd pastech-web
   ```

2. **Ejecutar los scripts de inicio:**

   ```bash
   sh start-back.sh
   ```


