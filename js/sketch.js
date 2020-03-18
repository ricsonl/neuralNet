function setup(){
    createCanvas(550,550);
    background(0);

    var nn = new NeuralNet(3, 10, 2);
    let arr = [1, 3, 4];
    let lab = [1, 0];
    nn.train(arr, lab);

}

function draw(){
    
}