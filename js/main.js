
const book = [
    {
        id: 1 ,
        name:"It",
        genre: "Horror" ,
        summary: "El libro en que aparece Pennywise, el mal de un pueblo llamado Derry",
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/It_%281986%29_front_cover%2C_first_edition.jpg/800px-It_%281986%29_front_cover%2C_first_edition.jpg",
    },
    {
        id: 2 ,
        name:"El Instituto",
        genre: "Horror" ,
        summary: "El libro en donde aparecen niños con poderes, que son llevados a un lugar para ser utilizados como armas",
        image:"https://images.cdn2.buscalibre.com/fit-in/360x360/12/9d/129d69fb5eff7ebfb6cfb27f0f2dc296.jpg",
    },
    {
        id: 3 ,
        name:"El Visitante",
        genre: "Horror" ,
        summary: "El libro en donde aparece un nte malvado que toma imagen de una persona y se alimenta de humanos",
        image:"https://images.cdn2.buscalibre.com/fit-in/360x360/cf/5f/cf5f9d33ac9e1c491e064c253a864668.jpg",
    },
    {
        id: 4 ,
        name:"La Sangre Manda",
        genre: "Horror" ,
        summary: "Es una recompilación de cuentos cortos, además de un caso con Holly Gibney",
        image:"https://images.cdn1.buscalibre.com/fit-in/360x360/6d/46/6d46316230f34f019a65b256c658b531.jpg",
    },
    {
        id: 5 ,
        name:"El Resplandor",
        genre: "Horror" ,
        summary: "Cuenta la historia de una familia va a un hotel a cuidarlo durante el invierno, pero el padre de familia se vuelve loco",
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTVK-iB9tvSSskbjvwMew8szaP6p8bCVwSsQdonM2EcrzuSSum3A_2VfG-p6oKKKwRnxtd-DeAeoqsL0MygDUB60oLjKPl9e3uMF9D0wxSzgp74ZI2dP8B2YrY8KkRjBcsIZ579m6TUUE/s1600/El-resplandor.jpg",
    }
]

let favorites = [] 

 function addToFav(book){
 
    if (favorites.some(el => el.id === book.id)){
        alert ("Tu elección ya fue agregada a Favoritos");
    } else {
        favorites.push (book)
    }
} ;

localStorage.setItem(("favorites"),JSON.stringify(favorites));
//boton
