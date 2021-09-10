//REMPLISSAGE DU PANIER LIGNE PAR LIGNE AU CHARGEMENT DE LA PAGE
window.addEventListener('load', () => {
    const orderId = localStorage.getItem("orderId");
    const totalPanier = localStorage.getItem("totalPanier");
    const contact = JSON.parse(localStorage.getItem("contact"));

    document.getElementById("result").innerHTML = "<h1 class='my-4'>Merci pour votre commande</h1>"
    + "<div class='my-4'><p>Un mail de confirmation vous a été envoyé à l'adresse suivante :</p></div>"
    + "<div class='my-2'>" + contact.email + "</div>"
    + "<div class='my-4'>La commande n°" + orderId + " vous sera envoyé à l'adresse suivante :</div>"
    + "<div>" + contact.firstName + " " + contact['lastName'] + "</div>"
    + "<div>" + contact.address + "</div>"
    + "<div>" + contact.city + "</div>"
    + "<div class='my-4'>Rappel de votre commande : " + totalPanier + " €";
    localStorage.clear();
});