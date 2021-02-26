class ground{
constructor(){
    this.ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, this.ground);
  
}




Display(){
    var groundSprite=createSprite(width/2, height-35, width,10);
	 groundSprite.shapeColor= "yellow"

}
}