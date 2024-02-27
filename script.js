
fetch("https://api.tvmaze.com/shows")
  .then(res => res.json())
  .then(data => {
    let isSearch = false;

    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener('click', function (e) {
      e.preventDefault();
      let text = document.getElementById("searchimput").value.toLowerCase().trim();
      console.log("ovveride", text);
      let overData = data.filter(movie => movie.name.toLowerCase().includes(text));
      isSearch = true;
      showMovies(overData);
    });

    function showMovies(data) {
      
      let parent = document.getElementById("cinemaMainCardss")
      parent.innerHTML = "";
      data.forEach(movie => {
        parent.innerHTML += `
      <div class="card" style="width: 18rem;" >
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
          <button  style="background-color: rgb(69, 69, 223);border-radius: 10px;"" ><a href="${movie["officialSite"]}" class="card-link" style="color: white;text-decoration: none;">Go to website</a></button>
          <button style="background-color: rgb(47, 143, 47);border-radius: 10px;""><a href="detail.html?detailid=${movie["id"]}" class="card-link" style="color: white;text-decoration: none;" >Go to details</a></button>
          </div>
      </div>`
      });
    };

    if (isSearch===false) {
      showMovies(data);
    }
  })
  


  const nav = document.getElementById('nav')
  const content = document.getElementById('content')
  let pageIndex =0;
  let itemsPerPage =20;

  


