# CI/CD - Déploiement de service-immobilier

Ce dossier contient la configuration pour le **déploiement automatisé** de la plateforme avec **GitHub Actions** et **Docker**.

## ⚙️ Structure
- `github-actions/deploy.yml` : pipeline GitHub Actions
- `docker/` : Dockerfiles pour le frontend et backend
- `deployment/` : fichiers NGINX et certificats SSL

## 🔁 Pipeline (GitHub Actions)
Déclenchement automatique à chaque push sur `main` ou `develop` :
- Build des images Docker
- Push vers un registre (ex: Docker Hub)
- Déploiement sur un VPS via SSH

## 📂 Dockerfiles
- `Dockerfile.frontend` : build Next.js
- `Dockerfile.backend` : build Laravel + PHP

## 🚀 Script de déploiement
```bash
bash deployment/scripts/deploy.sh
```

---



## 🧱 Arborescence

```
ci-cd/
├── github-actions/
│   └── deploy.yml          # Workflow GitHub Actions
├── docker/
│   ├── Dockerfile.backend  # Dockerfile pour Laravel
│   └── Dockerfile.frontend # Dockerfile pour Next.js
deployment/
├── nginx/
│   └── default.conf        # Configuration du serveur NGINX
├── certbot/                # Certificats SSL (Let's Encrypt)
├── scripts/
│   └── deploy.sh           # Script de déploiement automatisé
```