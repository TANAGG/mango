const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2;
var ground,boy;
var slingshot;
var mango1,mango2,mango3,mango4,mango5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Stone(200,300,20,20);
    box2 = new Stone(240,100,50,100);
    ground = new Ground(200,height,2000,20);
    boy = new Boy(260,300,20,300);
    mango1 = new Mango(800,300,20,20);
    mango2 = new Mango(900,400,20,20);
    mango3 = new Mango(750,300,20,20);
    mango4 = new Mango(930,350,20,20);
    mango5 = new Mango(850,300,20,20);
    slingshot = new SlingShot(stone,{x: 400,y :300});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    boy.display();
    ground.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    
}

function detectcollision(Lstone,Lmango){
   mangoBodyPosition = Lmango.body.position;
   stoneBodyPosition = Lstone.body.position;

   var distance = dist(stoneBodyPosition.x,stoneBodyPostion.y,mangoBodyPosition.x,mangoBodyPosition.y);
   if(distance<=lmango.r + Lstone.r)
   {
     Matter.Body.setStatic(lmango.body,false);
   }
}

function mouseDragged(){
    Matter.Body.setPosition(box1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}