/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";
import Book from "./book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const MathBook = new Book(
  "Class 10 Maths",
  200,
  1,
  "April 5, 2018 15:00:00 EST",
  true,
  "finished"
);

const EngBook = new Book(
  "Class 10 English",
  200,
  1,
  "April 15, 2018 15:00:00 EST",
  true,
  "finished"
);

console.log("The MathsBook object:", MathBook);
console.log("Days since aquired:", MathBook.Age());

console.log("The EngBook object:", EngBook);
console.log("Days since aquired:", EngBook.Age());
