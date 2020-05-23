

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

var ground;
var tank1, tank2;
var gun;

function setup() {
   
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,400);
    ground = new Ground(600,height,1800,20);
    
    tank1 = new tanker(200,370,150,40);
    tank2 = new tanker(200,330,150,40)
    

    bird = new CanonBall(600,200);
    gun = new Gun(260,260,120,20,PI/7);
    gun.depth = 1;

}

function draw() {
    background(0);
    Engine.update(engine)

    ground.display();
    tank1.display();
    bird.display();
    tank2.display();
    arc(200, 320, 150, 150, PI, TWO_PI);
    gun.display();
}


function keyReleased() {
    
}