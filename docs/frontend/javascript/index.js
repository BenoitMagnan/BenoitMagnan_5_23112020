const cardHolder = document.getElementById('cardHolder');
  const mainTitle = document.getElementById('mainTitle');

  const navButton = document.getElementById('navButton');
  const teddies = document.getElementById('teddies');
  const cameras = document.getElementById('cameras');
  const furniture = document.getElementById('furniture');
  
  const request = new XMLHttpRequest();

  teddies.addEventListener('click', fetchTeddies);
  cameras.addEventListener('click', fetchCameras);
  furniture.addEventListener('click', fetchFurniture);

  function fetchTeddies(){
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
                    + "<a class='stretched-link' href='frontend/pages/produit.html?page=teddies&index=" + i + "'><img class='col-12 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
                  + "</div>"
                  // + "<p class='p-2'>" + response[i].description + "</p>"
                  // + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
                  + "</div>"
                + "</div>"
              + "</div>"
            + "</div>";
          }
        }
      }
    request.open('GET', 'http://localhost:3000/api/teddies');    //http://localhost:3000/api/teddies'    https://jwdp5.herokuapp.com/api/teddies  
    request.send();
  }

  function fetchCameras(){
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
                    + "<a class='stretched-link' href='frontend/pages/produit.html?page=cameras&index=" + i + "'><img class='col-12 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
                  + "</div>"
                  // + "<p class='p-4 mt-4'>" + response[i].description + "</p>"
                  // + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
                  + "</div>"
                + "</div>"
              + "</div>"
            + "</div>";
          }
        }
      }
    request.open('GET', 'http://localhost:3000/api/cameras');    //http://localhost:3000/api/cameras'    https://jwdp5.herokuapp.com/api/cameras  
    request.send();
  }

  function fetchFurniture(){
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
                    + "<a class='stretched-link' href='frontend/pages/produit.html?page=furniture&index=" + i + "'><img class='col-12 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
                  + "</div>"
                  // + "<p class='p-4 mt-4'>" + response[i].description + "</p>"
                  // + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
                  + "</div>"
                + "</div>"
              + "</div>"
            + "</div>";
          }
        }
      }
    request.open('GET', 'http://localhost:3000/api/furniture');    //http://localhost:3000/api/furniture'    https://jwdp5.herokuapp.com/api/furniture  
    request.send();
  }