const playerTurnSpan = document.getElementById("playersturn");
consg webpagelocal - docoument.getElementByID("title")


Class Button{
    color: ReadableByteStreamController; 
    ResizeObserverSize; 25; 
    gap: 4px 
    innerHeight: 2px 
    border: 12px solid black
    

   cardArray.sort(() => 0.5 - Math.random())
}


cardsChosen = []
var cardchosen = 30 
if ( car ="") { 
    car >= 10
}

function click
else if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match!")
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)

} else {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert("sorry try again!")
}



function flipCard() {  
  
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
   console.log (cardsChosen)
   console.log(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}
