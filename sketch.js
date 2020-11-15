const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;
var particles = [];
var plinkos = [];
var division = [];

var divisionHieght=300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
  ground = new Ground(200,780,20,480);
  if(frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10,10));
  }

  for (var k = 0; k <=width; k = k + 80) {
    division.push(new Divisions(k, height-divisionHieght/2, 10, divisionHieght));
  }

  for (var j=40; j <=width; j=j+50)
  {
    plinkos.push(new plinko(j,75));
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    plinkos.push(new plinko(j, 175));
  }
  for (var j=40; j <=width; j=j+50)
  {
    plinkos.push(new plinko(j, 275));
  }
  for (var j=15; j <=width-10; j=j+50)
  {
    plinkos.push(new plinko(j, 375));
  }

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < division.lenght; k++)  {
    division[k].display();
  }
}

function draw() {
  background(255,255,255);  
  ground.display();
  plinkos.display();
  division.display();
  particles.display();
  drawSprites();
}