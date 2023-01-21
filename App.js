document.querySelector("#search"),addEventListener("click" ,getPokemon);

function lowerCaseName(string) {
    return string.toLowerCase();
}

function getPokemon(e){
    const name = document.querySelector("#pokemonName").value;
    const pokemonName = lowerCaseName(name);

fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
.then((response) => response.json())
.then((data) => {
    document.querySelector(".pokemonBox").innerHTML=`
    <div class="imgjpg">
    <img class="sugar"
       src="${data.sprites.other.dream_world.front_default}" 
       alt="${data.name}"

</div>
<div class="pokemonInfo">
    <h1 class="Heading">${data.name}</h1>
    <p class="Weight">Weight : ${data.weight}</p>
    <p class="Height">Height : ${data.height}</p>
    <p class="Type">Type : ${data.types[0].type.name}</p>
    <p class="Ability">Ability : ${data.abilities[0].ability.name}
</div>
`;
}).catch((err) => {
    console.log('Pokemon not found' ,err);
});
  
e.preventDefault();
}
getPokemon();