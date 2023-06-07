/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuses").innerHTML =
    excuseGenerator1(who) +
    excuseGenerator2(action) +
    excuseGenerator3(what) +
    excuseGenerator4(when);
};

let who = ["My child", "My wife", "My turtle", "My dog"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before going out",
  "yesterday",
  "during my breakfast",
  "while I was sleeping"
];

function excuseGenerator1(who) {
  let randomWho = [Math.floor(Math.random() * who.length)];
  console.log(who[randomWho]);
}
function excuseGenerator2(action) {
  let randomAction = [Math.floor(Math.random() * action.length)];
  console.log(action[randomAction]);
}
function excuseGenerator3(what) {
  let randomWhat = [Math.floor(Math.random() * what.length)];
  console.log(what[randomWhat]);
}
function excuseGenerator4(when) {
  let randomWhen = [Math.floor(Math.random() * when.length)];
  console.log(when[randomWhen]);
}

//console.log(
// excuseGenerator1(who),
//  excuseGenerator2(action),
//  excuseGenerator3(what),
//  excuseGenerator4(when));
