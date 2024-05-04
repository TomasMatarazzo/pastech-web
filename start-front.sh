#!/bin/bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" 


git pull
nvm use 16.20.1
npm run build
sudo cp -rf dist /var/www/html
sudo service apache2 restart