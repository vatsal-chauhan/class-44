var name,subject;
var form,suggest;
var docterImg,lawyerImg,literatureImg,doctor,lawter,literature;

function preload(){
  doctorImg=loadImage("science/doctor.jpg");
  lawyerImg=loadImage("commerce/lawyer.png");
  literatureImg=loadImage("humanities/lit.jpg");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-100);
  doctor=createSprite(width-850,height/2+200,10,10);
  doctor.addImage("doctor",doctorImg);
  doctor.scale=0.2;
  lawyer=createSprite(width-150,height/2+200,10,10);
  lawyer.addImage("lawyer",lawyerImg);
  lawyer.scale =0.5;
  literature=createSprite(width-550,height/2+200,10,10);
  literature.addImage("lit",literatureImg);
  literature.scale=0.7;
  form=new Form();
  form.display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}