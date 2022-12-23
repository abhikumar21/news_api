

getnews();
function getnews() {
  
 var keyword=$("#keyword").val();

  if(keyword=='') {
    keyword="technology";
  }
  
  var url="https://newsapi.org/v2/top-headlines?q="+keyword+"&apiKey=744041ee35ee4702b63075a6d2dfb125"

  $("loading").show();
  
  $.get(url, (response) => {
    $("#loading").detach();
       
       console.log(response.articles);
    
       for(i=0;i<response.articles.length;i++) {
        var html= `<div class="card m-3 shadow">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${response.articles[i].title}</h5>
              <p class="card-text">${response.articles[i].description}</p>
              <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt}</small></p>
          <a href="${response.articles[i].url}" target="_blank" class="btn btn-secondary">Read More</a>
          <p></p>
            </div>
          </div>
        </div>
      </div>`
    
      $(".posts").append(html);
       }
    })
}


// var url=  "https://newsapi.org/v2/top-headlines?country=us&apiKey=744041ee35ee4702b63075a6d2dfb125";
// $.get(url, (response) => {
// $("#loading").detach();
   
//    console.log(response.articles);

//    for(i=0;i<response.articles.length;i++) {
//     var html= `<div class="card m-3 shadow">
//     <div class="row g-0">
//       <div class="col-md-4">
//         <img src="${response.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
//       </div>
//       <div class="col-md-8">
//         <div class="card-body">
//           <h5 class="card-title">${response.articles[i].title}</h5>
//           <p class="card-text">${response.articles[i].description}</p>
//           <p class="card-text"><small class="text-muted">${response.articles[i].publishedAt}</small></p>
//       <a href="${response.articles[i].url}" target="_blank" class="btn btn-secondary">Read More</a>
//       <p></p>
//         </div>
//       </div>
//     </div>
//   </div>`

//   $(".posts").append(html);
//    }
// })


