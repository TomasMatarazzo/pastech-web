#!/bin/bash

# Detener el proceso existente si está en ejecución
pm2 stop server

# Reiniciar el proceso
pm2 start /ruta/a/tu/archivo/app.js --name server

# Mostrar el estado después de reiniciar
pm2 status