//Animation and rendering each object

    var WIDTH = 650;
    var HEIGHT = 850;

var stage = new Kinetic.Stage({
    container: 'game',
    height: HEIGHT,
    width: WIDTH
});

var layer = new Kinetic.Layer();

var rect = new Kinetic.Rect({
    x: this.WIDTH/2,
    y: this.HEIGHT/2,
    fill: 'red'
});

