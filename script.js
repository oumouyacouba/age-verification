
const ageInput = document.querySelector("#age");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");

btn.onclick = function(){

    const age = Number(ageInput.value);

    if (age >= 18){
        result.textContent = "adult";
    } else {
        result.textContent = "mineur";
    }

};