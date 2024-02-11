
const pipeArray = [];

const createPipeEveryNumberOfFrames = 180;
let rainbowPipes = 0;

topPipeImg = new Image();
topPipeImg.src = "./IMG/toppipe.png"

bottemPipeImg = new Image();
bottemPipeImg.src = "./IMG/bottompipe.png"


class Pipe{
    constructor(){
        this.height = pipeHeight;
        this.pipeOffset = (pipeHeight / 5) + Math.random() * pipeHeight / 1.6;
        // pipeHeight / 4 = from 25% (height disapears in cieling)
        // + random0..1 * (pipeHeight / 2 = 50%) this is added to 25%, so a range from 25%(+0*50) upto 75%(+1*50)
        // bigger range update is (/5 = 20%) + (0..1* /1.6=62%) that equels from 20% ~ 82% gap position range;
        this.x = canvas.width;
        this.width = 30;
        this.color = 'hsla(' + rainbowPipes + ',100%, 50%, 0.8';
        this.counted = false;

        this.collisionX = this.x;
        this.collisionTopPipe = this.height - this.pipeOffset;
        this.collisionBottomPipe = this.height  + pipeGap - this.pipeOffset;
    }

    draw(){
        context.fillStyle = this.color;
        //context.fillStyle = 'red';
        context.fillRect(   this.x,     // start at canvas width, so most right of the screen
                            0 - this.pipeOffset,          // start at top of the screen
                            this.width, // width of the pipe
                            this.height);  // height of the pipe
        context.drawImage(topPipeImg, this.x -5, 0 - this.pipeOffset + 3, this.width +10, this.height);
        
        //context.fillStyle = 'blue';
        context.fillRect(   this.x,     // start at canvas width, so most right of the screen
                            this.height + pipeGap - this.pipeOffset, // canvas height, makes it start at the top.
                            this.width, 
                            this.height);
        context.drawImage(bottemPipeImg, this.x -5, this.height + pipeGap - this.pipeOffset - 3, this.width +10, this.height);
    }

    update(){
        this.x -= gameSpeed;
        this.collisionX = this.x;
        if(this.counted === false && this.x < bird.x){
            score++
            this.counted = true;
        }
        this.draw()
        //console.log(pipeArray)
    } 
}  
 
function handlePipes(){
    if(frame%createPipeEveryNumberOfFrames === 0){ // every 150 frames;
        pipeArray.unshift(new Pipe);
        rainbowPipes += Math.random() * 300;
    }
    for(let i = 0; i < pipeArray.length; i++){
        pipeArray[i].update();
    }
    if(pipeArray.length > 5){
        pipeArray.pop(pipeArray[0])
    }
}

