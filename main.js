let elInput = document.querySelector(".input");
let eltaxt = document.querySelector("#name");
let elbtn = document.querySelector(".btn");

elbtn.addEventListener("click", function () {
    let value = elInput.value;
    let rondom = Math.floor(Math.random() * value) + 1;
   
    eltaxt.textContent=rondom;
   
})
