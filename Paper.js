class Paper {

    constructor(x,y,radius,options){
        var options = {         
            isStatic: false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
        }   
        display(){
            var pos =this.body.position;
            fill("purple");
            circle(pos.x, pos.y, this.radius);
          }
    
}