function setup(){
    createCanvas(550,550);
    background(0);

    /*var nn = new NeuralNet(5, 10, 2);
    nn.feedForward([1, 3, 4, 2, 6]);*/

    var m1 = new Matrix(5,2);
    var m2 = new Matrix(5,2);
    m1.randomize();
    m2.randomize();

    m1.print();
    m2.print();

    var r = Matrix.sub(m1,m2);
    r.print();

}

function draw(){
    
}