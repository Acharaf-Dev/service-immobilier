#!/bin/bash

# Déploiement du projet
echo "Déploiement du projet sur le serveur..."

# Récupérer la dernière version
git pull origin main

# Build les conteneurs Docker
docker-compose down
docker-compose up --build -d

# Redémarrer les services
docker-compose restart

# Lancer les migrations de la base de données
docker-compose exec backend php artisan migrate --force

# Mettre à jour les certificats SSL (si vous utilisez Certbot)
docker-compose exec certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com

echo "Déploiement terminé !"
