const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var chain;
var pendulum,platform;
var engine, world;

function setup(){
    var canvas = createCanvas(400,700);
    engine = Engine.create();
    world = engine.world;

    platform = new Platform();
    
    pendulum = new Pendulum();
    chain = new Chain(platform.body,pendulum.body);

}

function draw(){
    background(0);
   Engine.update(engine);

    platform.display();
    chain.display();
    pendulum.display();

    fill("white");
    textSize(20);
    text("Take your cursor to a point and then press ",0,20);
    text("space to move the pendulum ",0,40);
}

function keyPressed(){
         if(keyCode === 32){
         Matter.Body.setPosition(pendulum.body, {x: mouseX , y: mouseY});
         }
}