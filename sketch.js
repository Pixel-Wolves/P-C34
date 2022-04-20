const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var boxes = [];

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  /*box1 = new Box(600, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);*/

  for(var i = 600; i < 900; i+=70){
    boxes.push(new Box(i,i*-1,70,70));
  }

  for(var j = 600; j < 900; j+=70){
    boxes.push(new Box(j,j*-2,70,70));
  }

  for(var k = 600; k < 900; k+=70){
    boxes.push(new Box(k,k*-3,70,70));
  }

  for(var l = 600; l < 900; l+=70){
    boxes.push(new Box(l,l*-4,70,70));
  }

  for(var m = 600; m < 900; m+=70){
    boxes.push(new Box(m,m*-5,70,70));
  }

  for(var n = 600; n < 900; n+=70){
    boxes.push(new Box(n,n*-6,70,70));
  }
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  /*box1.display();
  box2.display();
  box3.display();
  box4.display()*/

  for(var i = 0; i < boxes.length; i++){
    boxes[i].display();
  }

  hero.display();
  rope.display();
  monster.display();

  if(mouseIsPressed == true && mouseButton == LEFT){
    Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY});
  }
}
