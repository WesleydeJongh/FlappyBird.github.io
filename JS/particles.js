
const particleArray = [];

let rainbowParticles = 0;

const trailLength = 300; // the max length of the array decides how long the trail is;
const spawnEveryFrame = 3; // spawn a new particle ever # frames;

class Particle{
    constructor(){
        this.x = bird.x;
        this.y = bird.y + bird.height / 2 ;
        this.size = Math.random() * 5 + 3;
        this.speedY = (Math.random() * 1) - 0.5;
        this.color = 'hsla(' + hue + ',100%, 50%, 0.8';
    }

    update(){
        this.x -= gameSpeed / 2; // speed of particles shooting out.
        this.y += this.speedY; // spread of paricles
    }

    draw(){
        context.fillStyle=this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI *2);
        context.fill();
    }
}

function handleParticles(){
    if(frame%spawnEveryFrame === 0){ // slow down particle spawning, spawn a new particle every #frames;
        particleArray.unshift(new Particle);
    }
    rainbowPipes ++;
    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
    };

    if(particleArray.length > trailLength){ // trail length = array length
        for(let i = 0; i < 20; i++){
            particleArray.pop(particleArray[i]);
        }
    }
}





