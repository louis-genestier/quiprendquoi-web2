# Qui prend quoi

## Installation

`npm install`

`npm run start`

## Améliorations apportées

- Affichage de la liste des items sur la page événément (`app.js`, `party.pug`)
- Possibilité de supprimer un item (`app.js`, `party.pug`)
- Rafraîchissement automatique des items avec les WebSockets (`socket.js`, `scripts/sockets.js`)
- Utilisation de l'api de Notification pour signaler a l'utilisateur l'ajout ou la suppression d'items (`scripts/sockets.js`)


## Article personnel

### Sujet : Les WebSockets  

> WebSocket est une technologie évoluée qui permet d'ouvrir un canal de communication bidirectionnelle entre un navigateur (côté client) et un serveur. Avec cette API vous pouvez envoyer des messages à un serveur et recevoir ses réponses de manière événementielle sans avoir à aller consulter le serveur pour obtenir une réponse.
Source: [MDN](https://developer.mozilla.org/fr/docs/Web/API/WebSockets_API)  
>La spécification permettant d'utiliser les WebSockets est développée par le W3C, tandis que le protocole de communication est standardisé par l'IETF.  
Source: [developpez.com](https://javascript.developpez.com/actu/83882/L-API-Websockets-ce-que-c-est-et-comment-l-utiliser/) 


Le protocole de websocket possède 2 versions:
  - une version strandard `ws://url:port`
  - une version sécurisée `wss://url:port`

Il se base sur TCP et à pour but de simplifier la communication client/serveur, les données peuvent transiter n'importe quand à partir du moment où la connexion est ouverte.  
L'initialisation d'une connexions à un WebSocket coté front-end est très simple, une seule ligne suffit:  
``` Javascript
const ws = new WebSocket('ws://url.com/');
```

L'envoi de donnée, la reception ainsi que la fermeture sont tout aussi simple:      
``` Javascript
const data = {
  name: 'Louis',
  msg: 'Salut !',
};
// envoyer des données
ws.send(JSON.stringify(data));

// réception des données
ws.onmessage = (e) => {
  console.log(e.data);
}

// fermeture de la connexions
ws.close();
```