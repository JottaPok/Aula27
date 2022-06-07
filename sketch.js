const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var fundo
var torre
var torreto
var canon
var boll
var angulo

var bote=[]
var bolas=[]

function preload() {
 fundo = loadImage("assets/background.gif")
 torre = loadImage("assets/tower.png")
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
  angulo = 10;
  canon = new canhao(100, 125, 200, 200, angulo)
 options={
 isStatic:true
 }
 ground = Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 torreto = Bodies.rectangle(16,160, 180,350,options);
 World.add(world,torreto);

}

function draw() {
  background(fundo);
  Engine.update(engine);
  canon.display();
  botes()
  rect(ground.position.x, ground.position.y,width*2,1);
  image(torre, torreto.position.x, torreto.position.y, 180, 350);

  for(var i=0; i<bolas.length; i++){
    bollas(bolas[i])
  }
}

function keyPressed(){
  if(keyCode == 32){
    boll = new bola(canon.x, canon.y)
    bolas.push (boll)
    bolas[bolas.length-1].disparar()
  }  
}

function bollas(bbola){
  if(bbola){
    bbola.display()
  }
}

function botes(){
  
  
  if(bote.length>0){
    if(bote[bote.length-1].body.position.x<width -100){
      var barco = new boat(width-200, height-200)
      bote.push (barco)
    }
    for (var i=0; i<bote.length; i++){
      bote[i].display()
    }
  }
  else{
    var barco = new boat(width-200, height-200)
    bote.push (barco)
  }
}
