// Bird physics;
const birdWeight = 4; // normale velocity, every loop drop this value in pixels;
const birdVelocityScaler = 0.25; // velocity multiplier per loop, so drops faster and faster the longer it drops; and flys faster the longer your hold space
const flapVelocity = 7.5; // go up (every loop) this value in pixels while holding input;

birdImg = new Image();
birdImg.src = "./IMG/flappybird.png"

class Bird {
    constructor(){
        this.x = 150;
        this.y = 200;
        this.velosityY = 0;
        this.width = 25;
        this.height = 15;
        this.weight = birdWeight;
        }

    update(){
        let curve =  Math.sin(angle) * 15  ; // Create a sinus, to add the movement of the bird, to make it move passivly;
        if(this.y > canvas.height - (this.height * 3) + curve){ // if bird is below the cavnas - itself(*offset), set it to lowest pos +stop velosity;
            this.y = canvas.height - (this.height * 3) + curve;
            this.velosityY = 0;
        } else { // else = bird is in its normal movement range;
            this.velosityY += this.weight; // so it always move drops down.. 0 = top, += move down
            this.velosityY *= birdVelocityScaler;
            this.y += this.velosityY;
        }
        if(this.y < 0 + this.height){ // if bird is above the canvas, set it to max height +stop velocity;
            this.y = 0 + this.height
            this.velosityY = 0; // also reset volicity, when you release space it will drop instantly
        }
        if(spacePressed === true && this.y > this.height * 3){ // part after && makes it also woble at the top.
            this.flap()
        }
        bird.draw();
    }

    draw(){
        //context.fillStyle='red';
        //context.fillRect(this.x, this.y, this.width, this.height);
        context.drawImage(birdImg, bird.x, bird.y, bird.width +5, bird.height +5);
    }

    flap(){
        this.velosityY -= flapVelocity;
    }
}

const bird = new Bird();

function handleBird(){
    bird.update(); 
}







