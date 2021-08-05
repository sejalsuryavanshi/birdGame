class Point{

    constructor(bodyA, pointB){

        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiiffness:0.04,
            length:1
        }

        this.pointB=pointB;
        this.anchor=Constraint.create(options);
        World.add(world,this.anchor);
    }

    fly(){
        this.anchor.fly=null;
    }

    display(){
   
       var pointA=this.anchor.bodyA.position;
       var  pointB=this.pointB;
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}