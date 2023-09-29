const button = document.querySelector('button')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

button.addEventListener('click', clickCk)

function clickCk() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')

  
}


btnReset.addEventListener ('click', function()
 {
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
 })