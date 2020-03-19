function sigmoid(x) {
    return (1 / (1 + Math.exp(-x)));
}

function setup(){
    createCanvas(550,550);
    background(0);

    var nn = new NeuralNet(2, 3, 1);
    
    //XOR problem
    dataset = {
        inputs: [
            [1, 1],
            [1, 0],
            [0, 1],
            [0, 0]
        ],
        outputs: [
            [0],
            [1],
            [1],
            [0]
        ]
    }

}

function draw(){
    
}