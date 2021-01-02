var sprite1, sprite2;



function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(400, 200, 50, 80);
  sprite1.shapeColor = "red";

  sprite2 = createSprite(200,200,80,50);
  sprite2.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  sprite1.y = World.mouseY;
  sprite1.x = World.mouseX;

  console.log(sprite1.x - sprite2.x)

  if(sprite1.x-sprite2.x < sprite1.width/2 + sprite2.width/2 && sprite2.x-sprite1.x < sprite1.width/2 + sprite2.width/2  && 
    sprite1.y-sprite2.y < sprite1.height/2 + sprite2.height/2 && sprite2.y-sprite1.y < sprite1.height/2 + sprite2.height/2){

    sprite1.shapeColor = "pink";
    sprite2.shapeColor = "black";
  }

  else{
    sprite1.shapeColor = "red";
    sprite2.shapeColor = "blue";
  }


  drawSprites();
}