class Paper {
    constructor(x,y,r){

        var opt = {
            isStatic: false,
            restitution: 0.2,
            friction: 0.5,
            density: 1.2

        }
        this.x=x;
        this.y = y;
        this.r = r;
        this.body= Bodies.circle(this.x,this.y,this.r,opt)
        World.add(world,this.body);
        this.image = loadImage("sprites/paperImg.png");
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill("white");
        image(this.image,0,0,this.r);
        pop();

    }
}