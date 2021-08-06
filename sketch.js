var runner,runnerImage;
var path, pathImage;

function preload(){
  //pre-load images

  runnerImage=loadAnimation("Runner-1.png","Runner-2.png");
  pathImage=loadImage("path.png");

}

function setup(){

  createCanvas(400,400);


  path=createSprite(200,200);
  path.addImage(pathImage);
  path.velocityY=4;
  path.scale=1.2;

  runner=createSprite(100,300,10,10);
  runner.addAnimation("running",runnerImage);
  runner.scale=0.06;
}

function draw(){
  background(0)

  runner.x= World.mouseX

  if(path.y > 400){
    path.y = height/400;
  }
  
  
  drawSprites();
}