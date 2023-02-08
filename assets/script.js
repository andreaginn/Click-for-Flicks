const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("icon");

generateBtn.addEventListener("click", function() {
var IMDBKey = 'k_vvb7ncfd'; 
var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/'+IMDBKey;

    fetch(IMDBURL)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i< data.items.length; i++) {   
        movieNameEl.textContent = data;
        console.log(data.items[i].title);
        }
      });

    //randomization of movies??
    
    
  });
  
  