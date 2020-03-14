class Pendulum{
  constructor() {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(280,180,50,50,options);
 
      this.image = loadImage("sprites/ellipse.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0, 0, 100,100);
      pop();
    }
}