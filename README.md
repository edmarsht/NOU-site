# NOU — site vitrine

Site statique (HTML/CSS) présentant le service NOU : le journal du
quotidien d'un enfant chez sa nounou, partagé en temps réel avec les
parents.

## Aperçu en local

```bash
python3 -m http.server 8000
```

Puis ouvre http://localhost:8000

## Structure

- `index.html` — page unique (hero, fonctionnalités, comment ça marche, contact)
- `css/style.css` — styles (police Fraunces + Plus Jakarta Sans, palette terracotta/crème)
- `js/main.js` — révélation au scroll, en-tête au scroll, validation du formulaire

## En ligne

Déployé sur GitHub Pages : https://edmarsht.github.io/NOU-site/

## À faire avant le vrai lancement

- Le formulaire de contact valide l'email et affiche un message de succès
  côté client, mais n'envoie encore les emails nulle part : il faut le
  relier à un vrai service (ex. Firebase Function, Mailchimp, Formspree).
