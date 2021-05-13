class Snow {
    constructor(x,y,r) {
        var options ={}

        this.body = Bodies.circle(x,y,r);
        this.r = r;
        this.image = loadImage("snow5.webp");
        World.add(world,this.body);

    }

    changePosition(){
        if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,1300),y:random(0,50)});
        }
        }

    display(){
        push();

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

      pop();
    }

}