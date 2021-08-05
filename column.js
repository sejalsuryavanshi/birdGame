class Column
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1.0,
          
			}
		this.x=x;
		this.y=y;
		this.r=r
        this.image=loadImage("ColumnSprite.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;	
			var angle=this.body.angle;	
			push()
			translate(stonepos.x, stonepos.y);
			// rectMode(CENTER)
			rotate(angle);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,150,100,300)
			pop()
			
	}

}






