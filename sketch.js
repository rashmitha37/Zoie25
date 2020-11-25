
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binL,binB,bunR;
var ground;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin = new Dustbin();

	//bin = new Dustbin(880,565,15,10);
	//binR = new Dustbin(1130,565,15,10);
	//binB = new Dustbin(1000,630,10,15);

	ground = new Ground(600,635,1200,20);
	paper = new Paper(100,300,70);

	Engine.run(engine);
  
}

function draw() {
  background("tan");
  Engine.update(engine);
 
  
  
 paper.display(); 
 ground.display();
 bin.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body, paper.body.position,{x:940,y:-944});
	

	}
}