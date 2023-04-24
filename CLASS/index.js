console.log("Classes");

class rectangle
{
    constructor(_height, _width, _color)
    {
        console.log("The rectangle is being created ");
        this.height = _height;
        this.lengths = _width;
        this.color = _color;
    }

    size ()
    {
        return `The height is ${this.height} the length is ${this.lengths} and the color is ${this.color}`;
    }   

    getArea()
    {
        return `The area is : ${this.height * this.lengths}`;
    }

}

let myrectangle = new rectangle(100,200,"Yellow");

console.log(myrectangle.size());

console.log(myrectangle);
console.log(myrectangle.getArea());


// Getters and Setters


class mySquare
{
    constructor(_width)
    {
       this.height = _width;
       this.width = _width;

    }

    set area (area)
    {
        this.width = area;
    }

    get currentWidth()
    {
        return this.width;
    }

}

const currentSquare = new mySquare();


currentSquare.area = 15;
console.log(`current element :${currentSquare.currentWidth}`);


//  Static methode Class


class triangle
{
    constructor(_with)
    {
        this.width = _with;
        this.height = _with;
    }

    square( _width)
    {
        return _width * _width;
    }

}

const newForm = new triangle(45);
// console.log(`Number total : ${triangle.square(45)}`);

// console.log(`The new form data total :${triangle.square(20)}`);

console.log(`The total is : ${newForm.square(78)}`);


