class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.ground=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.ground);
    }
display(){
var pos=this.ground.position;
fill("grey");
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);
//console.log("hio");
}
}
