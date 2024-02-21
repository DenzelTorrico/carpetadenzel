var perros = [];
var images = [];

fetch("https://dog.ceo/api/breeds/list/all")
  .then(response => response.json())
  .then(data => {
    perros = Object.keys(data.message).slice(0, 15);
    let dogs = document.getElementById("dogs");

    perros.forEach(perro => {
      fetch(`https://dog.ceo/api/breed/${perro}/images/random`)
        .then(response => response.json())
        .then(data => {
          let tr = document.createElement("tr");
          let td = document.createElement("td");
          let tdimg = document.createElement("td");
          let img = document.createElement("img");

          img.className = "img-fluid rounded";
          img.src = data.message;
          img.style.height = "200px";

          td.textContent = perro;
          tdimg.appendChild(img);
          tr.appendChild(td);
          tr.appendChild(tdimg);
          dogs.appendChild(tr);
        })
        .catch(error => {
          console.error('Error al cargar las imágenes:', error);
        });
    });
  })
  .catch(error => {
    console.error('Error al cargar la lista de perros:', error);
  });
