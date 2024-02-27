
const id = new URLSearchParams(window.location.search).get("detailid")

fetch(`https://api.tvmaze.com/shows/${id}`)
.then(res=>res.json())
.then(data => {
    console.log(data);
    let parent = document.getElementById("detailCard")
        
            parent.innerHTML+=` <div  class="card mb-3" style="max-width: 800px;">
            <div id="imageText" class="row g-0">
              <div id="image" class="col-md-4">
                <img src="${data.image.original}" class="img-fluid rounded-start" alt="...">
              </div>
              <div id="text" class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text">${data.name}</p>
                  <a href="#" class="card-link">${data.name}</a>
                </div>
              </div>
            </div>
          </div> ` 

})
