const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }


    ground = Bodies.rectangle(displayWidth-500,displayHeight-25,displayWidth+200,50,ground_options);
    World.add(world,ground);

    var ball_options = { 
    restitution : 1.0
    }
   
    ball= Bodies.circle(200,100,20, ball_options)
    World.add(world,ball)

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode (CENTER);
    rect(ground.position.x,ground.position.y,displayWidth+200,50);
    ellipseMode (RADIUS)
    ellipse (ball.position.x, ball.position.y, 20, 20)
}