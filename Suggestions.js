class Suggestions{
    constructor(){
        this.english=null;
        this.physics=null;
        this.chemistry=null;
        this.biology=null;
        this.maths=null;
        this.suggestion=null;
        this.aeronautImg=loadImage("science/Aeronautical-Engineering.jpg");
        this.name=null;
    }
    display(){
        clear();
        doctor.destroy();
        lawyer.destroy();
        literature.destroy();
        console.log(this.maths+"   "+this.english);
        var title=createElement('h1');
        title.html("Hello "+ this.name);
        title.position(displayWidth/2-60,100);

        if(this.maths>85){
            image(this.aeronautImg,20,height-100);
        }

        

    }
}