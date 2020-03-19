function sigmoid(x){
    return (1/(1+Math.exp(-x)));
}

function d_sigmoid(x){
    return (x * (1-x));
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

        this.alpha = 0.4;
    }

    train(arr, target){
        
        //FEEDFORWARD
        
        //input -> hidden
        let input = Matrix.arrayToMatrix(arr);
        let hidden = Matrix.mult(this.w_ih, input);
        hidden = Matrix.add(hidden, this.b_ih);
        hidden.map(sigmoid);

        //hidden -> output
        let output = Matrix.mult(this.w_ho, hidden);
        output = Matrix.add(output, this.b_ho);
        output.map(sigmoid);


        //BACKPROPAGATION

        //output -> hidden
        let label = Matrix.arrayToMatrix(target);

        let out_error = Matrix.sub(label, output);
        let d_out = Matrix.map(output, d_sigmoid);

        let gradient_O = Matrix.hadamard(out_error, d_out);
        gradient_O = Matrix.esc_mult(gradient_O, this.alpha);

        this.b_ho = Matrix.add(this.b_ho, gradient_O);
        
        let hidden_T = Matrix.transpose(hidden);
        let w_ho_deltas = Matrix.mult(gradient_O, hidden_T);
        
        this.w_ho = Matrix.add(this.w_ho, w_ho_deltas);
        
        //hidden -> input
        let w_ho_T = Matrix.transpose(this.w_ho);

        let hid_error = Matrix.mult(w_ho_T, out_error);
        let d_hid = Matrix.map(hidden, d_sigmoid);

        let gradient_H = Matrix.hadamard(hid_error, d_hid);
        gradient_H = Matrix.esc_mult(gradient_H, this.alpha);

        this.b_ih = Matrix.add(this.b_ih, gradient_H);

        let input_T = Matrix.transpose(input);
        let w_ih_deltas = Matrix.mult(gradient_H, input_T);
        this.w_ih = Matrix.add(this.w_ih, w_ih_deltas);
        
        return output;
    }

    predict(arr){
        //input -> hidden
        let input = Matrix.arrayToMatrix(arr);
        let hidden = Matrix.mult(this.w_ih, input);
        hidden = Matrix.add(hidden, this.b_ih);
        hidden.map(sigmoid);

        //hidden -> output
        let output = Matrix.mult(this.w_ho, hidden);
        output = Matrix.add(output, this.b_ho);
        output.map(sigmoid);
        output = Matrix.matrixToArray(output);
        
        return output;
    }

}