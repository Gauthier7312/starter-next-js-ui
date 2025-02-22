
# starter-next-js-ui

Ce projet est un starter pour une application Next.js. Il inclut une configuration de base pour démarrer rapidement avec Next.js, ainsi que des outils et des configurations supplémentaires pour améliorer le développement.

## Structure du projet

Voici une explication détaillée de la structure des fichiers et des dossiers du projet :

- `.env` : Fichier de configuration des variables d'environnement.
- `.gitignore` : Fichier spécifiant les fichiers et dossiers à ignorer par Git.
- `.next/` : Dossier généré par Next.js contenant les fichiers de build et de cache.
  - `app-build-manifest.json` : Manifest des builds de l'application.
  - `build/` : Dossier contenant les fichiers de build.
  - `build-manifest.json` : Manifest des builds.
  - `cache/` : Dossier de cache.
  - `fallback-build-manifest.json` : Manifest de build de secours.
  - `package.json` : Fichier de configuration des dépendances pour le build.
  - `react-loadable-manifest.json` : Manifest pour le chargement dynamique de React.
  - `server/` : Dossier contenant les fichiers du serveur.
  - `static/` : Dossier contenant les fichiers statiques.
  - `trace` : Fichier de trace pour le débogage.
  - `transform.js` : Script de transformation.
  - `types/` : Dossier contenant les types TypeScript.
- `components.json` : Fichier de configuration des composants.
- `eslint.config.mjs` : Configuration ESLint pour le linting du code.
- `middleware.ts` : Fichier de middleware pour Next.js.
- `next-env.d.ts` : Déclarations de types pour Next.js.
- `next.config.ts` : Configuration de Next.js.
- `package.json` : Fichier de configuration des dépendances du projet.
- `pnpm-lock.yaml` : Fichier de lock pour PNPM.
- `postcss.config.mjs` : Configuration PostCSS.
- `public/` : Dossier contenant les fichiers publics accessibles depuis le navigateur.
- `README.md` : Fichier de documentation du projet.
- `src/` : Dossier contenant le code source de l'application.
  - `api/` : Dossier pour les API.
  - `app/` : Dossier pour les pages de l'application.
  - `auth/` : Dossier pour l'authentification.
  - `components/` : Dossier pour les composants réutilisables.
  - `config-global.ts` : Fichier de configuration globale.
  - `hooks/` : Dossier pour les hooks personnalisés.
  - `layouts/` : Dossier pour les layouts de l'application.
  - `lib/` : Dossier pour les bibliothèques et utilitaires.
  - `locales/` : Dossier pour les fichiers de localisation.
  - `provider/` : Dossier pour les providers de contexte.
  - `sections/` : Dossier pour les sections de l'application.
  - `utils/` : Dossier pour les utilitaires.
- `tailwind.config.ts` : Configuration Tailwind CSS.
- `tsconfig.json` : Configuration TypeScript.

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante :

```sh
pnpm install
```

## Lancer le projet

Pour lancer le projet en mode développement, exécutez la commande suivante :

```sh
pnpm dev

```

Cela démarrera le serveur de développement et vous pourrez accéder à l'application à l'adresse `http://localhost:3000`.