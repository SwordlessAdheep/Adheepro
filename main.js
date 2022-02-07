function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin= loadSound("coin.wav");
	mario_die= loadSound("mariodie.wav")
	mario_avengersendgame= loadSound("gameover.wav");
	mario_whoop= loadSound("kick.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas');
	video= createCapture(VIDEO);
	video.size(800,400)
	video.parent('game_console');
poseNet= ml5.poseNet(video, modelloaded);
poseNet.on('pose', gotPoses);

}

function draw() {
	game()
}

function modelloaded() {

console.log("model 1234567890% loaded");

}

function gotPoses(results) {

if (results.length>0) {

console.log(results);
noseX= results[0].pose.nose.x;
noseY= results[0].pose.nose.y;

}



}



