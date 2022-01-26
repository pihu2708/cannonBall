//renaming
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world,ground;



function preload() {
 bgimg = loadImage( "assets/background.gif")
 towerimg = loadImage( "assets/tower.png")

}
function setup() {

  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  var options = {isStatic:true}
  tower = Bodies.rectangle(160,350,160,310,options)
  World.add(world,tower)
  //PI = 180
  cannon=new Cannon(180,110,130,100,-PI/4)
  cannonBall= new Cannonball(cannon.x-10,cannon.y)
}

function draw() {
  background(bgimg);
 
  Engine.update(engine);
  push()
  imageMode(CENTER)
   image(towerimg,tower.position.x,tower.position.y,160,310)
   pop()
  cannon.display()
  cannonBall.display()
}

function keyPressed(){
  if(keyCode==DOWN_ARROW){
    cannonBall.shoot()
  }
}