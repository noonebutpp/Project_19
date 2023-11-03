var ninja;ninjaImage
var bomb;bombImg
var money;moneyImg
var tower;towerImg
var coins
var  moneyGroup;bombGroup

function preload(){
    towerImg = loadImage("tower.png");
    ninjaImage = loadImage("ninja.jpeg");
    bombImg = loadImage("bomb.jpeg");
    moneyImg = loadImage("money.jpeg");
}

function setup() {
    createCanvas(400,600);

    tower = createSprite(200,100);
    tower.addImage("tower",towerImg);
    tower.velocityY= 6;
    tower.scale=1

    ninja = createSprite(130,450);
    ninja.addImage("ninja",ninjaImage);
    ninja.scale=0.1;

    moneyGroup = new Group();
    bombGroup = new Group();


}

function draw() {

    if(tower.y>400){
        tower.y = 300;
    }
    if(keyDown(UP_ARROW)){
        ninja.velocityY=-2
    }
    if(keyDown(RIGHT_ARROW)){
        ninja.velocityX=2
    }
    if(keyDown(LEFT_ARROW)){
        ninja.velocityX=-2
    }
    ninja.velocityY = ninja.velocityY +0.05

    if(moneyGroup.isTouching(ninja)){
        money.destroy();
    }
    if(bombGroup.isTouching(ninja)){
        ninja.destroy();
        tower.velocityY=0;
        bombGroup.velocityY=0;
        moneyGroup.velocityY=0;
    }

    
 spawnmoney();
 spawnbomb();
    
 drawSprites();

}

function spawnbomb(){
    if(frameCount % 100 === 0){
    bomb = createSprite(Math.round(random(0,400),30));
    bomb.addImage("bomb",bombImg);
    bomb.scale=0.02;
    bomb.velocityY=2;
    bombGroup.add(bomb);
    }

}

function spawnmoney(){
    if(frameCount % 100 === 0){
    money = createSprite(Math.round(random(0,400),10));
    money.addImage("money",moneyImg);
    money.scale=0.03;
    money.velocityY = 2;
    moneyGroup.add(money);
    }
}