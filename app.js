const grid = document.querySelector('.grid')
let width = 15
let currentShooterIndex = 202


for (let i=0; i<255; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}

const squares = Array.from(document.querySelectorAll('.grid div'))

const aliens = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
  ]

function draw() {
    for(let i=0; i<aliens.length; i++) {
        squares[aliens[i]].classList.add('invader')
    }
}
draw()


function remove() {
    for(let i=0; i<aliens.length; i++) {
        squares[aliens[i]].classList.remove('invader')
    }
}

squares[currentShooterIndex].classList.add('shooter')

function movingShooter(event) {
    squares[currentShooterIndex].classList.remove('shooter')
    switch(event.key){
        case 'ArrowLeft':
            if(currentShooterIndex % width !==0) currentShooterIndex -=1
            break
        case 'ArrowRight':
            if(currentShooterIndex % width < width -1) currentShooterIndex +=1
            break
            
    }
    squares[currentShooterIndex].classList.add('shooter')

}

document.addEventListener('keydown',movingShooter)

let aliensTerritory = aliens.length

function moveAliens() {
    const leftCorner = aliens[0] % width === 0
    const rightCorner = aliens[aliensTerritory - 1] % width === width - 1
    remove()
}