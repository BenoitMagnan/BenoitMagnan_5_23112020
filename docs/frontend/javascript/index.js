const mainTitle = document.getElementById('mainTitle');
const cardHolder = document.getElementById('cardHolder');

const request = new XMLHttpRequest();

function fetchGroup(value) { //Le paramètre "value" à pour valeur teddies / cameras ou furnitures, en fonction du <button> cliqué sur la page index.html
  // console.log(value);
  mainTitle.innerHTML = "";
  cardHolder.innerHTML = "";
  request.onreadystatechange = function(){
      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // console.log(this.status);
        const response =  JSON.parse(this.responseText);
        // console.log(response);
        for (i = 0; i < response.length; i++) {
          cardHolder.innerHTML +=
          "<div class='col-12 col-lg-6 p-2 text-justify'>"
            + "<div class='card h-100 shadow'>"
              + "<div class='card-body'>"
                + "<h2>" + response[i].name + "</h2>"
                + "<div class='img-container'>"
                  + "<a class='stretched-link' href='frontend/pages/produit.html?page=" + value + "&index=" + i + "'><img class='col-12 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
                + "</div>"
                + "</div>"
              + "</div>"
            + "</div>"
          + "</div>";
          // console.log(response[i].name);
          // console.log(response[i].imageUrl);
          // console.log(response[i].description);
        }
      } else if (this.status == 404){
        cardHolder.innerHTML = "<h1>Nous n'avons pas trouvé la base de donnée correspondante à <em>'" + value +  ".'</em></h1>";
      }
    }
  request.open('GET', 'http://localhost:3000/api/' + value);
  request.send();
}