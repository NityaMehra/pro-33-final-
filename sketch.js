const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background ;
var snow4,snow5, snowman1Img,snowman2Img,snowman1,snowman2;
var bg,ground,snow =[];


function preload(){
  snowman1Img = loadAnimation("snowman1.png");
  snowman2Img = loadAnimation("snowman2.png");
  snow4 = loadImage("snow4.webp");
 // snow5 = loadImage("snow4.webp");
  bg = loadImage("snow1.jpg");

}
function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  ground = createSprite(650,580,1300,50);
  ground.visible = false;

  snowman1 = createSprite(500,350,20,70);
  snowman1.addAnimation("snowman1",snowman1Img);

  snowman2 = createSprite(300,350,20,70);
  snowman2.addAnimation("snowman2",snowman2Img);
  

  if(frameCount % 50 === 0){ 
    for(var i=0; i<100; i++){
    snow.push(new Snow(random(0,1250), random(0,50), 40));
    }
  }

}

function draw() {
  background(0);  
  Engine.update(engine)

  image(bg,0,0,1300,600);

  //ground.display();
   for(var i =0 ; i<100 ;i++){
  snow[i].display();
  snow[i].changePosition();
   }

  if (keyWentDown("space")) {
    snowman1.addAnimation("snowman2",snowman2Img);
    snowman1.changeAnimation("snowman2",snowman2Img);

     snowman2.addAnimation("snowman1",snowman1Img);
    snowman2.changeAnimation("snowman1",snowman1Img);
  }
  

  if (keyWentUp("space")) {
    //snowman1.addAnimation("snowman1",snowman1Img);
    snowman1.changeAnimation("snowman1",snowman1Img);

    // snowman2.addAnimation("snowman2",snowman2Img);
    snowman2.changeAnimation("snowman2",snowman2Img);
  }
  
  drawSprites();
}
/*function keyPressed(){

  if (keyCode == RIGHT_ARROW) {
    snowman1.changeAnimation("snowman2",snowman2Img);

  }
}*/
