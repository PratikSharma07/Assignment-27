class Platform {
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(200,100,100,20,options);
      this.width = 100;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(0);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };