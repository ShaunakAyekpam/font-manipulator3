difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);
    video.position(300,190)

    canvas = createCanvas(550,550);
    canvas.position(900,190)

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes)

}

function draw()
{
    background("#87ceeb");
    textSize(difference);
    fill("#0747a1");
    text("Nakul",50,400);
}

function modelLoaded()
{
    console.log("model is loaded");
}

function gotposes(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        document.getElementById("fontsize").innerHTML = "Font Size: " + difference + "px";
    }
}