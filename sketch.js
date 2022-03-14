
var trex ,trex_running;
function preload(){

 trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(70,100,30,30)
 trex.addAnimation("trex_running",trex_running)
 trex.scale=0.6
}

function draw(){
  background("blue")
  
drawSprites()
}
