class Gun{
   
        constructor(x, y, height, angle) {
          var options = {
              isStatic: true
          }
          this.body = Bodies.rectangle(x, y, 20, height,  options);
          this.width = 20;
          this.height = height;
          Matter.Body.setAngle(this.body, angle);
          this.body.depth = 1;
          
          World.add(world, this.body);

        }
        display(){
          var pos =this.body.position;
          var angle = this.body.angle;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          rectMode(CENTER);
          fill("brown");
          //stroke("blue");
          //strokeWeight(4);
          
          rect(0, 0, this.width, this.height);
          pop();
        }
}