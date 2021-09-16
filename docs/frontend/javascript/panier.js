//PASSE LE LOCALSTORAGE DANS ITEMS
const items = JSON.parse(localStorage.getItem('items'));
// console.log(items);

//RETIRE LA LIGNE HTML CONTENANT LES INFOS DE L'OBJET
function removeItem(element) {
  const itemToRemove = element.parentElement.parentElement;
  // console.log(itemToRemove);
  itemToRemove.remove();
}

//REMPLISSAGE DU PANIER LIGNE PAR LIGNE AU CHARGEMENT DE LA PAGE
window.addEventListener('load', () => {    

  //INITIALISE LA PAGE AVEC DES CHAMPS VIDES POUR LES INPUTS PRODUCTHOLDER ET DISMISSTOTAL. AJOUTE "VOTRE PANIER EST VIDE" DANS EMPTY
  if (items < 1 ){
      empty.innerHTML = "Votre panier est vide";
      productHolder.innerHTML = "";
      dismissTotal.innerHTML = "";
  } else {
  document.getElementById('formToCheck').querySelectorAll("[required]").forEach(function(input){
    input.value = "";
  });

  productHolder.innerHTML = "<theader>"
          + "<th>Modèle</th>"
          + "<th>Produit</th>"
          + "<th>Prix</th>"
          + "<th>Retirer</th>"
        + "</theader>"
  items.forEach(element => {

    // console.log(items);
    // console.log(element);
    // console.log(element.choice);
    // console.log(element.imageUrl);
    // console.log(element.price);
    productHolder.innerHTML += "<tr id='" + element + "'>"
      + "<td class='align-middle col-2'>" + element.choice + "</td>"
      + "<td class='align-middle col-4'>" + "<img class='mw-100 rounded shadow'src='" + element.imageUrl + "'></td>"
      + "<td class='align-middle col-3'><span class='price'>" + element.price / 100 + "</span>€</td>"
      + "<td class='align-middle col-3'><button class='removeItem ' onclick='removeItem(this);'><i class='fas fa-trash'></i></button></td>"
    + "</tr>"
    ;
    
    //CALCUL DU TOTAL DU PANIER
    const price = document.getElementsByClassName('price');
    const totalPanier = document.getElementById('totalPanier');
    
    let sum = 0;
    for(i = 0; i < price.length; i++){
      sum += parseInt(price[i].innerHTML);
      totalPanier.innerHTML = sum;
    }
    // console.log(sum);
    
    //RETIRER UN ELEMENT DU PANIER + UPDATE DU TOTAL DU PANIER
    const removeItem = document.getElementsByClassName('removeItem');
    for (i = 0; i < removeItem.length; i++) {
      
      removeItem[i].addEventListener("click", function() {
      
        //MISE A JOUR DU TOTAL
        let sum = 0;
        for(i = 0; i < price.length; i++){
          sum += parseInt(price[i].innerHTML);
          totalPanier.innerHTML = sum;
          // console.log(sum);
        }
        //RETRAIT DE L'OBJET DANS LE LOCALSTORAGE
        let items = JSON.parse(localStorage.getItem('items'));
        // console.log(items);
        items.splice(items.indexOf(items[i]), 1);
        // console.log(items);
        localStorage.setItem('items', JSON.stringify(items));
        // console.log(localStorage);
          
        //AFFICHAGE DU "PANIER VIDE" S'IL N'Y A PLUS D'ELEMENT DANS LE LOCALSTORAGE
        if (items.length < 1) {
          empty.innerHTML = "Votre panier est vide";
          productHolder.innerHTML = "";
          dismissTotal.innerHTML = "";
          // console.log("Le panier a bien été vidé");
        }
      });
    };          
  });

  //DESACTIVATION DU BOUTON SUBMIT SI LES REGEXPRs NE SONT PAS RESPECTER
  function disableSubmit(disabled) {
      if (disabled) {
          document.getElementById("Submit").setAttribute("disabled", true);
          // console.log(document.getElementById("Submit").attributes['disabled']);
      } else {
          document.getElementById("Submit").removeAttribute("disabled");
          // console.log(document.getElementById("Submit").attributes['disabled']);
      }
  }
  //REGEXPRs POUR CHAQUE INPUTs DU FORMULAIRE
  document.getElementById("firstName").addEventListener("input", function(event) {
      if (/^[A-zÀ-ÿ'\s-]{2,50}$/.test(event.target.value)) {
          document.getElementById("firstNameValidation").innerHTML = "";
          disableSubmit(false);
          // console.log(disableSubmit);
      } else {
          document.getElementById("firstNameValidation").innerHTML = "<sub>* Veuillez renseigner un prénom valide</sub>";
          disableSubmit(true);
      }
  });
  document.getElementById("lastName").addEventListener("input", function(event) {
      if (/^[A-zÀ-ÿ'\s-]{2,50}$/.test(event.target.value)) {
          document.getElementById("lastNameValidation").innerHTML = "";
          disableSubmit(false);
      } else {
          document.getElementById("lastNameValidation").innerHTML = "<sub>* Veuillez renseigner un nom valide</sub>";
          disableSubmit(true);
      }
  });
  document.getElementById("address").addEventListener("input", function(event) {
      if (/^[0-9]{1,6}[A-zÀ-ÿ'\s-]{3,50}$/.test(event.target.value)) {
          document.getElementById("addressValidation").innerHTML = "";
          disableSubmit(false);
      } else {
          document.getElementById("addressValidation").innerHTML = "<sub>* Veuillez renseigner une adresse valide</sub>";
          disableSubmit(true);
      }
  });
  document.getElementById("city").addEventListener("input", function(event) {
      if (/^[A-zÀ-ÿ'\s-]{2,50}$/.test(event.target.value)) {
          document.getElementById("cityValidation").innerHTML = "";
          disableSubmit(false);
      } else {
          document.getElementById("cityValidation").innerHTML = "<sub>* Veuillez renseigner un nom de ville valide</sub>";
          disableSubmit(true);
      }
  });
  document.getElementById("email").addEventListener("input", function(event) {
      if (/[a-z0-9._%+-]+@([a-z0-9]+\.)[a-z]{2,4}$/.test(event.target.value)) {
          document.getElementById("emailValidation").innerHTML = "";
          disableSubmit(false);
      } else {
          document.getElementById("emailValidation").innerHTML = "<sub>* Veuillez renseigner une adresse mail valide</sub>";
          disableSubmit(true);
      }
  });

  //VERRIFIE QUE TOUTES LES INPUTS ONT ETE REMPLIES
  document.getElementById("Submit").addEventListener('click', inputFilledChecker);
  function inputFilledChecker (event) {
      event.preventDefault();  
      let inputFilled = true;
      document.getElementById('formToCheck').querySelectorAll("[required]").forEach(function(input){
          if (!input.value) {
            inputFilled = false;
          }
          if (!inputFilled) {
            document.getElementById('error').innerHTML = '<sub>* Veuillez remplir tous les champs</sub>'
          } else {
            return true;
          }
      })
      if (inputFilled == true){
        addContact(event);
        disableSubmit(false);
      }
  }}

  //RENVOIE LES INFORMATIONS AU BACKEND
  function addContact(event) {
    event.preventDefault();     
    localStorage.setItem("totalPanier", totalPanier.innerHTML);
    let contact = {
      firstName : document.getElementById('firstName').value,
      lastName : document.getElementById('lastName').value,
      address : document.getElementById('address').value,
      city : document.getElementById('city').value,
      email : document.getElementById('email').value
    }
    // console.log(contact);
    localStorage.setItem("contact", JSON.stringify(contact));
    let products = [];
    items.forEach(element => {
      let productsId = element.id;
      products.push(productsId).toString();
    });
    // console.log(products);
    let send = {
        contact,
        products,
    }
    // console.log(send);
    // envoie des données au serveur
    const post = async function (data){
        try {
            let response = await fetch('http://localhost:3000/api/teddies/order', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(response.ok) {
                let data = await response.json();
                // console.log(data.orderId);
                localStorage.setItem("orderId", data.orderId);
                // console.log(localStorage);
                window.location = "commande.html";
            }
        } catch (error) {} 
    };
    post(send);
  }
});