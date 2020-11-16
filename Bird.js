class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
    this.Visibility = 255;
  }

  display() {
   

    super.display();

    if(gameState==="onSling"){
      Matter.Body.setAngle(this.body,0);
    }
    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    //vanish the smoke after sometime
    for(var i=0; i<this.trajectory.length; i++){
      push();
      this.Visibility = this.Visibility - 1;
      tint(255,this.Visibility);
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      pop();
    }
  }
}
