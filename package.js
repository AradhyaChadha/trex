class package{
    constructor(x,y,width,height){
        var options ={
            restitution:0.5
        }
    
        this.body= Bodies.rectangle(x,y,width,height,options);
        
        this.width=width;

        this.height=height;

        World.add(world,this.body);
    }
     display(){
      
         var pos=this.body.position;
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height)
         push();
         translate(pos.x, pos.y);
         //rotate(angle);
         strokeWeight(3);
         stroke('blue')
         fill('red')
         rectMode(CENTER)
         rect(0, 0, this.width, this.height);
         pop();
     }
    }