const btnTry = document.querySelector("#btn-try")
const btnAgain = document.querySelector("#btn-again")

const screen1 = document.querySelector(".box1")
const screen2 = document.querySelector(".box2")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Funções

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber) {
        toogleScreen()
    }

    if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ) {
        alert('Deve ser um número entre 0 e 10!');
    }

        screen2.querySelector("h2").innerText =
        (`Acertou em ${xAttempts} tentativas`)

    inputNumber.value = ""
    xAttempts++
}

function handleResetClick() {
    toogleScreen()
    
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}

function toogleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)


document.addEventListener('keydown', function(e){
    if(e.key == 'Enter' && screen1.classList.contains("hide")){
        handleResetClick()
    }
})



