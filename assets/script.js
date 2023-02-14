const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("link");
const newMovie = document.getElementById("show-another");
const posterEl = document.getElementById("poster");




generateBtn.addEventListener("click", function() {

//var IMDBKey = 'k_vvb7ncfd'; 
var IMDBKey = 'k_6i8t9r8e';
var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/'+IMDBKey;
var WatchModeKey = 'tRrVcKsz5MC88YyphjWCppQ9y6boLgUcE0STBETT';
var IMDBID = '' ;
var WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

//var WatchModeURL = 'https://api.watchmode.com/v1/networks/?apiKey=' + WatchModeKey;


newMovie.style.display = "block";

    fetch(IMDBURL)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        var movieNames = data.items
        var randomMovie = movieNames[(Math.floor(Math.random() * data.items.length))];
        console.log(randomMovie.title);
        console.log(randomMovie.id);
        movieNameEl.textContent = randomMovie.title;
        IMDBID = randomMovie.id;
        WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

      //secondAPI
      console.log(WatchModeURL)
      fetch(WatchModeURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        for (let i = 0; i< 5; i++) {
          watchLinkEl.href = data.sources[i].web_url;
          watchLinkEl.textContent = data.title;
          posterEl.src = data.poster;
          }

      });
    });
    
  });

function change();
{
    document.getElementById("generate-btn").value="Close Curtain";
}