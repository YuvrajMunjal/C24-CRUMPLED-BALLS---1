
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box = new Box(460,663,180,13)
	box2 = new Box(560,610,20,100)
	box3 = new Box(360,610,20,100)

	paperBall = new Paper(100,450,30)
	
	ground = new Ground(400,680,800,20)
	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box.display();
  box2.display();
  box3.display();	
  paperBall.display();
  ground.display();
  ForceApplied();
  console.log(paperBall.x)
}

function ForceApplied(){
if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:-5,y:-5});
}


}
