
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

	tree = new Tree(600,475);
	ground = new Ground(500,700,1000,50);
	boy = new Boy(200,640);
	mango1 = new Mango(600,400,50);
	mango2 = new Mango(750,420,50);
	mango3 = new Mango(500,370,50);
	mango4 = new Mango(575,390,50);
	mango5 = new Mango(675,360,50);
	mango6 = new Mango(700,350,50);
	stone = new Stone(135,590,50);
	
	//holder = new Holder(135,590)
	slingshot = new Chain(stone.body, {x: 200, y:600});
	

  
}


function draw() {
 
  background("lightblue");
  Engine.update(engine);
  
  

  tree.display()
  ground.display()
  boy.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  slingshot.display()
  //holder.display()
  stone.display()

detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);

//drawSprites();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
		//Matter.Body.setPosition(stone.body,{x:125,y:580})
        slingshot.attach(stone.body);
	}
}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.Position
stoneBodyPosition=lstone.body.Position

//var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
//if(distance <= lmango.r+lstone.r)
//{
//	Matter.Body.setStatic(lmango.body,false);
//}

}

