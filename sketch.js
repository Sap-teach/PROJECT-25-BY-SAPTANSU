
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj,groundObj,paperObj,world,bgImg;
function preload()
{
	bgImg=loadImage("bg0.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//for dustbin
	dustbinObj=new DustBin(1480,654);

	
	//for ground
	groundObj=new Ground(800,680,1600,30);
	
		//for paper ball\
	paperObj=new paper(100,200,90)


	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(bgImg);
  paperObj.display();
  dustbinObj.display();
  //groundObj.display();
  
  fill("white");
  keyPressed();
  drawSprites();

 
}
function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paperObj.body,paperObj.body.position,{x:45,y:-45});
	}
}



