const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("link");
const newMovie = document.getElementById("show-another");


generateBtn.addEventListener("click", function() {

var IMDBKey = 'k_vvb7ncfd'; 
var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/'+IMDBKey;
var WatchModeKey = 'tRrVcKsz5MC88YyphjWCppQ9y6boLgUcE0STBETT';
//var WatchModeURL = 'https://api.watchmode.com/v1/networks/?apiKey=' + WatchModeKey;
var IMDBID = 'tt0111161' ;
var WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

newMovie.style.display = "block";

    fetch(IMDBURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i< data.items.length; i++) {  
        console.log(data) 
        movieNameEl.textContent = data.items[i].title;
        IMDBID = data.items[i].id;
      }
    });
      

    fetch(WatchModeURL)
      .then(response => response.json())
      .then(data => {
      for (let i = 0; i< 5; i++) {
      console.log(data.sources[i].web_url);
      watchLinkEl.textContent = data.sources[i].web_url;
      }
    });
    
    //randomization of movies??
    
    
  });



