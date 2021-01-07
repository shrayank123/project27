
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	box1 = new Box(400,200,350,30);
	bob1 = new Ball(370,400,20)
	rope1= new Rope()
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  box1.display();
  bob1.display();

  drawSprites();
 
}



