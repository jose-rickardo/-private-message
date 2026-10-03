# Site pour Kanto (Next.js)

Deux pages dans une seule route :

1. Une page d'entrée neutre qui demande une date.
2. Une lettre romantique qui s'affiche quand la bonne date est saisie.

## Lancer le projet

```bash
npm install
npm run dev      # http://localhost:3000
```

Pour la mise en ligne :

```bash
npm run build
npm start
```

Le plus simple pour le publier est Vercel : importe le dossier, il détecte Next.js tout seul.

## Modifier le contenu

Tout se change dans `lib/config.js` : la date secrète, l'indice, le prénom, les paragraphes de la lettre, la phrase en grand, la signature.

La date est acceptée sous plusieurs formes : `07/07/2009`, `7 juillet 2009`, `07072009`, `2009-07-07`.

## Structure

```
app/
  layout.js        titre neutre, polices Google, <html lang="fr">
  page.js          affiche <App />
  globals.css      thème neutre + thème romantique (classe body.romance)
  icon.svg         icône d'onglet neutre (cadenas)
components/
  App.js           bascule entre l'entrée et la lettre
  Welcome.js       page de la date
  Letter.js        page de la lettre
  Petals.js        pétales et cœurs qui tombent (canvas)
  Icons.js
lib/
  config.js        le contenu à modifier
  date.js          lecture des formats de date
  chime.js         petite note de cristal à l'ouverture
```

## À savoir

La date et le texte sont dans le code envoyé au navigateur. C'est suffisant pour une surprise, mais ce n'est pas une vraie sécurité.
