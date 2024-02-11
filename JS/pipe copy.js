
const pipeArray = [];

class Pipe{
    constructor(){
        this.top = (Math.random() * canvas.height / 3) + canvas.height / 8;
        this.bottom = (Math.random() * canvas.height / 3) + canvas.height / 8;
        this.x = canvas.width;
        this.width = 20;
        this.color = 'hsla(' + hue + ',100%, 50%, 0.8';
        this.counted = false;
    }

    draw(){
        context.fillStyle = this.color;
        context.fillRect(this.x, 0, this.width, this.top);
        context.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }

    update(){
        this.x -= gameSpeed;
        if(this.counted === false && this.x < bird.x){
            score++
            this.counted = true;
        }
        this.draw()
    } 
}  
 
function handlePipes(){
    if(frame === 150){ // every 50 frames;
        pipeArray.unshift(new Pipe);
        frame = 0;
    }
    for(let i = 0; i < pipeArray.length; i++){
        pipeArray[i].update();
    }
    if(pipeArray.length > 10){
        pipeArray.pop(pipeArray[0])
    }
}


