function sigmoid(x){
    return (1/(1+Math.exp(-x)));
}

class NeuralNet{
    constructor(i_nodes, h_nodes, o_nodes){
        this.i_nodes = i_nodes;
        this.h_nodes = h_nodes;
        this.o_nodes = o_nodes;

        this.b_ih = new Matrix(this.h_nodes, 1);
        this.b_ih.randomize();
        this.b_ho = new Matrix(this.o_nodes, 1);
        this.b_ho.randomize();

        this.w_ih = new Matrix(this.h_nodes, this.i_nodes);
        this.w_ih.randomize();
        this.w_ho = new Matrix(this.o_nodes, this.h_nodes);
        this.w_ho.randomize();
    }

    feedForward(arr){
        //console.log(this.w_ih.shape, input.shape, this.w_ho.shape);
        let input = Matrix.arrayToMatrix(arr);

        let hidden = Matrix.mult(this.w_ih, input);
        hidden = Matrix.add(hidden, this.b_ih);
        hidden.map(sigmoid);

        let output = Matrix.mult(this.w_ho, hidden);
        output = Matrix.add(output, this.b_ho);
        output.map(sigmoid);
    }

}