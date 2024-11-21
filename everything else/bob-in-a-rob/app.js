console.log("working!")
const bob = document.getElementById("bobinarob");
console.log(bob.innerHTML);

let hidebob = false;

function bobisdead() {
  if (hidebob) {
    bob.innerHTML = `<h1>Yes we can!</h1>
        <img src="images/bob.png" alt="bobbers">`;
  } else {
    bob.innerHTML = `<h1>Can we fix it?</h1>
        <img src="images/cando.png" alt="thecrew">`;
  }
  hidebob = !hidebob;
}