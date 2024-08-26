const gamebox = document.querySelector('.gamebox')
const btn = document.querySelector('.btn-hide')

btn.addEventListener( 'click', function handleButtonClick(){ 

    if(gamebox.classList.contains('gamebox-collapse')){
        gamebox.classList.remove('gamebox-collapse')
        document.querySelector('.btn-hide').textContent = 'Hide Panel'
    }
    else{
        gamebox.classList.add('gamebox-collapse')
         document.querySelector('.btn-hide').textContent = 'Show Panel'
    }
})



const count = document.querySelector('.count')
let secretNumber = Math.trunc(Math.random()*20) + 1



const check = document.getElementById('check')
const guess = document.querySelector('guess')
const message = document.querySelector('.message')
 document.querySelector('.score')
 document.querySelector('.highscore')
let score = 20;
let highscore = 0

check.addEventListener('click', function(){
    const guess = Number(document.getElementById('guess').value)
    console.log(guess, typeof guess)
   if(!guess){
    
    document.querySelector('.message').textContent = 'No number'
   }
   else if(guess !== secretNumber){
    if(score > 1){
     
    document.querySelector('.message').textContent =
    guess > secretNumber? 'Too high' : 'Too low'
    score--
    document.querySelector('.score').textContent = score
   }else{
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'You lost the game'
    document.querySelector('.gamebox').style.backgroundColor = 'red'
    score--
    document.querySelector('.score').textContent = 0
   
   }
   }
   else if(guess === secretNumber){
    if(score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = highscore
       }
    document.querySelector('.message').textContent = 'You win'
    count.textContent = secretNumber
    document.querySelector('.gamebox').style.backgroundColor = '#60b347'
   }
})

document.getElementById('restart').addEventListener( 'click', function(){
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    document.querySelector('.count').textContent = '?'
    document.querySelector('.gamebox').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing!!...'
    document.querySelector('.number').value = ''
})

