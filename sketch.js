    var fixedRect, movingRect;

    function setup() { 
    createCanvas(800,800);
    fixedRect = createSprite(200, 200, 50, 100);
   fixedRect.shapeColor = 'purple'; 
        fixedRect.debug = true; 
         movingRect = createSprite(100, 150, 100, 80);
        movingRect.debug = true;
         movingRect.shapeColor = 'purple';
        }
        
        function draw() 
        { background(0);

          movingRect.x = mouseX; 
          movingRect.y = mouseY;

            if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
              fixedRect.x- movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
              movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
              fixedRect.y- movingRect.y < movingRect.height/2 + fixedRect.height/2) { 

                fixedRect.shapeColor = 'orange'; 
                movingRect.shapeColor = 'orange';

              } else { fixedRect.shapeColor = 'purple';
                movingRect.shapeColor = 'purple';

              } console.log(movingRect.x - fixedRect.x); 
              drawSprites();
              }