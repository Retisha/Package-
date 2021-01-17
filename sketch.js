var canvas,Block1,BLock2,Block3,Block4,Ball,music


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    Ball = createSprite(random(20,750),200,40,40)
    Ball.velocityY = 5
    Ball.velocityX = 8
    Ball.shapeColor = ("white")
    
    Block1 = createSprite(100,590,200,20)
    Block1.shapeColor = ("green")

    Block2 = createSprite(300,590,200,20)
    Block2.shapeColor = ("red")

    Block3 = createSprite(500,590,200,20)
    Block3.shapeColor = ("blue")

    Block4 = createSprite(700,590,200,20)
    Block4.shapeColor = ("yellow")

    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    Edges = createEdgeSprites();
    Ball.bounceOff(Edges)

    if(Block1.isTouching(Ball) && Ball.bounceOff(Block1)){
        Ball.shapeColor = ("green")
        music.play();
    }

    if(Block2.isTouching(Ball) && Ball.bounceOff(Block2)){
        Ball.shapeColor = ("red")
        music.play();
    }

    if(Block3.isTouching(Ball)){
        Ball.shapeColor = ("blue")
        Ball.velocityY = 0
        Ball.velocityX = 0
        music.stop();
    }

    if(Block4.isTouching(Ball) && Ball.bounceOff(Block4)){
        Ball.shapeColor = ("yellow")
        music.play();
    }
    drawSprites();
    }
    //create edgeSprite



    //add condition to check if box touching surface and make it box

