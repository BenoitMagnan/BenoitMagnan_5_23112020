// let items = [];

// if (window.location.pathname.includes("index.html")){
//     const request = new XMLHttpRequest();

//     function fetchTeddies(){
//       const cardHolder = document.getElementById('cardHolder');
//       const mainTitle = document.getElementById('mainTitle');
//       mainTitle.innerHTML = "";
//       cardHolder.innerHTML = "";
//       request.onreadystatechange = function(){
//           if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
//             const response =  JSON.parse(this.responseText);
//             for (i = 0; i < response.length; i++) {
//               cardHolder.innerHTML +=
//               "<div class='col-12 col-lg-6 p-2 text-justify'>"
//                 + "<div class='card h-100 shadow'>"
//                   + "<div class='card-body'>"
//                     + "<h2>" + response[i].name + "</h2>"
//                     + "<div class='img-container'>"
//                       + "<a class='stretched-link' href='pages/produit.html?page=teddies&index=" + i + "'><img class='col-8 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
//                     + "</div>"
//                     + "<p class='p-4 mt-4'>" + response[i].description + "</p>"
//                     + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
//                     + "</div>"
//                   + "</div>"
//                 + "</div>"
//               + "</div>";
//             }
//           }
//         }
//       request.open('GET', 'https://jwdp5.herokuapp.com/api/teddies');    //http://localhost:3000/api/teddies'    https://jwdp5.herokuapp.com/api/teddies  
//       request.send();
//     }
    
//     function fetchCameras(){
//       mainTitle.innerHTML = "";
//       cardHolder.innerHTML = "";
//       request.onreadystatechange = function(){
//           if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
//             const response =  JSON.parse(this.responseText);
//             for (i = 0; i < response.length; i++) {
            
//               cardHolder.innerHTML +=
//               "<div class='col-12 col-lg-6 p-2 text-justify'>"
//                 + "<div class='card h-100 shadow'>"
//                   + "<div class='card-body'>"
//                     + "<h2>" + response[i].name + "</h2>"
//                     + "<div class='img-container'>"
//                       + "<a class='stretched-link' href='pages/produit.html?page=cameras&index=" + i + "'><img class='col-8 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
//                     + "</div>"
//                     + "<p class='p-4 mt-4'>" + response[i].description + "</p>"
//                     + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
//                     + "</div>"
//                   + "</div>"
//                 + "</div>"
//               + "</div>";
//             }
//           }
//         }
//       request.open('GET', 'https://jwdp5.herokuapp.com/api/cameras');    //http://localhost:3000/api/cameras'    https://jwdp5.herokuapp.com/api/cameras  
//       request.send();
//     }
//     function fetchFurniture(){
//       mainTitle.innerHTML = "";
//       cardHolder.innerHTML = "";
//       request.onreadystatechange = function(){
//           if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
//             const response =  JSON.parse(this.responseText);
//             for (i = 0; i < response.length; i++) {
            
//               cardHolder.innerHTML +=
//               "<div class='col-12 col-lg-6 p-2 text-justify'>"
//                 + "<div class='card h-100 shadow'>"
//                   + "<div class='card-body'>"
//                     + "<h2>" + response[i].name + "</h2>"
//                     + "<div class='img-container'>"
//                       + "<a class='stretched-link' href='pages/produit.html?page=furniture&index=" + i + "'><img class='col-8 mx-auto d-block' src='" + response[i].imageUrl + "' alt='" + response[i].description + "'></a>"
//                     + "</div>"
//                     + "<p class='p-4 mt-4'>" + response[i].description + "</p>"
//                     + "<p class='p-4 text-right font-weight-bold font-italic'>" + response[i].price / 100 + " €</p>"
//                     + "</div>"
//                   + "</div>"
//                 + "</div>"
//               + "</div>";
//             }
//           }
//         }
//       request.open('GET', 'https://jwdp5.herokuapp.com/api/furniture');    //http://localhost:3000/api/furniture'    https://jwdp5.herokuapp.com/api/furniture  
//       request.send();
//     }
//     }
      
    
    
    
    
    
    
    
    
    
//     // // // // // // // // CODE POUR LA PAGE PRODUIT
//     if (window.location.pathname.includes("produit.html")){ 
//     window.addEventListener('load', () => {
//         const params = (new URL(document.location)).searchParams;
//         const index = params.get('index');
//         const page = params.get('page');
    
//         switch(page) {
//           case 'teddies':
//             fetchProduct(index, page);
//             break;
//           case 'cameras' :
//             fetchProduct(index, page);
//             break;
//           case 'furniture' :
//             fetchProduct(index, page);
//             break;
//         }
//     })
    
//     const request = new XMLHttpRequest();

//     function fetchProduct(index, page){
//         let cardHolder = document.getElementById('cardHolder');
//         const url = 'https://jwdp5.herokuapp.com/api/' + page
    
//         request.onreadystatechange = function(){
//           if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
//               const response =  JSON.parse(this.responseText);
              
//               let product;
//               switch(page) {
//                 case 'teddies':
//                   product = response[index].colors;
//                   break;
//                 case 'cameras' :
//                   product = response[index].lenses;
//                   break;
//                 case 'furniture' :
//                   product = response[index].varnish;
//                 break;
//               }
    
//               cardHolder.innerHTML +=
//               "<div class='py-2 text-justify '>"
//                   + "<div class='card h-100 shadow'>"
//                   + "<div class='card-body d-flex flex-wrap'>"
//                       + "<h2 id='name' class='col-12'>" + response[index].name + "</h2>"
    
//                       + "<div class='col-md-6 img-container'>"
//                         + "<img class='col-12 mx-auto my-4 d-block' src='" + response[index].imageUrl + "' alt='" + response[index].description + "'>"
//                       + "</div>"
    
//                       + "<div class='col-md-6 bg-light p-4 d-flex flex-column'>"
//                         + "<p>" + response[index].description + "</p>"
//                         + "<h3 id='price' class='font-weight-bold font-italic text-right mt-4'>" + response[index].price / 100 + " €</h3>"
                        
//                         + "<form class='mt-4'> "
//                           + "<div class='form-group d-flex flex-wrap justify-content-end'>"
//                             + "<label class='col-lg-12 text-lg-right'><u>Modèles :</u></label>"
//                             + "<select id='" + response[index]._id + "' class='form-control col-md-6 my-4'>"
//                             + "</select>"
//                           + "</div>"
//                           + "<div class='form-group col-12 text-center'>"
//                             + "<button id='storeData' type='submit' class='col-lg-6 btn btn-primary'>Ajouter au panier</button>"
//                           + "</div>"
//                           + "</form>";
    
//                       + "</div>"
//                 + "</div>"
//                 + "</div>"
//               + "</div>";
    
//               const productChoice = document.getElementById(response[index]._id);
              
//               for (i = 0; i < product.length; i++){
//                 productChoice.innerHTML += "<option>" + product[i] + "</option>";
//               }
    
//               const storeData = document.getElementById('storeData');
              
//               let object = {
//                 name: response[index].name,
//                 price: response[index].price,
//                 id: response[index]._id,
//                 imageUrl: response[index].imageUrl,
//                 choice: productChoice.value
//               };

//               let objectStringify = JSON.stringify(object);

//               storeData.addEventListener('click', function(event){      
//                 items.push(objectStringify);
    
//                 localStorage.setItem('items', items);
    
//                 console.log(localStorage);
//                 event.preventDefault();
//               })
//           }
//         }
//         request.open('GET', url);
//         request.send();
//         }
    
//     }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     if (window.location.pathname.includes("panier.html")){
//     // // // // // // // // // CODE POUR LE PANIER
    
//     window.addEventListener('load', () => {
//         let objectParser = JSON.parse(localStorage.getItem('items'));
//         // const newRow = document.createElement("div");
//         // newRow.innerHTML += localStorage.getItem('items');                   
//         // document.body.appendChild(newRow); 
//         console.log(objectParser);
//       });
    
    
//       // const cardHolder = document.getElementById('cardHolder');
    
//       // const nom = document.getElementById('nom');
//       // const prix = document.getElementById('prix');
//       // const modele = document.getElementById('modele');
      
//       // cardHolder.createElement('div') += localStorage.getItem('Nom');
//       // prix.innerHTML += localStorage.getItem('Prix');
//       // modele.innerHTML += localStorage.getItem('Modèle');
//       // localStorage.clear();
//     }