class Chain{
    constructor(bodyA, pointB){
        
        //this.offsetX=offsetX
        //this.offsetY=offsetY
        
        var options = {
            //JSON format of storing data
            'bodyA': bodyA,
            'pointB': pointB,
            'length': 4, // distance between bodies
            'stiffness': 0.0004, // it will be of elastic material
        
           //'pointB':{x:this.offsetX, y:this.offsetY}
           
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);

    }
    fly(){
        this.sling.bodyA = null;
        //	Matter.Body.applyForce(this.sling.bodyA,this.sling.bodyA.position,{x:3000,y:0});
    
    }
    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

        display(){
      
        var posA = this.sling.bodyA.position;
        var posB = this.sling.pointB;
        if(this.sling.bodyA){
        push();
        stroke("grey");
        strokeWeight(4);
        // line instruction needs x, y coordinate of starting point and the end point
        line(posA.x, posA.y, posB.x, posB.y);
        pop();
        }
    }


}