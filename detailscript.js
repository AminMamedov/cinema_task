
const id = new URLSearchParams(window.location.search).get("detailid")

fetch(`https://api.tvmaze.com/shows/${id}`)
.then(res=>res.json())
.then(data => {
    console.log(data);
    let parent = document.getElementById("detailCard")
        
            parent.innerHTML+=` <div id="detaillll" class="card mb-3" style="max-width: 1500px;">
            <div id="imageText" class="row g-0">
              <div id="image" class="col-md-4">
                <img src="${data.image.original}" class="img-fluid rounded-start" alt="...">
              </div>
              <div id="text" class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.summary}</p>
                  <ul>
                    <li>IMBD rating: ${data.rating.average}</li>
                    <li>Language: ${data.language}</li>
                    <li>Genre: ${data.genres} </li>
                    <li>Premiered: ${data.premiered}</li>
                    <li>Ended: ${data.ended}</li>
                  </ul>
                  <button><a href="${data.officialSite}">Go to website</a></button>
                  <button><a href="cinema.html">Go back</a></button>


                </div>
              </div>
            </div>
          </div> ` 

})
