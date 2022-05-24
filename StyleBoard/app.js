const board = document.querySelector('#board')
const container = document.querySelector('.container')

const widthDisplay = window.innerWidth
const heightDisplay = window.innerHeight
const squares_number = (Math.floor((heightDisplay-200)/20))*(Math.floor((widthDisplay-200)/20))//Количество квадратиков
container.style.maxWidth = `${widthDisplay-200}px`
const colors = ['#A6535A', '#BF6991', '#767DA6', '#568C8C', '#BF907E']

for (let i=0; i<squares_number; i++){
    //На каждой итерации будем создавать переменную 
    const square = document.createElement('div')//добавляем html элемент
    square.classList.add('square')
    
    square.addEventListener('mouseover', ()=>{setColor(square)})//когда наводим мышь на элемент

    square.addEventListener('mouseleave', ()=>{removeColor(square)}) //когда убираем мышь с квадратика
    
    board.append(square) //добавляем квадратиков на доску
}

function setColor(element){
    const idx = getRandomColor(0, colors.length)
    element.style.backgroundColor = `${colors[idx]}`
    element.style.boxShadow = `0 0 2px ${colors[idx]}, 0 0 10px ${colors[idx]}`
}

function removeColor(element){
    element.style.backgroundColor='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}


function getRandomColor(min, max) {
    return Math.floor(Math.random() *(max-min) + min);
  }
