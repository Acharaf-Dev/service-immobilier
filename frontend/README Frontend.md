# Frontend - service-immobilier

Ce dossier contient le code source du **frontend** de la plateforme service-immobilier, basé sur **Next.js**, **React**, et **Tailwind CSS**.

## 🚀 Technologies
- Next.js
- React
- Tailwind CSS
- TypeScript
- Axios

## 📁 Structure principale
- `pages/` : pages de l'application (accueil, login, dashboard, etc.)
- `components/` : composants réutilisables
- `utils/` : helpers (auth, axios)
- `types/` : définitions de types TypeScript

## ▶️ Démarrer le projet
```bash
cd frontend
npm install
npm run dev
```

## ⚙️ Variables d'environnement (`.env.local`)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

---



## 🧱 Arborescence

```
frontend/
├── components/             # Composants réutilisables (Navbar, Footer, etc.)
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── AnnonceCard.tsx
├── pages/                  # Pages principales du site
│   ├── index.tsx
│   ├── login.tsx
│   ├── register.tsx
│   ├── annonces/
│   │   ├── [id].tsx
│   │   └── create.tsx
│   └── dashboard/
│       ├── admin.tsx
│       ├── employee.tsx
│       ├── client.tsx
│       └── owner.tsx
├── public/images/          # Fichiers statiques (images)
├── styles/                 # Fichiers CSS globaux
│   └── globals.css
├── types/                  # Types TypeScript
│   └── user.ts
├── utils/                  # Fonctions utilitaires (auth, axios, etc.)
│   ├── auth.ts
│   └── axios.ts
├── .env.local              # Variables d’environnement locales
├── next.config.js          # Configuration Next.js
├── tailwind.config.js      # Configuration Tailwind CSS
└── package.json            # Dépendances Node.js
```