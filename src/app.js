/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["My child", "My wife", "My turtle", "My dog"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before going out",
  "yesterday",
  "during my breakfast",
  "while I was sleeping"
];

function excusegenerator1(who) {
  let randomWord = [Math.floor(Math.random() * who.length)];
  console.log(who[randomWord]);
}
function excusegenerator2(action) {
  let randomWord = [Math.floor(Math.random() * action.length)];
  console.log(action[randomWord]);
}
function excusegenerator3(what) {
  let randomWord = [Math.floor(Math.random() * what.length)];
  console.log(what[randomWord]);
}
function excusegenerator4(when) {
  let randomWord = [Math.floor(Math.random() * when.length)];
  console.log(when[randomWord]);
}
excusegenerator1(who) +
  excusegenerator2(action) +
  excusegenerator3(what) +
  excusegenerator4(when);
