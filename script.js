const player = document.querySelector('.player');
const obstacle = document.querySelector('.obstacle');


const jump = () => {
    player.classList.add('jump');

    setTimeout(() => {
        player.classList.remove('jump');
    }, 500);

}

const loop = setInterval(() => {
    const obstaclePosition = obstacle.offsetLeft; 
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px', '');
    

    if (obstaclePosition <= 70 && obstaclePosition > 0 &&playerPosition < 85){
        obstacle.style.animation = 'none';
        obstacle.style.left = `${obstaclePosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = 'img/player/hurt/player-hurt-160-1.png'
        player.style.width = '90px'

        //window.alert("You died") 

        clearInterval(score);
        clearInterval(loop);
    }
}, 10);

const score = setInterval(() => {
    const points =+1 
    console.log(points)
}, 1000);

document.addEventListener('keydown', jump);