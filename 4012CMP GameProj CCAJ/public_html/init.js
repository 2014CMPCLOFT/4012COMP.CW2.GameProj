//Main loop and the instructions for the other script files
//Note that it turns out you can't get nested with Javascript without trying out
// something I don't think we'll practice in tutorials, so to be on the safe side
// we'll just include all the .js files on the HTML
    
//NB: Two animation methods, revise to decide which one we will use
function init() {
    /*Ucanvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");                 //1st Anim Method
    return setInterval(draw, 10);*/
    /*ctx = $('#Game')[0].getContext("2d");          //2nd Anim Method
    intervalId = setInterval(draw, 10);
    }*/
    
    //NEW SHINY KINECTJS ANIMATION METHOD
    var anim = new Kinetic.Animation(function(frame) {
    var time = frame.time,
        timeDiff = frame.timeDiff,
        frameRate = frame.frameRate;

    // update stuff here
    
  }, layer);

  anim.start();
  }