var fixedRect1, fixedRect2, fixedRect3, fixedRect4, movingRect;


function setup(){
    canvas = createCanvas(800,600);
    
    fixedRect1 = createSprite(90,600,190,100);
    fixedRect1.shapeColor = "blue";

    fixedRect2 = createSprite(300,600,190,100);
    fixedRect2.shapeColor = "yellow";

    fixedRect3 = createSprite(510,600,190,100);
    fixedRect3.shapeColor = "pink";

    fixedRect4 = createSprite(720,600,190,100);
    fixedRect4.shapeColor = "green";

    movingRect = createSprite(random(20,750),40,30,30);
    movingRect.shapeColor = "white";
    movingRect.velocityX = 3;
    movingRect.velocityY = 4;    
}

function draw() {
    background("black");
    Edges = createEdgeSprites();
    movingRect.bounceOff(Edges);

    if(movingRect.isTouching(fixedRect1) && movingRect.bounceOff(fixedRect1)){
        movingRect.shapeColor = "blue";
    }
    if(movingRect.isTouching(fixedRect2) && movingRect.bounceOff(fixedRect2)){
        movingRect.shapeColor = "yellow";
    }
    if(movingRect.isTouching(fixedRect3) && movingRect.bounceOff(fixedRect3)){
        movingRect.shapeColor = "pink";
    }
    if(movingRect.isTouching(fixedRect4) && movingRect.bounceOff(fixedRect4)){
        movingRect.shapeColor = "green";
    }

        drawSprites();  
}


function isTouching(){

    if(movingRect.x - fixedRect1.x < fixedRect1.width/2 + movingRect.width/2
        && fixedRect1.x - movingRect.x < fixedRect1.width/2 + movingRect.width/2
        && movingRect.y - fixedRect1.y < fixedRect1.height/2 + movingRect.height/2
        && fixedRect1.y - movingRect.y < fixedRect1.height/2 + movingRect.height/2){
            return true;
        }
        else{
            return false;
        }

        if(movingRect.x - fixedRect2.x < fixedRect2.width/2 + movingRect.width/2
            && fixedRect2.x - movingRect.x < fixedRect2.width/2 + movingRect.width/2
            && movingRect.y - fixedRect2.y < fixedRect2.height/2 + movingRect.height/2
            && fixedRect2.y - movingRect.y < fixedRect2.height/2 + movingRect.height/2){
                return true;
            }
            else{
                return false;
            }

            if(movingRect.x - fixedRect3.x < fixedRect3.width/2 + movingRect.width/2
                && fixedRect3.x - movingRect.x < fixedRect3.width/2 + movingRect.width/2
                && movingRect.y - fixedRect3.y < fixedRect3.height/2 + movingRect.height/2
                && fixedRect3.y - movingRect.y < fixedRect3.height/2 + movingRect.height/2){
                    return true;
                }
                else{
                    return false;
                }

                if(movingRect.x - fixedRect4.x < fixedRect4.width/2 + movingRect.width/2
                    && fixedRect4.x - movingRect.x < fixedRect4.width/2 + movingRect.width/2
                    && movingRect.y - fixedRect4.y < fixedRect4.height/2 + movingRect.height/2
                    && fixedRect4.y - movingRect.y < fixedRect4.height/2 + movingRect.height/2){
                        return true;
                    }
                    else{
                        return false;
                    }
}