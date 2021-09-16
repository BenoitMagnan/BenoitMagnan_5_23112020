//RECUPERATION DES PARAMETRES PASSES DANS L'URL DEPUIS INDEX.JS AU CHARGEMENT DE LA PAGE
const cardHolder = document.getElementById('cardHolder');
  
window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const index = params.get('index');
    // console.log(index);
    const page = params.get('page');
    // console.log(page);
    switch(page) {
      case 'teddies':
        fetchProduct(index, page);
        // console.log(index);
        // console.log(page);
        break;
      case 'cameras' :
        fetchProduct(index, page);
        // console.log(index);
        // console.log(page);
        break;
      case 'furniture' :
        fetchProduct(index, page);
        // console.log(index);
        // console.log(page);
        break;
      default:
        cardHolder.innerHTML += "<h1>Le paramètre URL : <mark>'" + page + "'</mark> ne correspond à aucune base de données.</h1>"
        + "<div><p>* Veillez à ce que ce paramètre corresponde à 'teddies', 'cameras' ou 'furniture'.</p></div>";
    }
})


//RECUPERATION DES DONNEES DE L'API EN FONCTION DE L'ARGUMENT 'PAGE'
const request = new XMLHttpRequest();

function fetchProduct(index, page){
    const url = 'http://localhost:3000/api/' + page
    // console.log(url);

    request.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
          const response =  JSON.parse(this.responseText);
          // console.log(response);
          let product;

          switch(page) {
            case 'teddies':
              product = response[index].colors;
              // console.log(product);
              break;
            case 'cameras' :
              product = response[index].lenses;
              // console.log(product);
              break;
            case 'furniture' :
              product = response[index].varnish;
              // console.log(product);
            break;
          }

          // TEST DES DONNEES EN FONCTION DE L'INDEX : CHAMPS [0-1-2-3-4] A MODIFIER
          // console.log(response[0].name);
          // console.log(response[0].imageUrl);
          // console.log(response[0].description);
          // console.log(response[0].price);
          // console.log(response[0]._id);
          //console.log(response[0].colors);

          cardHolder.innerHTML +=
          "<div class='py-2 text-justify '>"
              + "<div class='card h-100 shadow'>"
              + "<div class='card-body d-flex flex-wrap'>"
                  + "<h2 id='name' class='col-12'>" + response[index].name + "</h2>"
                  + "<div class='col-md-6 img-container'>"
                    + "<img class='col-12 mx-auto my-4 d-block' src='" + response[index].imageUrl + "' alt='" + response[index].description + "'>"
                  + "</div>"
                  + "<div class='col-md-6 bg-light p-4 d-flex flex-column'>"
                    + "<p>" + response[index].description + "</p>"
                    + "<h3 id='price' class='font-weight-bold font-italic text-right mt-4'>" + response[index].price / 100 + " €</h3>"
                 
                    + "<form class='mt-4'> "
                      + "<div class='form-group d-flex flex-wrap justify-content-end'>"
                        + "<label class='col-lg-12 text-lg-right'><u>Modèles :</u></label>"
                        + "<select id='" + response[index]._id + "' class='form-control col-md-6 my-4'>"
                        + "</select>"
                      + "</div>"
                      + "<div class='form-group col-12 text-center'>"
                        + "<button id='storeData' type='submit' class='col-lg-6 submit float-right'>Ajouter au panier</button>"
                      + "</div>"
                      + "</form>";
                  + "</div>"
            + "</div>"
            + "</div>"
          + "</div>";
          
          const productChoice = document.getElementById(response[index]._id);
       
          for (i = 0; i < product.length; i++){
            productChoice.innerHTML += "<option>" + product[i] + "</option>";
            // console.log(product[i]);
          }
          
          let items = [];
          // console.log(items);
          // console.log(localStorage);
          
          if (localStorage.length > 0){
            items = JSON.parse(localStorage.getItem('items'));
          }
          // console.log(items);
          
          const storeData = document.getElementById('storeData');

          storeData.addEventListener('click', function(event){
            let object = {
              choice: productChoice.value,
              name: response[index].name,
              price: response[index].price,
              id: response[index]._id,
              imageUrl: response[index].imageUrl
            };
            // console.log(object);
            items.push(object);
            // console.log(items);
            localStorage.setItem('items', JSON.stringify(items));
            // console.log(localStorage);
            event.preventDefault();
          })
      }
    }
    request.open('GET', url);
    request.send();
}