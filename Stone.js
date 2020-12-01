class Stone {
  constructor(x,y,r){
    var options = {
      //'isStatic':true,
        'restitution':0,
        'friction':1.0
    }
    

    this.image = loadImage("Plucking mangoes/stone.png");
    this.body = Bodies.circle(x,y,r,options);
    this.x = x
    this.y = y
    this.r = r
   
    World.add(world,this.body);
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    console.log(this.body.position.y);
    var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, this.body.position.x, this.body.position.y, this.r, this.r);
      pop();
  }
}