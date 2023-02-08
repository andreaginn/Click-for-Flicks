const generateBtn = document.getElementById("generate-btn");
const movieNameEl = document.getElementById("movie-name");
const watchLinkEl = document.getElementById("icon");

generateBtn.addEventListener("click", function() {

    fetch(“IMDB “API LINK”)
      .then(response => response.json())
      .then(data => {
        // Update the movie name and watch link on the page
        movieNameEl.textContent = data.movieName;
        watchLinkEl.innerHTML = `<a href="${data.watchLink}">Watch on ${data.streamingService}</a>`;
      });
  });
  