const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies; 
const Constraint= Matter.Constraint; 

var engine, world;  

 var hexa1; 
var hammer; 

function preload(){ 

} 

function setup(){ 
var canvas = createCanvas(1200,400); 
engine = Engine.create();
world = engine.world;
 

hexa1= new Hexagon (1200,200,20); 
hammer=createSprite(1200,200,20); 

} 

function draw(){ 
    background("brown");
    Engine.update(engine);
 
 hexa1.display(); 
 hammer.display(); 
} 