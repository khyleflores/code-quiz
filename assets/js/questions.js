//Questions that user will answer
var questions = [{
    id: 0,
    question: "_____ represents a logical entity and can have only two values : true or false.",
    options: [{ text: "String", isCorrect: false },
        { text: "Integer", isCorrect: false },
        { text: "Boolean", isCorrect: true },
        { text: "Array", isCorrect: false }
    ]
},
{
    id: 1,
    question: "_____ is the default behaviour of javascript where all the variable and function declarations are moved on top.",
    options: [{ text: "Hoisting", isCorrect: true},
        { text: "Debugging", isCorrect: false },
        { text: "Declaring", isCorrect: false },
        { text: "Listing", isCorrect: false }
    ]

},
{
    id: 2,
    question: "Javascript is a/an  _______ language?",
    options: [{ text: "Object-Oriented", isCorrect: true},
        { text: "Object-Based", isCorrect: false },
        { text: "Procedural", isCorrect: false },
        { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 3,
    question: "Which of the following keywords is used to define a variable in Javascript?",
    options: [{ text: "var", isCorrect: false},
        { text: "let", isCorrect: false },
        { text: "Both 1 and 2", isCorrect: true },
        { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 4,
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    options: [{ text: "document.write()", isCorrect: false},
        { text: "console.log()", isCorrect: false },
        { text: "window.alert()", isCorrect: false },
        { text: "All of the above", isCorrect: true }
    ]
},
{
    id: 5,
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    options: [{ text: "parse()", isCorrect: false},
        { text: "convert()", isCorrect: false},
        { text: "stringify()", isCorrect: true},
        { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 6,
    question: "How to stop an interval timer in Javascript?",
    options: [{ text: "clearInterval", isCorrect: true},
        { text: "clearTimer", isCorrect: false},
        { text: "intervalOrder", isCorrect: false},
        { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 7,
    question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
    options: [{ text: "Throws an error", isCorrect: false},
        { text: "Ignore the statements", isCorrect: true},
        { text: "Gives a warning", isCorrect: false},
        { text: "None of the above", isCorrect: false }
    ]
},
{
    id: 8,
    question: "How can a datatype be declared to be a constant type?",
    options: [{ text: "const", isCorrect: true},
        { text: "var", isCorrect: false},
        { text: "let", isCorrect: false},
        { text: "constant", isCorrect: false }
    ]
},
{
    id: 9,
    question: "What keyword is used to check whether a given property is valid or not?",
    options: [{ text: "in", isCorrect: true},
        { text: "is in", isCorrect: false},
        { text: "exists", isCorrect: false},
        { text: "lies", isCorrect: false }
    ]
}
]

