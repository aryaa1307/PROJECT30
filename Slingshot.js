class Slingshot
{
   constructor(bodyA,pointB)
   {
      var options=
      {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:1
      }
     //this.poinB=pointB 
     this.sling= Constraint.create(options);
     World.add (world,this.sling);
   }

   display()
   {
      if(this.sling.bodyA)
      {
        var pointA= this.sling.bodyA.position;
        var pointB= this.sling.pointB
        strokeWeight (4)
        stroke("black")
        line(pointA.x,pointA.y,pointB.x,pointB.y)  
      }
   }

   fly()
   {
      this.sling.bodyA=null
   }

   play(body)
   {
     this.sling.bodyA=body  
   }

}