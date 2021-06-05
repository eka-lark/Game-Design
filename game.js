
             const canvas = document.getElementById("myCanvas");
             const context = canvas.getContext("2d");
                
             const width = 400;
             const height = 600;       
             canvas.width = width;
             canvas.height = height;

             //Create a Rectangle
             context.fillStyle = "black";
             context.fillRect(0, 0, width, height);
             //create paddle top
             let paddlewidth = 50;
             let paddleheight = 10;
             context.fillStyle = "white";
             context.fillRect(175, 10, paddlewidth,paddleheight);
             // Create paddle bottom
             context.fillStyle = "white";
            context.fillRect(175, height-20, paddlewidth,paddleheight);
            //Begin path
            context.beginPath();
            context.moveTo(0,height/2);
            context.lineTo(width, height/2);
            context.setLineDash([4]);
            context.strokeStyle = "gray";
            context.stroke();
            // Create circle
            context.arc(width/2, height/2, 10, 2 * Math.PI, false);
            context.fillStyle = "white";
            context.fill();
            //Create player score
            context.font = "32px Josefin Sans";
            context.fillText(10, 20, height/2);
         


//        
//             const canvas = document.getElementById("myCanvas");
//             const context = canvas.getContext("2d");
//             context.fillRect(40,40,80,80);
//             context.moveTo(0, 0);
//             context.lineTo(200, 200);
//             context.stroke();
//          
