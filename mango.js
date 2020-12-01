class Mango {
  constructor(x,y,r){
    var options = {
      'isStatic':true,
        'restitution':0,
        'friction':1.0
    }
    this.x = x
    this.y = y
    this.r = r

    this.image = loadImage("Plucking mangoes/mango.png");
    this.body = Bodies.circle(this.x,this.y,this.r,options);
    this.width = this.r;
    this.height = this.r;
    World.add(world,this.body);
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    //super.display();
    var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
  }
}