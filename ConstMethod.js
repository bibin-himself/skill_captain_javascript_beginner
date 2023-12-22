

function rectangle(height, width){
    this.width = width;
    this.height = height;

    this.calculateArea = function(){
        console.log(this.width * this.height);
    }
}

let rec1 = new rectangle(10, 15);

rec1.calculateArea();