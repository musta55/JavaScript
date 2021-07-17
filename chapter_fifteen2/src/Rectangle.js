
import Shape from "./Shape"

class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color)
        this.width = width
        this.height = height
    }

    calculate() {
        return this.width * this.height

    }
    //Method overriding
    draw() {
        console.log('Drawing a rectangle ....')
    }

}

export default Rectangle