var fixedrect,movingrect


function setup() {
  createCanvas(1200,800);
  fixedrect=createSprite(200,200,50,80)
  fixedrect.shapeColor="blue"
  movingrect=createSprite(400,200,80,30)
  movingrect.shapeColor="blue"
  
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY
if(movingrect.x-fixedrect.x< fixedrect.width/2+movingrect.width/2
  && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  && movingrect.y-fixedrect.y< fixedrect.height/2+movingrect.height/2
  && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}
else{
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}
  drawSprites();
}




