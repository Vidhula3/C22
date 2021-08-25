const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  
  engine=Engine.create();
  world=engine.world;
  
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(world,ground);

  var options_ball={
  restitution:1
  }
  ball=Bodies.circle(200,100,20,options_ball);
  World.add(world,ball);

  console.log(ball)
}

function draw() {
  background("brown");  
  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}