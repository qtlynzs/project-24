var paper1;
var dustbin1;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    
	paper1 = new paper(200,200,10);
	dustbin1 = new dustbin();
    ground1 = new ground();
}


function draw() {
	rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper1.Display()
 dustbin1.Display();
ground1.Display();
}



