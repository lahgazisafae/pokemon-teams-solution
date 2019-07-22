const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', setUpPage)

function setUpPage(){

    fetchTrainers()

}

function fetchTrainers(){
    fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(addAllTrainers)
}

let addAllTrainers = (trainers)=> {
    trainers.forEach(addTrainerCard)

    //query select all buttons
    //add event listener to buttons

}


function addTrainerCard(trainer){
    let pokemons = trainer.pokemons.map(pokemon=>{
        let li = `<li>${pokemon.nickname} (${pokemon.species}) <button class="release" data-pokemon-id=${pokemon.id}>Release</button></li>`
        return li 
    })

    let trainerHTML = `<div class="card" data-id=${trainer.id}><p>${trainer.name}</p>
    <button data-trainer-id=${trainer.id}>Add Pokemon</button>
    <ul>`
      + pokemons.join(" ") + 
  `</ul>
  </div>`

    
}


