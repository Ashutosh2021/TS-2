const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,ground2,ground3;

var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20 ;
var b21,b22,b23,b24 ;
var ball1;
var slingshot1;

function preload(){

    
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,590,1200,20);
    ground2 = new Ground(500,450,350,20);
    ground3 = new Ground(900,320,260,20);

    // line 1
    b1 = new Block(380,420);
    b2 = new Block(420,420);
    b3 = new Block(460,420);
    b4 = new Block(500,420);
    b5 = new Block(540,420);
    b6 = new Block(580,420);
    b7 = new Block(620,420);

    // line 2
    b8 = new Block(420,370);
    b9 = new Block(460,370);
    b10 = new Block(500,370);
    b11 = new Block(540,370);
    b12 = new Block(580,370);

    // line 3
    b13 = new Block(460,320);
    b14 = new Block(500,320);
    b15 = new Block(540,320);

    // line 4 
    b16 = new Block(500,270);

    // line 5
    b17 = new Block(900,290);
    b18 = new Block(860,290);
    b19 = new Block(820,290);
    b20 = new Block(940,290);
    b21 = new Block(980,290);

    // line 6
    b22 = new Block(860,240);
    b23 = new Block(900,240);
    b24 = new Block(940,240);

    // line 7
    b25 = new Block(900,190);

    ball1= new Ball(200,500,60);

    slingshot1 = new SlingShot(ball1.body,{x: 150,y: 400});
    
}


function draw(){

    Engine.update(engine);

    background(50);
    
    fill("purple");
    push();
    stroke(200);
    strokeWeight(3);
    textSize(25);
    text("Drag the Hexagonal stone and Release it,to launch it towards the blocks",200,100);
    pop();
   

    ground1.display();
    ground2.display();
    ground3.display();

    fill(255, 180, 180);
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();

    fill(160, 275, 150);
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();

    fill(100, 200, 200);
    b13.display();
    b14.display();
    b15.display();

    fill(240,275,150);
    b16.display();

    fill(240,275,150);
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();

    fill(255,180,180);
    b22.display();
    b23.display();
    b24.display();

    fill(160, 200, 200);
    b25.display();

    slingshot1.display();

    ball1.display();

  

    drawSprites();
}

function mouseDragged(){

    Matter.Body.setPosition(ball1.body,{x: mouseX , y: mouseY});
}

function mouseReleased(){

    slingshot1.fly();
}

function keyPressed(){

    if(keyCode===32){
        slingshot1.attach(ball1.body);
       
    }
}