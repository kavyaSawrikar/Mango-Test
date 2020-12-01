class Boy extends BaseClass{
  constructor(x,y){
    var options = {
      'isStatic':true,
    }
    super(x,y,200,200);
    this.image = loadImage("Plucking mangoes/boy.png");
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
  }
}