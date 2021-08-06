var noseX=0;
var noseY=0;
function preload()
{
    clown_nose= loadImage('https://i.postimg.cc/g08mcrZ2/istockphoto-851634552-170667a.png');
}

function setup()
{
    canvas = createCanvas(300, 220);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 220);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Posenet is Initialized.");
}

function gotPoses(results){
    if(results.length>0)
    {
        console.log(results);
        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        noseX=  results[0].pose.nose.x-10;
        noseY=  results[0].pose.nose.y-10;
    }
}
function draw()
{
    image(video, 0, 0, 300, 220);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('clown_nose_filter.jpg')
}