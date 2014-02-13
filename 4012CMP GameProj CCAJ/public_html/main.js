//Main loop, variables and the instructions for the other script files
//Note that it turns out you can't get nested with Javascript without trying out
// something I don't think we'll practice in tutorials, so to be on the safe side
// we'll just include all the .js files on the HTML
    
    //var canvas; //Not used?
    var ctx;
    var WIDTH = 400;
    var HEIGHT = 300;
    var intervalId = 0;


//NB: Two animation methods, revise to decide which one we will use
function init() {
    /*Ucanvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");                 //1st Anim Method
    return setInterval(draw, 10);*/
    ctx = $('#Game')[0].getContext("2d");          //2nd Anim Method
    intervalId = setInterval(draw, 10);
    }
    
//Mouse integration

    var canvasMinX = 0;
    var canvasMaxX = 0;
    
    function init_mouse() {
    canvasMinX = $("#Game").offset().left;
    canvasMaxX = canvasMinX + WIDTH;
    }