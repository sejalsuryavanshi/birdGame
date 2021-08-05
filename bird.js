class Bird
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:1.0,
			friction:1.0,
          
			}

	
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("BirdEnemyFlapSprite.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
		this.Visiblity = 255;

	}
	display()
	{
			
		
			if(this.body.speed < 3){
				var stonepos=this.body.position;
			var angle= this.body.angle;		
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			 rotate(angle)
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,150,100,100)
			pop()
			   }
			   else{
				 World.remove(world, this.body);
				 push();
				 this.Visiblity = this.Visiblity - 5;
				 tint(255,this.Visiblity);
				 image(this.image, stonepos.x, stonepos.y, 50, 50);
				 pop();
			   }
			  
	}

}