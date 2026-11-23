# TP Frontend — Reproduction de la Page d'Accueil de l'UN-CHK (TD1)

## 👤 Auteur / Membres
- **Nom et prénom :** Mouhamed NDIONE
- **Filière :** Master MICDA (Promotion 2025-2026) — Université Numérique Cheikh Hamidou KANE (UN-CHK)
- **Email institutionnel :** mouhamed.ndione2@unchk.edu.sn
- **Branche du dépôt :** `mouhamed-ndione`

## 📖 Description du projet
Ce projet consiste en l'intégration et la reproduction fidèle de la page d'accueil officielle de l'**Université numérique Cheikh Hamidou KANE (UN-CHK)** (`unchk.sn`), réalisée dans le cadre du module **TP Frontend** sous la supervision de **Dr Abdourahmane BALDÉ**.

L'objectif est d'appliquer les compétences et bonnes pratiques du développement web moderne :
- Structuration sémantique et accessible (HTML5) ;
- Conception d'un design fidèle à la charte graphique officielle avec adaptabilité responsive (CSS3 Vanilla, Flexbox, Grid) ;
- Implémentation d'interactions et animations dynamiques fluides (JavaScript Vanilla).

## 🛠️ Technologies utilisées
- **HTML5** : Balisage sémantique, métadonnées, accessibilité (attributs ARIA, balises sémantiques `<header>`, `<nav>`, `<section>`, `<footer>`).
- **CSS3 Vanilla** : Feuilles de styles modulaires, variables CSS personnalisées (`:root`), flexbox, grid, animations et transitions fluides, media queries pour une adaptabilité mobile/tablette/desktop complète.
- **JavaScript Vanilla** : Gestion du méga-menu, carrousel plein écran (défilement automatique, contrôles fléchés et pagination par puces), overlay de recherche et interactions utilisateurs.
- **Google Fonts** : Montserrat, Outfit, Open Sans, Rubik.

## 🚀 Fonctionnalités principales
- **Bannière héroïque (Hero Slider)** : Carrousel dynamique avec les diapositives officielles de l'université (pause au survol, flèches flottantes, puces de pagination).
- **Menu de navigation complet** : Header fixe/adaptatif, méga-menu interactif, blocs de navigation colorés conformes à la charte UN-CHK (Accueil en bleu `#007ba2`, Institution en jaune `#f5b335`).
- **Sections d'information & Cartes d'accès rapide** : Formations, admission, actualités récentes avec effets visuels au survol, chiffres clés de l'UN-CHK.
- **Vie estudiantine & Footer** : Présentation de la communauté, vie associative et pied de page complet avec liens utiles.

## ⚙️ Instructions pour exécuter le projet
Le projet ne requiert aucune dépendance externe, ni gestionnaire de paquets (Node.js/npm), ni serveur backend.

### Méthode 1 : Ouverture directe dans un navigateur
1. Clonez le dépôt (ou téléchargez les sources) :
   ```bash
   git clone https://github.com/abdourahman2025/TP_Frontend_MICDA_2025-2026.git
   ```
2. Accédez au dossier du projet.
3. Double-cliquez sur le fichier `index.html` ou ouvrez-le avec votre navigateur web préféré (Chrome, Firefox, Edge, Safari).

### Méthode 2 : Avec une extension de serveur local (recommandé pour VS Code)
1. Ouvrez le dossier du projet dans **Visual Studio Code**.
2. Installez l'extension **Live Server** (si ce n'est pas déjà fait).
3. Faites un clic droit sur `index.html` puis sélectionnez **« Open with Live Server »** (ou raccourci `Alt + L, Alt + O`).
4. Le projet s'ouvrira automatiquement à l'adresse `http://127.0.0.1:5500/index.html`.

## 📁 Structure du projet
```
TD1 Home Page UNCHK/
│
├── index.html        # Fichier principal HTML
├── styles.css        # Feuilles de styles CSS globales et responsive
├── script.js         # Logique interactive du carrousel et du menu
├── README.md         # Documentation complète du projet
└── assets/
    └── images/       # Bannières officielles, logos et photos des étudiants
```
