
async function GetMovies() {
    let movies = await fetch("https://api.tvmaze.com/shows");
    let data = await movies.json();
    return data

}

window.onload = async () => {
    let moviess = await GetMovies()
    let parent = document.getElementById("cinemaMainCardss")
    moviess.forEach(movie => {
        parent.innerHTML += `
        <div class="card" style="width: 18rem;">
<img src="${movie.image["medium"]}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Movie Name: ${movie["name"]}</h5>
  <p class="card-text">Premiered at: ${movie["premiered"]}</p>
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">${movie["type"]}</li>
  <li class="list-group-item">Language: ${movie["language"]}</li>
</ul>
<div class="card-body">
  <a href="${movie["officialSite"]}" class="card-link">Go to website</a>
  <a href="detail.html" class="card-link">Another link</a>
</div>
</div>
        
        `

    });
}

