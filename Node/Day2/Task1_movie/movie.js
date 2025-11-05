console.log("Scene Start: A village field. Little Nedumaaran is running and playing.");

setTimeout(() => {
  console.log("He suddenly hears a loud engine sound from the sky.");
}, 2000);

setTimeout(() => {
  console.log("He looks up and sees an airplane flying high above.");
}, 4000);

setTimeout(() => {
  console.log("The plane glides across the sky. Villagers stop and watch.");
}, 6000);

setTimeout(() => {
  console.log("Little Maara's eyes shine with excitement and wonder.");
}, 8000);

setTimeout(() => {
  console.log("He stretches his hands in the air as if he wants to touch the plane.");
}, 10000);

let count = 0;

const interval = setInterval(() => {
  console.log("Little Nedumaaran (inner dream): 'One day, I will fly in that sky.'");
  count++;

  if(count === 3){
    clearInterval(interval);
    console.log("Scene End: The dream to fly is born.");
  }
}, 2000);
