const playerTurnSpan = document.getElementById("playersturn");
consg webpagelocal - docoument.getElementByID("title")


Class Button{
    color: ReadableByteStreamController; 
    ResizeObserverSize; 25; 
    gap: 4px 
    innerHeight: 2px 
    border: 1px solid red
    

   cardArray.sort(() => 0.5 - Math.random())
}


const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon= []

function createBoard(){
    for (let i = 0; i < cardArray.length; i++ ) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i )
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }


function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]