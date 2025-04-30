# 🏠 service-immobilier

Plateforme web et mobile complète pour la gestion, la location, la vente et le prêt de biens immobiliers.

📍 Repo GitHub : [https://github.com/Acharaf-Dev/service-immobilier.git](https://github.com/Acharaf-Dev/service-immobilier.git)

---

## 🚀 Objectif du projet

**service-immobilier** est une plateforme destinée aux agences immobilières pour :
- Publier des annonces de **location**, de **vente**, et de **prêt immobilier**.
- Gérer les utilisateurs (visiteurs, clients, propriétaires).
- Assurer un processus sécurisé de **transaction** avec contrôle administratif.
- Offrir un tableau de bord d’administration pour valider les demandes, gérer les documents, et suivre les paiements.

---

## 👥 Types d'utilisateurs

| Type d'utilisateur | Fonctionnalités principales |
|---------------------|-----------------------------|
| **Visiteur**        | Consultation des annonces |
| **Client**          | Demande de location, achat ou prêt ; Demande pour devenir propriétaire |
| **Propriétaire**    | Création et gestion d'annonces ; consultation de l'activité |
| **Administrateur**  | Validation des profils, annonces, paiements, prêts |
| **Employé**         | Assistance à l'administration et à la modération |

---

## ⚙️ Architecture du projet

### 📁 Arborescence du projet

```
service-immobilier/
├── .gitignore
├── .env
├── docker-compose.yml
├── README.md
│
├── frontend/                        # Frontend Next.js
│   ├── .env.local
│   ├── package.json
│   ├── public/
│   ├── styles/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   ├── dashboard/
│   │   │   ├── admin.tsx
│   │   │   ├── employee.tsx
│   │   │   ├── client.tsx
│   │   │   └── owner.tsx
│   │   └── annonces/
│   │       ├── [id].tsx
│   │       └── create.tsx
│   ├── components/
│   ├── utils/
│   └── types/
│
├── backend/                         # Backend Laravel
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
│   │   │   └── Middleware/
│   │   ├── Models/
│   │   └── Policies/
│   └── tests/
│
├── deployment/                      # Déploiement (Nginx, certbot, scripts)
│   ├── nginx/
│   ├── certbot/
│   └── scripts/
│
├── ci-cd/                           # Intégration Continue / Déploiement
│   ├── github-actions/
│   └── docker/
```
## 🧾 Description des principaux dossiers/fichiers
### 📦 frontend/
Contient l’interface utilisateur Next.js

Pages séparées selon le rôle (admin, employé, etc.)

Utilisation de axios.ts pour communiquer avec l’API backend

### 🔧 backend/
Laravel utilisé pour gérer les API REST

Routes API définies dans routes/api.php

Système de rôles : propriétaire, client, admin, etc.

Gestion des annonces, paiements, contrôles de documents, etc.

### 🐳 docker-compose.yml
Définit les services :

frontend (Next.js)

backend (Laravel)

mysql

nginx pour le reverse proxy

phpmyadmin pour l'administration base de données

### 📄 .env (global)
Coordonne les variables d’environnement des sous-projets

### 🚀 deployment/ & ci-cd/
Contiennent les fichiers pour le déploiement sur un VPS (Nginx, SSL, scripts shell)

GitHub Actions ou autre CI/CD pour les push sur main ou develop

---
## 🔧 Installation locale

### Prérequis
- Docker / Docker Compose
- Node.js >= 18
- PHP >= 8.2

### Lancement via Docker

```bash
git clone https://github.com/Acharaf-Dev/service-immobilier.git
cd service-immobilier
cp .env.example .env

# Build & start
docker-compose up --build
```

### Backend Laravel
- URL API: http://localhost:8000
- DB: MySQL

### Frontend Next.js
- URL: http://localhost:3000

## 👩‍💻 Profils et permissions

| Rôle          | Actions principales |
|----------------|---------------------|
| **Visiteur**   | Voir les annonces |
| **Client**     | Louer / acheter un bien, demander à devenir propriétaire |
| **Propriétaire** | Créer / gérer ses annonces |
| **Employé**     | Modération, support client |
| **Admin**      | Gestion utilisateurs, validation propriétaires & transactions |

## 💳 Paiement

- **Carte bancaire** : intégration Stripe
- **Virement bancaire** : manuel, avec validation admin

## ⚖️ Licences & Infos

- Auteur : [Acharaf Dev](https://github.com/Acharaf-Dev)
- Licence : MIT
- API REST + JWT via Sanctum
- Inspiré par les besoins réels d'agences immobilières


---

## ⚙️ Technologies utilisées

- **Frontend** : Next.js, Tailwind CSS, HTML5
- **Backend** : PHP 8.x, MySQL
- **Paiement** : Stripe (CB) et virement bancaire
- **Sécurité** : JWT Auth, validation manuelle des documents, contrôles anti-fraude
- **CI/CD** : GitHub Actions, déploiement automatique vers VPS
- **Serveur** : VPS Linux (Debian/Ubuntu), Nginx/Apache

---

## 💡 Fonctionnalités principales

### 🎯 Pour les clients :
- Inscription et consultation des annonces
- Demande de location, d’achat ou de prêt
- Paiement sécurisé via carte bancaire ou virement
- Demande de changement de rôle pour devenir propriétaire

### 🏘️ Pour les propriétaires :
- Création d’annonces avec date d’expiration
- Gestion complète de leurs biens
- Visualisation des statistiques d'interaction

### 🛡️ Pour l'administration :
- Validation des demandes (location, achat, prêt, changement de rôle)
- Supervision des transactions et détection de fraude
- Accès aux documents justificatifs
- Gestion des utilisateurs et des annonces

---

## 💰 Système de paiement

- **Méthodes acceptées** :
  - Carte bancaire via Stripe
  - Virement bancaire avec validation manuelle

- **Contrôles** :
  - Documents justificatifs avant validation de transactions
  - Notifications d’activité suspecte
  - Paiement validé uniquement après vérification par un administrateur

---

## 🔧 Installation (mode dev)

# Cloner le repo
git clone https://github.com/Acharaf-Dev/service-immobilier.git

# Frontend
cd service-immobilier/frontend
npm install
npm run dev

# Backend (ex. avec Laravel, à adapter selon ton stack PHP)
cd ../backend
composer install
php artisan migrate
php artisan serve

## 🧪 Lancement des tests

# Frontend
npm run test
# Backend
php artisan test

## 🚢 Déploiement

Le déploiement se fait sur un VPS Linux avec les étapes suivantes :

Configuration de Nginx/Apache

Envoi automatique via CI/CD (GitHub Actions)

Surveillance et relance des services via systemd ou supervisor

## ✅ Feuille de route (Roadmap)

 Gestion des rôles utilisateurs

 Création et expiration des annonces

 Système de paiement sécurisé

 Tableau de bord administrateur

 Application mobile (React Native ou Flutter)

 Intégration de notifications push/email

 Module de messagerie interne

## 👨‍💻 Auteur

Développé par Acharaf-Dev
👉 Repo : https://github.com/Acharaf-Dev/service-immobilier.git

## 📄 Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

