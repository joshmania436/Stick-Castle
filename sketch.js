const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1;
var engine,world;
var boxes = [];
var ground;


function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(200,100,50,50);
    ground = new Ground(300,390,600,50);
 
}

function mousePressed(){
boxes.push(new Box(mouseX,mouseY,50,50));
}

function draw(){
    background("crimson");
    Engine.update(engine);

    for (var i=0;i<boxes.length;i++){
        boxes[i].display();
    }

    ground.display();
    fill(255);
    textSize(15);
    text("Create Your Own Castle :)",20,60);
    text("Use The Arrow Keys",40,80)
    text("USE YOUR LAPTOP",134,18);
    }