

fetch(`../js/propiedades.json`)
  .then(res => res.json())
  .then(function(data){
    let propiedades;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    propiedades = data;
    const propiedad = propiedades.find(prop => prop.id == id);

    // Get nodos por id
    titulo = document.querySelector('#titulo');
    direccion = document.querySelector('#direccion')

    // Setear Texto
    titulo.innerText = `${propiedad.tipo} en ${propiedad.barrio}`;
    direccion.innerText = propiedad.direccion;

  })
  .catch(err => console.log(err));




