
// fetch("https://api.tvmaze.com/shows")
//   .then(res => res.json())
//   .then(data => {
//     let isSearch = false;

//     let searchBtn = document.getElementById("searchBtn");
//     searchBtn.addEventListener('click', function (e) {
//       e.preventDefault();
//       let text = document.getElementById("searchimput").value.toLowerCase().trim();
//       if(text.length<3) {
//         alert("Please enter more character.");
//         return;
//       }
//       let overData = data.filter(movie => movie.name.toLowerCase().includes(text));
//       if(overData.length === 0) {
//         alert("Movie is not found.");
//         return;
        
//       }
//       isSearch = true;
//       showMovies(overData);
//     });

//     function showMovies(data) {
      
//       let parent = document.getElementById("cinemaMainCardss")
//       parent.innerHTML = "";
//       data.forEach(movie => {
//         parent.innerHTML += `
//       <div class="card" style="width: 18rem;" >
//           <img src="${movie.image["medium"]}" class="card-img-top" alt="...">
//           <div class="card-body">
//           <h5 class="card-title">Movie Name: ${movie["name"]}</h5>
//           <p class="card-text">Premiered at: ${movie["premiered"]}</p>
//           </div>
//           <ul class="list-group list-group-flush">
//           <li class="list-group-item">${movie["type"]}</li>
//           <li class="list-group-item">Language: ${movie["language"]}</li>
//           </ul>
//           <div class="card-body">
//           <button  style="background-color: rgb(69, 69, 223);border-radius: 10px;"" ><a href="${movie["officialSite"]}" class="card-link" style="color: white;text-decoration: none;">Go to website</a></button>
//           <button style="background-color: rgb(47, 143, 47);border-radius: 10px;""><a href="detail.html?detailid=${movie["id"]}" class="card-link" style="color: white;text-decoration: none;" >Go to details</a></button>
//           </div>
//       </div>`
//       });
      
//     };

//     if (isSearch===false) {
//       showMovies(data);
//     }
//   })
  


  // const nav = document.getElementById('nav')
  // const content = document.getElementById('content')
  // let pageIndex =0;
  // let itemsPerPage =20;

  // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


  var apiUrl = "https://api.tvmaze.com/shows";
  let movieData= [];
  let isSearch = false;

  let itemsPerPage = 20
  let currentPage = 1;

  async function dataTable(){
    await MovieTable();
    console.log(movieData)

    const pages =[];
    for(let i = 0; i< Math.ceil(movieData.lenght /itemsPerPage); i++){
      pages.push(i)
    }

    const indexOfLastPage = currentPage * itemsPerPage;
    const indexOfFirstPage = indexOfLastPage - itemsPerPage;
    const currentItems =movieData.slice(indexOfFirstPage,indexOfLastPage);
    let searchBtn = document.getElementById("searchBtn");
     searchBtn.addEventListener('click', function (e) {
       e.preventDefault();
       let text = document.getElementById("searchimput").value.toLowerCase().trim();
       if(text.length<3) {
         alert("Please enter more character.");
         return;
       }
       let overData = currentItems.filter(movie => movie.name.toLowerCase().includes(text));
       if(overData.length === 0) {
         alert("Movie is not found.");
         return;
        
       }
       isSearch = true;
       showMovies(overData);
     });

    function showMovies(currentItems){document.getElementById("cinemaMainCardss").innerHTML = currentItems.map(movie=>
      `
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
       </div>
      `
      
      ).join("")}
      if (isSearch===false) {
               showMovies(currentItems);
       }
      
  }
  dataTable();

  const prevBtn = () =>{
    if((currentPage - 1)*itemsPerPage){
      currentPage--;
      dataTable();
    }
  }

  const nextBtn = () =>{
    if((currentPage*itemsPerPage)/movieData.length){
      currentPage++;
      dataTable();
    }
  }

  document.getElementById("prevBtn").addEventListener("click",prevBtn)
  document.getElementById("nextBtn").addEventListener("click",nextBtn)


  async function MovieTable(){
    const data = await fetch(apiUrl)
    const res = await data.json();
    movieData =res;
    console.log(movieData)
  }
  

  


