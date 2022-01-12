/**
 * How arrow functions help us with scoping.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#this_and_Arrow_Functions
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
 */

// Define a default volume for the window (the entire DOM):
window.volume = 20;

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
  newVolume: function (volume) {
    console.log("this.volume in the method:", this.volume);
    this.volume = volume;
    console.log("this.volume after update:", this.volume);
    (function () {
      console.log("this.volume in nested function:", this.volume);
    })();
    (() => {
      console.log("this.volume in arrow function:", this.volume);
    })();
  },
};

console.log(greenPack.newVolume(5));

function anshul() {
  console.log("Fucks people, lol lmao");
  document.querySelector("article").append("lol");
}

anshul();

const khatri = () => {
  console.log(
    "Funtion type is const , scope is fiexed and i cannot be chaneged"
  );
};

khatri();

const anus = (anus) => {
  console.log("Arrow funtions is asshose which wass fuciking me upopi ", anus);
};

anus();

(function () {
  console.log("hella yeah, m iife");
})();
