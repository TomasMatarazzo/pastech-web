#!/bin/bash
git pull
# Detener el proceso existente si está en ejecución
pm2 stop server

# Reiniciar el proceso
pm2 start server/app.js --name server

# Mostrar el estado después de reiniciar
pm2 status