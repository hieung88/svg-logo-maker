// packages

const inquirer = require("inquirer");
const fs = require("fs");
const { Circle,Triangle,Square }  = require("./lib/shapes.js");

// questions

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters:",
        // validate function to make sure user is entering at least 1 and no more than 3 characters
        validate: function (value) {
            if (value.length > 0 && value.length < 4)
                return true
            else {
                return `Please enter no more than 3 characters and no less than 1 character!`
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Please choose text's color (keyword or OR a hexadecimal number)."
    },
    {
        type: "list",
        name: "shape",
        message: "Please choose logo's shape.",
        choices: ["Circle", "Triangle", "Square"]

    },
    {
        type: "input",
        name: "shapeColor",
        message: "Please choose shape's color (keyword or OR a hexadecimal number).",
    },
];

// write svg file function 
 
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

// initializes the application function

function init() {
    inquirer.prompt(questions)
        .then(({shape,text,textColor,shapeColor}) => {
            if (shape === 'Circle') {
                svgShape = new Circle(shapeColor, text, textColor);
            } else if (shape === 'Triangle') {
                svgShape = new Triangle(shapeColor, text, textColor);
            } else {
                svgShape = new Square(shapeColor, text, textColor);
            }

        writeToFile("logo.svg", svgShape.renderSVG())
    })
};


init();


    