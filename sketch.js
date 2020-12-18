const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup(){
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground1=new Ground(600,390,1200,10);

    box1 = new Box (800,360,50,50);
    box2 = new Box(800, 300,50,50 );
    box3 = new Box(800, 250,50,50 );
    box4 = new Box(800, 200,50,50 );
    box5 = new Box(800, 150,50,50 );
//create ball
    ball = new Ball(500,200,80,80);
//to create rope
    rope = new Rope(ball.body,{x:500,y:50});

}



function draw(){
background("black");

Engine.update(engine);

    ground1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ball.display();

    rope.display();
   
    
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
} 