const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var bg;
var stone1, stoneImg;
var column1;
var bird1
var slingShot1;
var ground1;

function preload(){

bg=loadImage("Angry Bird3.jpg")
stoneImg=loadImage("AsteroidSprite.png")

}

function setup(){
createCanvas(1500,700);
engine = Engine.create();
world = engine.world;


ground1= new Ground(750,615,1500,20);
column1= new Column(1200,300,20,20)
bird1= new Bird(1200,100,20,20)
stone1=new Stone(500,400,20)
column2= new Column(1250,300,20,20)

slingShot1= new SlingShot(stone1.body,{x:500,y:400})
anchor1=new Point(bird1.body,{x:1180,y:100})


Engine.run(engine);
}


function draw(){
background(bg)



ground1.display();
slingShot1.display();

stone1.display();
column1.display();
column2.display();
bird1.display();
anchor1.display()


    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    slingShot1.fly();
  }
  function keyPressed(){
    if(keyCode === 32){
        slingShot1.attach(stone1.body);
    }
  }