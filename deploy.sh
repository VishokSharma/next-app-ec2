#!/bin/bash

set -e

# Load NVM so node and npm are available
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"

cd ~/next-app-ec2

git pull origin main

npm install

npm run build