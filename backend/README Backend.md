# Backend - service-immobilier

Ce dossier contient le **backend API** de la plateforme service-immobilier, développé avec **Laravel**.

## 🛠️ Technologies
- PHP 8.x
- Laravel 10.x
- MySQL
- Sanctum (authentification)
- Docker

## 📁 Structure principale
- `routes/api.php` : routes API REST
- `app/Http/Controllers/` : logique métier (auth, utilisateurs, annonces, etc.)
- `Models/` : entités principales (User, Annonce, Transaction, etc.)

## ▶️ Démarrer le projet
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## ⚙️ Variables d'environnement (`.env`)
```env
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=immobilier
DB_USERNAME=root
DB_PASSWORD=root
```

---



## 🧱 Arborescence

```
backend/
├── app/
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── AdminController.php
│   │   │   ├── AnnonceController.php
│   │   │   ├── AuthController.php
│   │   │   └── UserController.php
│   │   └── Middleware/
│   ├── Models/
│   │   ├── Annonce.php
│   │   ├── Role.php
│   │   ├── Transaction.php
│   │   └── User.php
│   └── Policies/
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── routes/
│   └── api.php
├── tests/
│   └── Feature/
├── .env                    # Fichier d’environnement
├── artisan                 # CLI Laravel
├── composer.json           # Dépendances PHP
└── public/
```