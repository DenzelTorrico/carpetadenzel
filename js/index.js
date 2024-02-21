var perros = []
var images = []
fetch("https://dog.ceo/api/breeds/list/all").then(response=>response.json())
.then(data=>{
   perros = Object.keys(data.message)
   let dogs = document.getElementById("dogs")
    fetch("https://dog.ceo/api/breed/hound/images").then(responseimages=>responseimages.json())
    .then(dataimages=>{
        var images = dataimages.message
        for (let i=0; i<10; i++){
            let tr = document.createElement("tr")
            let td = document.createElement("td")
            let tdimg = document.createElement("td")
            let img = document.createElement("img")
            img.className = "img-fluid rounded"
            img.src = images[i]
            img.style.height = "200px"
            tdimg.appendChild(img)
            tr.appendChild(td)
            tr.appendChild(tdimg)
            td.textContent = perros[i]
            dogs.appendChild(tr)
        }
    }).catch(error=>{
        console.log(error)
    });
   

})

