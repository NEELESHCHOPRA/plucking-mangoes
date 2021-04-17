const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var engine,world;

function preload()
{
	boyImg = loadImage("boy.png");
  
}

function setup() {
	createCanvas(1100, 500);
  

	engine = Engine.create();
	world = engine.world;

  
	//Create the Bodies Here.
  ground=new Ground(550,480,1150,20);

  stone1=new Stone(100,300,100,100);
  
 

  Engine.run(engine);

  //slingshot = new SlingShot(stone1.body,{x:1500, y:300});
  
  
  tree1=new tree(850,10);
  Mango1 = new mango(700,250,60);
  mango2 = new mango(750,100,50);
  mango3 = new mango(800,100,40);
  mango4 = new mango(800,200,60);
  mango5 = new mango(900,100,55);
  mango6 = new mango(800,200,70);
  mango7 = new mango(1000,150,80);
  Mango8 = new mango(720,200,60);
  mango9 = new mango(750,100,50);
  mango10 = new mango(800,100,40);
  mango11 = new mango(1000,200,60);
  mango12 = new mango(900,100,55);
  mango13 = new mango(900,200,70);
  mango14 = new mango(1050,250,80);

SlingShot1 = new SlingShot(stone1.body,{x:120,y:325})

}


function draw() {
  rectMode(CENTER);
  background("white");
 
  image(boyImg,100,250,250,250);
  


detectcollision(stone1,Mango1);
detectcollision(stone1,Mango8);
detectcollision(stone1,mango2);
detectcollision(stone1,mango3);
detectcollision(stone1,mango4);
detectcollision(stone1,mango5);
detectcollision(stone1,mango6);
detectcollision(stone1,mango7);
detectcollision(stone1,mango9);
detectcollision(stone1,mango10);
detectcollision(stone1,mango12);
detectcollision(stone1,mango11);
detectcollision(stone1,mango13);
detectcollision(stone1,mango2);

  
tree1.display();
  SlingShot1.display();
stone1.display();
mango2 .display();
mango3.display();
mango4.display();
mango5.display();
mango6 .display();
mango7.display();
Mango1.display();
Mango8.display();

mango9.display();
mango11.display(); 
mango10.display();
mango12 .display();
mango13.display();
mango14.display();

ground.display();

drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  SlingShot1.fly();
}

/*function detectcollision(Lstone,Lmango){
mangoBodyPosition=Lmango.body.setPosition
stoneBodyPosition=Lstone.body.setPosition
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<-Lmango.r+Lstone.r)
{
  Body.setStatic(Lmango.body,false)
}
}*/

function detectcollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position 
  stoneBodyPosition=lstone.body.position 
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) //console.log(distance) // console.log(lmango.r+lstone.r) 

  if(distance<=lmango.radius+lstone.width+lstone.height) { //console.log(distance);

     Matter.Body.setStatic(lmango.body,false); } }


function keyPressed(){
  if(keyCode===32) 
  {
		Matter.Body.setPosition(stone1.body,{x:120,y:325});
		SlingShot1.attach(stone1.body);
	}
}