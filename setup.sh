#!/bin/bash

echo "🔧 Initialisation de l’environnement Docker pour service-immobilier..."

# Étape 1: Construire les conteneurs
echo "📦 Construction des images Docker..."
docker-compose build

# Étape 2: Lancer les conteneurs en arrière-plan
echo "🚀 Lancement des conteneurs..."
docker-compose up -d

# Étape 3: Attente du service MySQL (backend)
echo "⏳ Attente de la base de données..."
sleep 15

# Étape 4: Lancer les migrations backend
echo "📂 Exécution des migrations (backend)..."
docker exec service_immobilier_backend php artisan migrate --force

echo "✅ Setup terminé !"
echo "🌐 Frontend : http://localhost:3000"
echo "🔧 Backend : http://localhost:8000"
