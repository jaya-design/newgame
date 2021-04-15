
var backgroundImg;

var bg = "snow3.png" ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(800,400);
}

function draw(){
    if(backgroundImg){
      background(backgroundImg);
    }
    // if(keyCode === 32){
    //   bg = "snow1.jpg"

    // }
}


async function getBackgroundImg(){

    var response = await fetch("http://worldclockapi.com/api/json/est/now");

    var responseJSON = await response.json();
    var datetime = responseJSON.currentD
    //hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=03 && hour<=04){
        bg = "snow2.jpg"
    }
    else if(hour>=04 && hour<=05){
        bg = "snow3.jpg"
    }
    else if(hour>=05 && hour==06){
        bg = "snow1.jpg"
    }
    else{
      bg = "snow4.webp"
    }

    backgroundImg = loadImage(bg);

}
