//objeto estrella
function Star(){
    //coordenadas random
    this.x=random(-width,width);
    this.y=random(-height,height);
    this.z=random(width);
    
    this.Update = ()=>{
        this.z-=5;
        if(this.z<1){
            this.x=random(-width,width);
            this.y=random(-height,height);
            this.z=random(width);
           }
    },
    this.Show = ()=>{
        
        fill(255);
        noStroke();
        //3D
        this.sx=map(this.x/this.z,0,1,0,width);
        this.sy=map(this.y/this.z,0,1,0,height);
        //Tamaño de la estrella
        this.r=map(this.z,0,width,16,0);
        ellipse(this.sx,this.sy,this.r,this.r);
    }
}