
function handeCollision(){
    let collisionDetected = false;

    for(let i = 0; i < pipeArray.length; i++){ // bird.x is a static value, bird doesnt move in X.
        // check if bird is in the pipe; X position only;
        if( bird.x + bird.width > pipeArray[i].collisionX && // If the most right side of the bird, is bigger then the most right side of the pipe
            // AND
            bird.x < pipeArray[i].collisionX + pipeArray[i].width && // If the most left side of the bird, is smaller then the most right side of the pipe
            // AND (A or B)
           (bird.y < pipeArray[i].collisionTopPipe || // If the top part of the bird, is smaller then the topPipe lowest Y point;
            // OR 
            bird.y + bird.height > pipeArray[i].collisionBottomPipe)){ // If the bottom part of the bird, is bigger then the top part of the bottomPipe

                collisionDetected = true;
           }

    if (collisionDetected === true){
        context.font='20px sans-serif';
        context.fillStyle='black';
        context.fillText('Game Over, your score is ; ' + score, canvas.width / 3.8, canvas.height /2 + 10);
        return true;
    }
}
}

function handleScoreText(){
    context.font='40px sans-serif';
    context.fillStyle='black';
    context.fillText(score, canvas.width / 1.2, canvas.height / 1.05);
}


function handeCollisionOriginel(){
    for(let i = 0; i < pipeArray.length; i++){
        if( bird.x                  < pipeArray[i].x + pipeArray[i].width &&
            bird.x + bird.width     > pipeArray[i].x &&

            ((bird.y < 0 + pipeArray[i].top && bird.y + bird.height > 0) ||
            (bird.y > canvas.height - pipeArray[i].bottom &&
            bird.y + bird.height < canvas.height))){
                context.font='20px sans-serif';
                context.fillStyle='black';
                context.fillText('Game Over, your score is ; ' + score, canvas.width / 3.8, canvas.height /2 + 10);
                return true;
           }
        }
}