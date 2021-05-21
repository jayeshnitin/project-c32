const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    {
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
   

}

async function getBackgroundImg(){

    var response = fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata"); //ganda sa json
    var responseJson = await response.json(); //.json() function beautifies the response received and makes a clear json out of it.
    console.log(responseJson);

    var datetime= responseJson.datetime; //.datetime is a function to extract datetime 
    console.log(datetime);//datetime would be a string

    var hour = datetime.slice(11,13);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=5 && hour <=6)
    {

        bg="sunrise1.png";
    }

    if(hour>=6 && hour <=7)
    {
        //day
        bg="sunrise2.png";
    }
    
     if(hour>=7 && hour <=9)
    {
        //day
        bg="sunrise3.png";
    }

    if(hour>=9 && hour <=11)
    {
        //day
        bg="sunrise4.png";
    }

    if(hour>=11 && hour <=13)
    {
        //day
        bg="sunrise5.png";
    }

    if(hour>=13 && hour <=16)
    {
        //day
        bg="sunrise6.png";
    }

    if(hour>=16 && hour <=18)
    {
        //day
        bg="sunrise7.png";
    }

    if(hour>=18 && hour <=20)
    {
        //day
        bg="sunrise8.png";
    }



    //load the image in backgroundImg variable here

    backgroundImg= loadImage(bg);

}
