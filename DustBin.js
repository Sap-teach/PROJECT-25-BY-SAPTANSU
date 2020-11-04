class DustBin{
    constructor(x,y){
        var options={
            isStatic:true
        }
        
        this.x=x;
        this.y=y;
        this.dustbinWidth=200;
        this.dustbinHeight=213;
        this.wallThick=20;
        
        this.image=loadImage("dustbingreen.png");
        this.bottomMargin=Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThick,options)
        this.leftMargin=Bodies.rectangle(this.x-85,this.y-48,this.wallThick,this.dustbinWidth+20,options)
        this.rightMargin=Bodies.rectangle(this.x+73,this.y-48,this.wallThick,this.dustbinWidth+20,options)
       
        this.width=width;
        this.height=height;
        World.add(world,this.bottomMargin);
        World.add(world,this.leftMargin);
        World.add(world,this.rightMargin);
    }
    display(){
        var posBottom=this.bottomMargin.position;
		var posLeft=this.bottomMargin.position;
        var posRight=this.rightMargin.position;
        
        //for right body
            push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()
            
            //for left body
            push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			rotate(this.angle)
			//
            pop()
            
        //for bottom body
            push()
			translate(posBottom.x, posBottom.y+10);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.dustbinHeight/2,this.dustbinWidth, this.dustbinHeight)
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
    }
}