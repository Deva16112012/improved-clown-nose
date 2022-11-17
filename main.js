function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poses=ml5.poseNet(video,modelloded);
    poses.on('pose',kp);
}
nosex=0;
nosey=0;
function preload(){
    x=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function draw(){
    image(video,0,0,300,300);
    image(x,nosex,nosey,30,30);
}
function modelloded(){
    console.log("pose net is loded");
}
function kp(r){
    if(r.length>0){
        console.log(r);
        nosex=r[0].pose.nose.x-15;
        nosey=r[0].pose.nose.y-15;
    }
}
function take_snapshot(){
    save('clown_nose.png');
}