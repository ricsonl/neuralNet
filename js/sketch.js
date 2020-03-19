var train = true;
var nn;

function setup(){
    createCanvas(550,550);
    background(0);

    nn = new NeuralNet(2, 3, 1);
    
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
    if(train){
        for(var i=0; i<10000; i++){
            var index = floor(random(4));
            out = nn.train(dataset.inputs[index], dataset.outputs[index]);
            if(i==0 || i%500 == 0){
                console.log("output: ", Matrix.matrixToArray(out));
                console.log("expected: ", dataset.outputs[index]);
            }
        }
        if (nn.predict([0, 0])[0] < 0.04 && nn.predict([1, 0])[0] > 0.98) {
            train = false;
        }
    }
}