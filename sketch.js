var path,boy, bomb,bomb2,coin,drink,power,skull,leftBoundary,rightBoundary;
var pathImg,boyImg,bombImg,coinImg,drinkImg,powerImg,skullImg;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  drinkImg = loadImage("energyDrink.png");
  powerImg = loadAnimation("power.png");
  skullImg = loadImage("skull.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,240,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);









leftBoundary=createSprite(0,0,100,800);

 leftBoundary.invisible = false;
 leftBoundary.visible = true;
 leftBoundary.invisible = true;
 leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,900);
rightBoundary.visible = false;

}

function draw() {

  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  var select_sprites = Math.random(random(1,2));
  var select_sprites = Math.round(random(1,2));
  


  if (frameCount % 90 == 0) {
    if (select_sprites == 1) {
      createCoin();
    }
     else if (select_sprites == 2) {
      createDrink();
    }
    else {
      createBomb(); 
   }
  }

  if (frameCount % 120 == 0) {
    if (select_sprites == 1) {
      createBomb();
   } 
   else if (select_sprites == 2) {
     createDrink();
   }
   else {
     createCoin();
   }
  }

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){
  path.y = height/2;
}






  drawSprites();

}


  function createCoin() {
    coin = createSprite(random(50, 350),40, 10, 10);
    coin.scale = 0.3 ;
    coin.addImage(coinImg);
    coin.velocityY = 2;
    coin.lifetime = 150;
    coin.depth = boy.depth;
    boy.depth = boy.depth;
  }

  function createDrink() {
    drink = createSprite(random(50,350),40,10,10)
    drink.scale = 0.05;
    drink.addImage(drinkImg);
    drink.velocityY = 2;
  
    drink.lifetime = 150;
    drink.depth = boy.depth;
    boy.depth = boy.depth;
  }

  function createBomb() {
    bomb = createSprite(random(50,350),40,10,10);
    bomb.scale = 0.05;
    bomb.addImage(bombImg);
    bomb.velocityY = 2;
    bomb.lifetime = 150;
    bomb.depth = boy.depth;
    boy.depth = boy.depth;
    
  }