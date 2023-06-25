function setup(){
    canvas = createCanvas(640,640); 
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 640);
    tint(tint_color)
}

function algo2() {
    save('elpepe.png');
}

function algo1() {
    tint_color = document.getElementById("algo").value;
}