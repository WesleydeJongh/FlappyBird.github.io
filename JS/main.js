
// source https://www.youtube.com/watch?v=lGJ9i6CYKyQ
// source pipe inspiration + add images = https://www.youtube.com/watch?v=jj5ADM2uywg

const canvas = document.getElementById('canvas1');
const context = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

backgroundImg = new Image();
backgroundImg.src = "./IMG/flappybirdbg.png"
const backgroundWidth = 300;

// global variables
let spacePressed = false // check input.
let angle = 0; // used to give the bird an idle sway via SIN functie
let hue = 0; // used to cycle throught colors, rainbow effect
let frame = 0; // hold a frame rate, do something for every frame, like spawning a pipe.
let score = 0; // holds score, if bird X passed a pipe X
const gameSpeed = 2; // general speed multiplier, all velocitys based on this speed.

const pipeGap = 100; // pipe gap
const pipeHeight = canvas.height - canvas.height /10; // pipe height is 9/10 of canvas heights, pipe gap offset is scaled of this value;

function animate(){
    context.clearRect(0, 0, canvas.width, canvas.height); // clear content every frame, before new canvas drawn

    context.drawImage(backgroundImg, 0, 0, backgroundWidth, canvas.height);
    context.drawImage(backgroundImg, backgroundWidth, 0, backgroundWidth, canvas.height);

    handlePipes(); // create pipes
    handleBird();
    handleParticles(); // create particle effect behind bird
    handeCollision();
    handleScoreText();

    if (handeCollision() === true){
        return; // return ends the game; 
    };
    
    //window.addEventListener('keydown',(e) => console.log(e));
    requestAnimationFrame(animate); // recall functions, via animation;
    angle += 0.12 // make the bird move passivly, lower the value, the lower the speed
    hue++; // create a input for collor, what makes it cycle through rianbow collors;
    frame++; // create a frame counter, every #frames do something, like create a pipe
} 

animate(); 

window.addEventListener('keydown', function(e){
    if(e.code === 'KeyQ') location.reload(); // reloas page, for a new game;
});

// listen to spacebar button press;
window.addEventListener('keydown', function(e){
    if(e.code === 'Space') spacePressed = true;
    
});

window.addEventListener('keyup', function(e){
    if(e.code === 'Space') spacePressed = false;
});




