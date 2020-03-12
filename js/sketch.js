function setup(){
    createCanvas(550,550);
    background(0);

    var nn = new NeuralNet(5, 10, 2);
    nn.feedForward([1, 3, 4, 2, 6]);
}

function draw(){
    
}