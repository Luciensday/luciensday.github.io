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


const cardArray = [
    {
        name: 'fries',
        img:'images/fries.png',
    }, 
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',

    }, 
    {
        name: 'hotdog',
        img:'images/hotdog.png',


    }, 
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',


    }, 
    {
        name: 'milkshake',
        img:'images/milkshake.png',


    }, 
    {
        name: 'pizza',
        img:'images/pizza.png',


    }, 
    {
        name: 'fries',
        img:'images/fries.png',

    }, 
    {
        name: 'cheeseburger',
        img:'images/cheeseburger.png',

    }, 
    {
        name: 'hotdog',
        img:'images/hotdog.png',


    }, 
    {
        name: 'ice-cream',
        img:'images/ice-cream.png',


    }, 
    {
        name: 'milkshake',
        img:'images/milkshake.png',


    }, 
    {
        name: 'pizza',
        img:'images/pizza.png',


    }, 

]

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


class Snake {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.direction = "right";
      this.radius = blocksize / 2; 
      this.radians = 0.75
      this.openRate = 0.13;
      this.rotation = 0 
     
      this.scorePlayer1 = 0;
      this.scorePlayer2 = 0;
    }


draw(ctx) {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.rotation)
    ctx.translate(-this.x, -this.y)
    this.updateMouth();
   
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.radians, Math.PI * 2 - 0.75);
    ctx.lineTo(this.x, this.y);
    ctx.fill();
    ctx.closePath();
    ctx.restore()
  }



  move(direction, steps) {
    const moveAmount = steps * blocksize;

    switch (direction) {
      case "left":
        this.x -= moveAmount;
        while (this.x < 0) {
          this.x += cols * blocksize;
        }
        break;


          const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')
    canvas.width = 500; 
    canvas.height = 500



const all= document.getElementById('all'); 
all.addEventListener('click', function(){
    mandrake.setAnimation(0, 355); 
})


const grow= document.getElementById('grow'); 
grow.addEventListener('click', function(){
    mandrake.setAnimation(0, 75); 
})




const wink= document.getElementById('wink'); 
wink.addEventListener('click', function(){
    mandrake.setAnimation(76, 112); 
})



const float= document.getElementById('float'); 
float.addEventListener('click', function(){
    mandrake.setAnimation(113, 262); 
})



const hide= document.getElementById('hide'); 
hide.addEventListener('click', function(){
    mandrake.setAnimation(113, 262); 
})