service-immobilier/
├── .gitignore
├── docker-compose.yml
├── README.md
├── .env
│
├── frontend/                             # Frontend Next.js (interface utilisateur)
│   ├── .env.local
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── public/
│   │   └── images/
│   ├── styles/
│   │   └── globals.css
│   ├── pages/
│   │   ├── index.tsx                     # Page d'accueil
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── dashboard/                   # Dashboards séparés par rôle
│   │   │   ├── admin.tsx
│   │   │   ├── employee.tsx
│   │   │   ├── client.tsx
│   │   │   └── owner.tsx
│   │   └── annonces/
│   │       ├── [id].tsx
│   │       └── create.tsx
│   ├── components/                       # Composants UI partagés
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── AnnonceCard.tsx
│   │   └── ProtectedRoute.tsx
│   ├── utils/
│   │   ├── axios.ts                      # Instance Axios
│   │   └── auth.ts                       # Auth helper
│   └── types/
│       └── user.ts
│
├── backend/                              # Backend Laravel
│   ├── .env
│   ├── artisan
│   ├── composer.json
│   ├── config/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── routes/
│   │   └── api.php
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/
│   │   │   │   ├── AuthController.php
│   │   │   │   ├── UserController.php
│   │   │   │   ├── AnnonceController.php
│   │   │   │   └── AdminController.php
│   │   │   └── Middleware/
│   │   ├── Models/
│   │   │   ├── User.php
│   │   │   ├── Annonce.php
│   │   │   ├── Transaction.php
│   │   │   └── Role.php
│   │   └── Policies/
│   └── tests/
│       └── Feature/
│
├── deployment/
│   ├── nginx/
│   │   └── default.conf
│   ├── certbot/
│   └── scripts/
│       └── deploy.sh
│
├── ci-cd/
│   ├── github-actions/
│   │   └── deploy.yml
│   └── docker/
│       ├── Dockerfile.frontend
│       └── Dockerfile.backend

## 🧾 Description des principaux dossiers/fichiers
# 📦 frontend/
Contient l’interface utilisateur Next.js

Pages séparées selon le rôle (admin, employé, etc.)

Utilisation de axios.ts pour communiquer avec l’API backend

# 🔧 backend/
Laravel utilisé pour gérer les API REST

Routes API définies dans routes/api.php

Système de rôles : propriétaire, client, admin, etc.

Gestion des annonces, paiements, contrôles de documents, etc.

## 🐳 docker-compose.yml
Définit les services :

frontend (Next.js)

backend (Laravel)

mysql

nginx pour le reverse proxy

phpmyadmin pour l'administration base de données

## 📄 .env (global)
Coordonne les variables d’environnement des sous-projets

## 🚀 deployment/ & ci-cd/
Contiennent les fichiers pour le déploiement sur un VPS (Nginx, SSL, scripts shell)

GitHub Actions ou autre CI/CD pour les push sur main ou develop