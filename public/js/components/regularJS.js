var pokemonsEL = document.querySelector('.select-screen')
  .querySelectorAll('.character')
console.log(pokemonsEL)

i = 0;
while (i < pokemonsEL.length) {
  pokemonsEL[i]

  i++
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