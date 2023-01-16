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
}
]

var totalQuestions = questions.length;
console.log(totalQuestions);