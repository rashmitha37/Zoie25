class Dustbin {
    constructor(){

        var opt = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
      
        this.binL = Bodies.rectangle(820,510,15,200,opt)
        this.binR = Bodies.rectangle(1000,510,15,200,opt)
        this.binB = Bodies.rectangle(910,620,190,15,opt)
        //this.x=x;
        //this.y = y;
        //this.width = w;
       //this.height = h;

        World.add(world, this.binL);
        World.add(world, this.binR);
        World.add(world, this.binB);

        this.image = loadImage("sprites/dustbin.png")
    }

    display(){
        imageMode(CENTER);
        strokeWeight(3);
        fill("red");
        //image(this.image,825,460);
       image(this.image,910,514,190,220)
     // rectMode(CENTER)
        //rect(820,510,15,200);
       //rect(1000,510,15,200)
        //rect(910,620,190,15);


    }
    
}