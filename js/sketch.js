function setup(){
    createCanvas(550,550);
    background(0);

    var mat1 = new Matrix(3,2);
    var mat2 = new Matrix(2,3);
    
    console.log(mat1, mat2, Matrix.mult(mat1, mat2));
}

function draw(){
    
}