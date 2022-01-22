const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var bottomGround,topGround,leftGround,rightGround
var ball
var button1
var button2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  bottomGround=new Ground(200,390,400,20)
  leftGround= new Ground(10,200,20,400)
  rightGround= new Ground(390,200,20,400)
  topGround= new Ground(200,10,400,20)

  var ball_options={
    restitution:0.98,
    frictionAir:0.01
  }
  ball=Bodies.circle(200,20,30,ball_options)
  World.add(world,ball)
  button1=createButton("hButton")
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hForce)

  button2=createButton("vButton")
  button2.position(30,220)
  button2.size(50,50)
  button2.mouseClicked(vForce)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  
  bottomGround.show()
  leftGround.show()
  rightGround.show()
  topGround.show()

  ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)
}
function hForce() {
Matter.Body.applyForce(ball,{
  x:0,y:0
},{
  x:0.26,
  y:0
})
}
function vForce() {
  Matter.Body.applyForce(ball,{
    x:0,y:0
  },{
    x:0,
    y:0.2
  })
}