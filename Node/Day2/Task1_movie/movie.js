import { startingScene, scene1, scene2, scene3, scene4, scene5, innerDream, endScene } from "./scene.js";


console.log(`Scene : ${startingScene}`);

setTimeout(() => {
  console.log(scene1);
}, 2000);

setTimeout(() => {
  console.log(scene2);
}, 4000);

setTimeout(() => {
  console.log(scene3);
}, 6000);

setTimeout(() => {
  console.log(scene4);
}, 8000);

setTimeout(() => {
  console.log(scene5);
}, 10000);

let count = 0;

const interval = setInterval(() => {
  console.log("Little Nedumaaran (inner dream):", innerDream);
  count++;

  if(count === 3){
    clearInterval(interval);
    console.log("Scene End:",endScene);
  }
}, 2000);
