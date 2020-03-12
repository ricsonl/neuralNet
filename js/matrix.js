class Matrix{
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        
        this.data = [];
        for(let i=0; i<rows; i++){
            let arr = [];
            for(let j=0; j<cols; j++){
                arr.push(Math.floor(Math.random()*10));
            }
            this.data.push(arr);
        }
    }

    map(func){
        this.data = this.data.map((arr, i) => {
            return arr.map((el, j) => {
                return func(el, i, j);
            });
        });

        return this;
    }

    static add(A, B){
        var res = new Matrix(B.rows, B.cols);

        res.map((elem, i, j) => {
            return A.data[i][j] + B.data[i][j];
        });

        return res;
    }

    static mult(A, B){
        var res = new Matrix(A.rows, B.cols);

        res.map((elem, i, j) => {
            let sum = 0;
            for(let k=0; k<B.rows; k++){
                let el1 = A.data[i][k];
                let el2 = B.data[k][j];
                sum += el1*el2;
            }
            return sum;
        });

        return res;
    }
}