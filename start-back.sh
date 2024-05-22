#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 


git pull
nvm use 16.20.1
# Detener el proceso existente si está en ejecución
sudo pm2 stop server

# Reiniciar el proceso
sudo pm2 start server/app.js --name server

# Mostrar el estado después de reiniciar
sudo pm2 status