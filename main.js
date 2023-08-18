song_1 = "";
song_2 = "";

function preload(){
    song_1 = loadSound("Harry-Potter-Theme.mp3");
    song_2 = loadSound("Hymn-for-weekend.mp3");
}
function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    canvas.position(360, 290);

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 530);
}
function play(){
   song_1.play();
   song_2.play();
}
