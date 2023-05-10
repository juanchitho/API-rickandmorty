
//objeto literal
const datos={
    nombre:'Juan',
    apellido:'Perez',
    edad:25,
}

const URLbase='https://rickandmortyapi.com/api/'
const endPointPersonajes='character'

const contenedor=document.getElementById('contenedor')
const anterior=document.getElementById('anterior')
const siguiente=document.getElementById('siguiente')


//json
//metodo para traer de json a un obejeto literal de js

//console.log('hola')//asincronismo

let pagina=1

const getPersonaje = () => { 

    fetch(`${URLbase}${endPointPersonajes}`)
    .then((response)=>response.json())
    .then((data)=>mostrarPesonaje(data.results))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("finalizo la conexion a la api"))
}
getPersonaje()

const mostrarPesonaje = (personajes) => { 
    for(let personaje of personajes){
        console.log(personaje.name)
        contenedor.innerHTML+=`
        <div class="card m-3" style="width: 18rem;">
        <div class="card" style="width: 18rem;">
        <img src="${personaje.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">${personaje.status}</p>
          <p class="card-text">${personaje.gender}</p>
          
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        </div>
      </div>`
    }

}

const siguientePagina = () => {
    pagina++
    fetch(`${URLbase}${endPointPersonajes}/?page=${pagina}`)
    .then((response)=>response.json())
    .then((data)=>mostrarPesonaje(data.results))
    .catch((error)=>console.log(error))
    .finally(()=>console.log("finalizo la conexion a la api"))
}

siguiente.addEventListener('click',siguientePagina)
//console.log('chau')

//get ==>  traer o obtener datos

//post ==> enviar datos y guatdarlos
//put ==> actualizar datos/modificar
//delete ==> eliminar datos