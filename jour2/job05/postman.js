// Vérifier le code de statut HTTP
pm.test("Status code is 404", function () {
    pm.response.to.have.status(404);
});

// Vérifier le message d'erreur dans la réponse JSON
pm.test("Error message is present", function () {
    pm.response.to.have.jsonBody("error");
});
