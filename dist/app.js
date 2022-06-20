"use strict";
const compteurPlus = document.querySelector('#incrementer');
const compteurMoins = document.querySelector('#decrementer');
const span = document.querySelector("#compteur");
const resetId = document.querySelector("#reset");
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    if (span) {
        span.innerHTML = i.toString();
    }
};
function decrement(e) {
    (i > 0) ? i-- : 0;
    if (span) {
        span.innerHTML = i.toString();
    }
}
const reset = (e) => {
    e.preventDefault();
    i = 0;
    if (span) {
        span.innerHTML = i.toString();
    }
};
compteurPlus === null || compteurPlus === void 0 ? void 0 : compteurPlus.addEventListener('click', increment);
compteurMoins === null || compteurMoins === void 0 ? void 0 : compteurMoins.addEventListener('click', decrement);
resetId === null || resetId === void 0 ? void 0 : resetId.addEventListener("click", reset);
