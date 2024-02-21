var perros = []
fetch("https://dog.ceo/api/breeds/list/all").then(response=>response.json())
.then(data=>{
   perros = Object.keys(data.message)
   let dogs = document.getElementById("dogs")

   perros.forEach(element => {
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    tr.appendChild(td)
    td.textContent = element
    dogs.appendChild(tr)
   });

})

