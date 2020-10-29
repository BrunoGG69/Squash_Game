var ball, paddle;
var ballImage, paddleImage;
var edges;

function preload() {
  ballImage = loadImage("ball.png");

  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);

  var rand = Math.round(random(1, 2));
  var rand1 = Math.round(random(3, 4));

  ball = createSprite(20, 200, 10, 10);
  ball.addImage("ballImage", ballImage);

  ball.velocityX = rand;
  ball.velocityY = rand1;

  ball.y = random(80, 180);

  ball.bounceOff(paddle);

  paddle = createSprite(380, 200, 10, 70);
  paddle.addImage("paddleImage", paddleImage);


}

function draw() {
  background(205, 153, 0);

  edges = createEdgeSprites();

  movement();
  randomVelocity();

  //console.log(edges[1]);

  if (ball.isTouching(paddle) || ball.isTouching(edges[0]) || ball.isTouching(edges[2]) || ball.isTouching(edges[3])) {
    ball.bounceOff(paddle);
    ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
  }

  if (keyWentDown(UP_ARROW)) {

    paddle.velocityY = -8;
  }

  if (keyWentDown(DOWN_ARROW)) {
    paddle.velocityY = 8;
  }

  if (keyWentUp(UP_ARROW)) {

    paddle.velocityY = 0;
  }

  if (keyWentUp(DOWN_ARROW)) {
    paddle.velocityY = 0;
  }

drawSprites();

}


