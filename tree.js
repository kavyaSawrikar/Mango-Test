class Tree extends BaseClass{
  constructor(x,y){
    
    super(x,y,450,450);
    this.image = loadImage("Plucking mangoes/tree.png");
  }
  display(){
    /*this.body.position.x = mouseX;
    this.body.position.y = mouseY;*/
    super.display();
  }
}