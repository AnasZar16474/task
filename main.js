async function getdata() {
  const request = await fetch("https://dummyjson.com/products");
  const response = await request.json();
  console.log(response);
  const newarray = response.products.map(function (ele) {
      return `
      <div class="cards">
     <h2 class="heading"> ${ele.title} </h2>
   <img class="thumbnail" src= ${ele.thumbnail} /> 
   </div>`;
    })
    .join("");
  document.querySelector(".data").innerHTML = newarray;
}
getdata();
