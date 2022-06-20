const compteurPlus = document.querySelector('#incrementer');
const compteurMoins = document.querySelector('#decrementer');

const span = document.querySelector("#compteur");
const resetId = document.querySelector("#reset");
let i = 0


const increment = (e : Event) =>{
e.preventDefault();
i++;
if(span){
    span.innerHTML = i.toString() ; 
}
}

function decrement(e : Event) {
    (i > 0) ? i-- : 0;
    if(span){
        span.innerHTML = i.toString() ; 
    }
}

const reset = (e : Event)=>{
    e.preventDefault()
    i = 0
    if(span){
        span.innerHTML = i.toString() ; 
    }
}

compteurPlus?.addEventListener('click', increment);
compteurMoins?.addEventListener('click', decrement);
resetId?.addEventListener("click", reset);


