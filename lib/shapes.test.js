const { Circle, Triangle, Square } = require("./shapes.js");

// Circle shape

describe("Circle test", () => {
    it("test for a circle with a blue background", () => {
        const circle = new Circle();
        circle.setColor("blue");
        expect(circle.render()).toEqual('<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="blue" />');
    })
});

// Triangle shape

describe("Triangle", () => {
    it("test for a triangle with a purple background", () => {
        const triangle = new Triangle();
        triangle.setColor("purple");
        expect(triangle.render()).toEqual('<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="purple" />');
    })
});

// Square shape

describe("Square", () => {
    it("test for a square with a red background", () => {
        const square = new Square();
        square.setColor("red");
        expect(square.render()).toEqual('<rect x=50 height="200" width="200" fill="red" />');
    })
});