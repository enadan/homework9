var genearte = require("./generateHTML.js");
var fs = require('fs');
var pdf = require('html-pdf');
var inquirer = require("inquirer");

const questions = [
    {
        type: "list",
        message: "Which background color do you like?",
        name: "color",
        choices: [
          "green", 
          "blue", 
          "pink", 
          "red",
        ]
    },
];

function writeToFile(fileName, data) {

    var html = genearte.generateHTML(data);

    var options = {  };
    // var options = { height: "15in", width: "14in"};

    pdf.create(html, options).toFile(fileName, function(err, res) {
        if (err) return console.log(err);
        console.log(res);
    });
}

function init() {
    inquirer.prompt(questions).then(answers => {
        writeToFile("output.pdf", answers);
    });
}

init();


