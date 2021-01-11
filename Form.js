class Form {
    constructor(){
        this.name= createInput("Name");
        this.standard=createInput("Class");
        this.english=createInput("English marks");
        this.physics=createInput("Physics marks");
        this.chemistry=createInput("Chemistry marks");
        this.biology=createInput("Biology marks");
        this.maths=createInput("Maths marks");
        this.button=createButton("Submit");
    }
    display(){
        var title=createElement('h1');
        title.html("Career Guidance");
        title.position(displayWidth/2-60,10);

        this.name.position(displayWidth/2-30,80);
        this.standard.position(displayWidth/2-30,120);
        this.english.position(displayWidth/2-30,160);
        this.physics.position(displayWidth/2-220,200);
        this.chemistry.position(displayWidth/2-30,200);
        this.biology.position(displayWidth/2+160,200);
        this.maths.position(displayWidth/2-30,240);
        this.button.position(displayWidth/2,300);

        this.button.mousePressed(()=>{
            this.maths.hide();
            this.name.hide();
            this.standard.hide();
            this.english.hide();
            this.physics.hide();
            this.chemistry.hide();
            this.biology.hide();
            this.button.hide();
            suggest=new Suggestions();
            suggest.name=this.name.value();
            suggest.maths=this.maths.value();
            suggest.english=this.english.value();
            suggest.physics=this.physics.value();
            suggest.chemistry=this.chemistry.value();
            suggest.biology=this.biology.value();
            doctor.destroy();
            lawyer.destroy();
            literature.destroy();
            suggest.display();
        })

    }
}