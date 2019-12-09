var gameState = {
  pokemon: '',
  rivalPokemon: ''
}

console.log(gameState)

var pokemonsEL = document.querySelector('.select-screen')
  .querySelectorAll('.character')
console.log(pokemonsEL)


// Takeaway: remember that querySelector means you are querying an array.  Query ~ Array
// verify that your variable really are/is plural or singular 
// utilize the dataset ~ data-pokemon   (this is very useful)
var i = 0;
while (i < pokemonsEL.length) {
  pokemonsEL[i].onclick = function () {
    var pokemonName = this.dataset.pokemon
    // console.log('I pressed this pokemon ' + pokemonName)
    gameState.userPokemon = pokemonName
    cpuPick()
    console.log(gameState)
  }
  i++
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function cpuPick() {
  gameState.rivalPokemon = pokemonsEL[randomNumber(0, 3)]
    .dataset.pokemon
}



// *********** CAN YOU DELETE THIS CODE? ********************
// webpackJsonp([0],{

// /***/ 99:
// /***/ (function(module, exports, __webpack_require__) {

// "use strict";


// console.log('Welcome To The Rocky Stack');

// /***/ })

// },[99]);

// pokemon
// create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
// *********************************************************************************************************************************


// 88888888888888888888888888888888   POSSIBLE CHOOSING POKEMONS?????  88888888888888888888888888888888888888888888888888
var pokemons = [{
    name: 'charmander',
    type: 'fire',
    attack: 52,
    stamina: 39,
    level: 1
  },
  {
    name: 'charmander',
    type: 'fire',
    attack: 52,
    stamina: 39,
    level: 1
  },

]

var attack = 20;
var level = 10;
var stack = 1.3;
var stamina = 39;

// create a formula for attacks
console.log((attack * level) * stack / 7)


// create a formula for health
//HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)

// let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// p1 vs p2

// when one user loses all his health declare a winner

// 8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888