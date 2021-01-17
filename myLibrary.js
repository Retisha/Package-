function myBounceOff(){
    if(fixedSprite.x - movingSprite.x < 50 
      && movingSprite.x - fixedSprite.x < 50){
        fixedSprite.velocityX = fixedSprite.velocityX * -1;
        movingSprite.velocityX = movingSprite.velocityX * -1;
      }
      if( fixedSprite.y - movingSprite.y < 50 
      && movingSprite.y - fixedSprite.y < 50){
        fixedSprite.velocityY = fixedSprite.velocityY * -1;
        movingSprite.velocityY = movingSprite.velocityY * -1;
    }
   
  }
  function myIsTouching(ob1,ob2){
    if(ob1.x - ob2.x < 50 
      && ob2.x - ob1.x < 50
      && ob1.y - ob2.y < 50 
      && ob2.y - ob1.y < 50){
        ob1.shapeColor = "red"
    ob2.shapeColor = "red"
      }
      else{
        ob1.shapeColor = "yellow"
    ob2.shapeColor = "yellow"
      }
     
    
   
  }
  function multiplication(num1,num2){
    return num1 * num2;
  }