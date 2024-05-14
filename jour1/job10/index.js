const url = require('url');

// Déclaration de la constante URL
const URL = "https://www.google.com&search=nodejs";

// Récupérer le protocole utilisé
const parsedUrl = url.parse(URL);
const protocol = parsedUrl.protocol;
console.log("Protocole utilisé :", protocol);

// Récupérer le nom d'hôte
const hostname = parsedUrl.hostname;
console.log("Nom d'hôte :", hostname);

// Récupérer les paramètres de l’URL
const searchParams = parsedUrl.search;
console.log("Paramètres de l’URL :", searchParams);

// Reformater l’URL en une nouvelle URL valide en modifiant le nom d'hôte
const newURL = url.format({
    protocol: protocol,
    hostname: "www.laplateforme.io",
    search: searchParams
});
console.log("Nouvelle URL avec le nom d'hôte modifié :", newURL);

// Ajouter à cette nouvelle URL un paramètre
const newParams = "newParam=test";
const finalURL = newURL + '&' + newParams;
console.log("Nouvelle URL avec un paramètre ajouté :", finalURL);
