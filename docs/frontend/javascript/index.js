const cardHolder = document.getElementById('cardHolder');
const mainTitle = document.getElementById('mainTitle');
const navButton = document.getElementById('navButton');

const request = new XMLHttpRequest();
function fetchGroup(value){
  mainTitle.innerHTML = "";
  cardHolder.innerHTML = "";
  request.onreadystatechange = function(){
      if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
        const response =  JSON.parse(this.responseText);
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
        }
      }
    }
  request.open('GET', 'http://localhost:3000/api/' + value);
  request.send();
}