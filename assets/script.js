const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("icon");
const newMovie = document.getElementById("show-another");


generateBtn.addEventListener("click", function () {
  var IMDBKey = 'k_vvb7ncfd';
  var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/' + IMDBKey;
  var WatchModeKey = 'tRrVcKsz5MC88YyphjWCppQ9y6boLgUcE0STBETT';
  var WatchModeURL = 'https://api.watchmode.com/v1/title/345534/sources/?apiKey=' + WatchModeKey;

  newMovie.style.display = "block";

  fetch(IMDBURL)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.items.length; i++) {
        movieNameEl.textContent = data;
        console.log(data.items[i].length)
      }
    });

  fetch(WatchModeURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });

  //randomization of movies??


});

generateBtn.addEventListener("click", function() {
var IMDBKey = 'k_vvb7ncfd'; 
var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/'+IMDBKey;
var WatchModeKey = 'tRrVcKsz5MC88YyphjWCppQ9y6boLgUcE0STBETT';
//var WatchModeURL = 'https://api.watchmode.com/v1/networks/?apiKey=' + WatchModeKey;
var IMDBID = '';
var WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

    fetch(IMDBURL)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i< data.items.length; i++) {  
        //console.log(data) 
        movieNameEl.textContent = data.items[i].title;
        }
      });
      
      
    fetch(WatchModeURL)
      .then(response => response.json())
      .then(data => {
      //for (let i = 0; i< data.length; i++) {
      console.log(data);
      //}
    });
    
    //randomization of movies??
    
    
  });



