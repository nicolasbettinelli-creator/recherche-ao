# Recherche AO

Application web indépendante de recherche rapide dans le livret des amendes d’ordre.

## Description

Recherche AO est une application simple, gratuite et utilisable sur ordinateur, tablette ou téléphone.

Elle permet de rechercher rapidement une amende d’ordre par :

- numéro AO ;
- mot-clé ;
- catégorie ;
- montant ;
- situation concrète.

L’application fonctionne sans base de données, sans serveur et sans abonnement.  
Les données sont stockées localement dans le fichier `data.js`.

## Contenu intégré

L’application contient les principales catégories du livret AO 2023 :

- Conducteurs — dispositions administratives ;
- Stationnement et arrêt ;
- Véhicules automobiles en mouvement ;
- Construction et équipement des véhicules ;
- Détenteurs de véhicules ;
- Cyclistes, cyclomotoristes et vélos-taxis électriques ;
- Passagers ;
- Piétons et engins assimilés à des véhicules ;
- Navigation intérieure ;
- Autres lois fédérales.

## Fonctionnalités

- Recherche instantanée ;
- Filtres par catégories ;
- Bouton “Voir tout” ;
- Bouton “Réinitialiser” ;
- Bouton “Copier l’amende” ;
- Compteur automatique du nombre d’amendes enregistrées ;
- Mode nuit / mode jour ;
- Bouton “Remonter en haut” ;
- Interface adaptée au téléphone ;
- Préparation PWA pour ajout à l’écran d’accueil.

## Fichiers principaux

```text
application-ao/
│
├── index.html
├── style.css
├── script.js
├── data.js
├── manifest.json
├── service-worker.js
├── README.md
│
└── icons/
    ├── icon-192.png
    └── icon-512.png