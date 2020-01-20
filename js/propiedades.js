fetch(`../js/propiedades.json`)
  .then(res => res.json())
  .then(function(data){
    let propiedades;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    propiedades = data;
    const propiedad = propiedades.find(prop => prop.id == id);
    const owlCarousel = document.querySelector('#owl-carousel');

    // Get nodos por id
    titulo = document.querySelector('#titulo');
    direccion = document.querySelector('#direccion');
    valor = document.querySelector('#valor');
    descripcion = document.querySelector('#descripcion');

    // Setear Texto
    titulo.innerText = `${propiedad.tipo} en ${propiedad.barrio}`;
    direccion.innerText = propiedad.direccion;

    // Agregar info logos
    propiedad.carousel.forEach(imagen => {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', 'single_property');
      img.setAttribute('src', imagen)
      div.appendChild(img);
      owlCarousel.appendChild(div);
    });


    valor.innerText = `u$d ${propiedad.valor}`;
    descripcion.innerText = propiedad.descripcion;
  })
  .catch(err => console.log(err));




