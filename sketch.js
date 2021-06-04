
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,Ground,obstacle
var score=0,survivalTime=0,survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 200); 
monkey=createSprite(130,160,30,30);  
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1;
  

  Ground=createSprite(300,200,600,5);
  Ground.velocityX=-7;
  
   obstaclesGroup = new Group();
  
   FoodGroup = new Group();
}

score =0;
function draw() {
background(225);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time: "+ survivalTime,100,50);
 text("Score: "+ score, 500,50);
   if (Ground.x < 300){
      Ground.x = Ground.width/2;
   }

  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
     
    }
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    score = score+1;
  }
  
  if(obstaclesGroup.isTouching(monkey)){
    monkey.velocityX= 0;
  }
  
  
  
  
  
  
 monkey.velocityY = monkey.velocityY + 0.8
  
  
  monkey.collide(Ground);
  spawnFood();
  spawnObstacles();
  drawSprites();
}


  function spawnObstacles() {
  if(frameCount % 80 === 0) {
    var obstacle = createSprite(600,170,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -6;
    obstacle.addImage( obstaceImage);
    obstacle.scale=0.15;
    obstaclesGroup.add(obstacle);
}
}
function spawnFood(){
if(frameCount % 80 === 0){
  var food = createSprite(600,90,10,10);
  food.velocityX = - 6;
  food.addImage(bananaImage);
  food.scale= 0.1;
  FoodGroup.add(food);
  
}  
}




