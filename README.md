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
- `css/style.css` — styles, mêmes couleurs que l'application mobile

## À faire avant mise en ligne

- Le formulaire de contact (`#contact`) ne fait qu'afficher un `action="#"` :
  il faut le relier à un vrai service (ex. Firebase Function, Mailchimp,
  Formspree) pour collecter réellement les emails.
- Déploiement possible sur GitHub Pages, comme `ec-immo-site` (ajouter un
  fichier `CNAME` si un nom de domaine est prévu).
