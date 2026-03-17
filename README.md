# 🗺️ Carte des Agences de Voyages

Carte interactive des agences de voyages immatriculées en France (registre Atout France).

## Architecture

- **Firebase Firestore** : stockage des fiches agences
- **Firebase Authentication** : authentification admin + agences
- **Leaflet.js + MarkerCluster** : affichage cartographique
- **GitHub Pages** : hébergement

## Fichiers

| Fichier | Description |
|---------|-------------|
| `index.html` | Carte publique avec filtres (réseau, département, ville) |
| `admin.html` | Back-office admin + accès agence individuel |
| `import-csv.html` | Page d'import CSV vers Firestore |
| `widget.js` | Widget d'embed pour intégration CMS |
| `firestore.rules` | Règles de sécurité Firestore |

## Intégration sur TourMaG

```html
<div id="carte-agences-voyages"></div>
<script src="https://morgan13012.github.io/carte-agences-voyages/widget.js"></script>
```

## Données

- Source : registre Atout France des opérateurs de voyages
- ~4 165 agences immatriculées
- Géocodage via api-adresse.data.gouv.fr

## Projet Firebase

- Projet : carte-agences-voyages
- Console : https://console.firebase.google.com/
