//https://api.adviceslip.com/advice

const button = document.getElementById("generator-button");
const adviceContainer = document.getElementById("adive");
const adiveNum = document.getElementById("advice-id")

function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then((response) => response.json()).then((data) => {
        adviceContainer.innerHTML = `"${data.slip.advice}"`
        adiveNum.innerHTML=`#${data.slip.id}`
    }).catch((err) => console.log(`failed to fetch ${err}`))
}

getAdvice()

button.addEventListener("click",getAdvice)