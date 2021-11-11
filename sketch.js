const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var option = {isStatic: true}
  playerBase = Bodies.rectangle(100, 600, 150, 150, option)   
  World.add(world, playerBase)

  player = Bodies.rectangle(150, 530, 50, 100, option)
  World.add(world, player)
  



}

function draw() {
  background(backgroundImg);

  image(baseimage, playerBase.position.x, playerBase.position.y, 150, 150)
  image(playerimage, player.position.x, player.position.y, 50, 100)


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
