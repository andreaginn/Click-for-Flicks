const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("link");
const newMovie = document.getElementById("show-another");
const posterEl = document.getElementById("poster");
const searchEl = document.getElementById("generate-btn1");
const searchMovieEl = document.querySelector("#searchMovie");
const plotEl = document.getElementById("plot");

searchEl.addEventListener("click", function () {

  var movieName = searchMovie.value.trim();
  saveLocation(movieName); 

  function saveLocation(movieName) {
    if (movieName !== "") {
      let movieNames = JSON.parse(localStorage.getItem("movie names")) || [];
      movieNames.push(movieName);
      localStorage.setItem("movie names", JSON.stringify(movieNames));
    }
  };

  console.log(movieName); 

  
  var WatchModeKey = 'TnmOvDOaSi1WzkXdlWa71NhDrV1qdO25XAGtzOdp';
  var WatchModeURL = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=' + WatchModeKey + '&search_value=' + movieName + '&search_type=1'

  fetch(WatchModeURL)
      .then(response => response.json())
      .then(data => {
        console.log(data);

        console.log(data.results[0].id);
        var ID = data.results[0].id;
      

        WatchModeURL = 'https://api.watchmode.com/v1/title/' + ID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

        fetch(WatchModeURL)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        for (let i = 0; i< 5; i++) {
          watchLinkEl.href = data.sources[i].web_url;
          watchLinkEl.textContent = data.title;
          plotEl.textContent = data.plot_overview;
          posterEl.src = data.poster;

          }

        });

      });


});




generateBtn.addEventListener("click", function() {

var IMDBKey = 'k_m4fn1cby'; 
//spare IMDBKEYS
//var IMDBKey = 'k_6i8t9r8e';
var IMDBURL = 'https://imdb-api.com/en/API/Top250Movies/'+IMDBKey;
var WatchModeKey = 'TnmOvDOaSi1WzkXdlWa71NhDrV1qdO25XAGtzOdp';
var IMDBID = '' ;
var WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

//var WatchModeURL = 'https://api.watchmode.com/v1/networks/?apiKey=' + WatchModeKey;


//newMovie.style.display = "block";

    fetch(IMDBURL)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        var movieNames = data.items
        var randomMovie = movieNames[(Math.floor(Math.random() * data.items.length))];
        console.log(randomMovie.title);
        console.log(randomMovie.id);
        IMDBID = randomMovie.id;
        WatchModeURL = 'https://api.watchmode.com/v1/title/' + IMDBID + '/details/?apiKey=' + WatchModeKey + '&append_to_response=sources';

      //secondAPI
      //console.log(WatchModeURL)
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