//Media & Communication - Prior Knowledge
// window.onload = function () {
//     var questionArea = document.getElementsByClassName('questions')[0],
//         answerArea   = document.getElementsByClassName('answers')[0],
//         checker      = document.getElementsByClassName('checker')[0],
//         current      = 0,
//         // An object that holds all the questions + possible answers.
//         // In the array --> last digit gives the right answer position
//         allQuestions = {
//             "What is the difference between mass communication and interpersonal communication?" : ["Mass communication involves communication between individuals, while interpersonal communication involves communication to a large audience", "Mass communication involves communication to a large audience, while interpersonal communication involves communication between individuals", "Mass communication and interpersonal communication are the same thing", 1],
//
//             'What is the importance of media literacy?' : ['It allows individuals to analyze and evaluate the messages presented through media channels', 'It helps individuals create content for various media platforms' , 'It helps individuals gain followers on social media', 0],
//
//             'What is the purpose of public relations? ' : ['To manage the communication between an organization and its publics', 'To create advertisements for products and services', 'To produce and direct content for film and television', 0]
//         };
//     function loadQuestion(curr) {
//         // This function loads all the question into the questionArea
//         // It grabs the current question based on the 'current'-variable
//
//         var question = Object.keys(allQuestions)[curr];
//
//         questionArea.innerHTML = '';
//         questionArea.innerHTML = question;
//     }
//     function loadAnswers(curr) {
//         // This function loads all the possible answers of the given question
//         // It grabs the needed answer-array with the help of the current-variable
//         // Every answer is added with an 'onclick'-function
//
//         var answers = allQuestions[Object.keys(allQuestions)[curr]];
//
//         answerArea.innerHTML = '';
//
//         for (var i = 0; i < answers.length -1; i += 1) {
//             var createDiv = document.createElement('div'),
//                 text = document.createTextNode(answers[i]);
//
//             createDiv.appendChild(text);
//             createDiv.addEventListener("click", checkAnswer(i, answers));
//
//
//             answerArea.appendChild(createDiv);
//         }
//     }
//     function checkAnswer(i, arr) {
//         // This is the function that will run, when clicked on one of the answers
//         // Check if givenAnswer is same as the correct one
//         // After this, check if it's the last question:
//         // If it is: empty the answerArea and let them know it's done.
//
//         return function () {
//             var givenAnswer = i,
//                 correctAnswer = arr[arr.length-1];
//
//             if (givenAnswer === correctAnswer) {
//                 addChecker(true);
//             } else {
//                 addChecker(false);
//             }
//
//             if (current < Object.keys(allQuestions).length -1) {
//                 current += 1;
//
//                 loadQuestion(current);
//                 loadAnswers(current);
//             } else {
//                 questionArea.innerHTML = 'Done';
//                 answerArea.innerHTML = '';
//             }
//
//         };
//     }
//     function addChecker(bool) {
//         // This function adds a div element to the page
//         // Used to see if it was correct or false
//
//         var createDiv = document.createElement('div'),
//             txt       = document.createTextNode(current + 1);
//
//         createDiv.appendChild(txt);
//
//         if (bool) {
//
//             createDiv.className += 'correct';
//             checker.appendChild(createDiv);
//         } else {
//             createDiv.className += 'false';
//             checker.appendChild(createDiv);
//         }
//     }
//     // Start the quiz right away
//     loadQuestion(current);
//     loadAnswers(current);
// };

window.onload = function() {
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea = document.getElementsByClassName('answers')[0],
        checker = document.getElementsByClassName('checker')[0],
        current = 0,
        correctAnswers = 0, // Counter for correct answers
        allQuestions = {
            "What is the difference between mass communication and interpersonal communication?": [
                "Mass communication involves communication between individuals, while interpersonal communication involves communication to a large audience",
                "Mass communication involves communication to a large audience, while interpersonal communication involves communication between individuals",
                "Mass communication and interpersonal communication are the same thing",
                1
            ],
            'What is the importance of media literacy?': [
                'It allows individuals to analyze and evaluate the messages presented through media channels',
                'It helps individuals create content for various media platforms',
                'It helps individuals gain followers on social media',
                0
            ],
            'What is the purpose of public relations? ': [
                'To manage the communication between an organization and its publics',
                'To create advertisements for products and services',
                'To produce and direct content for film and television',
                0
            ]
        };

    function loadQuestion(curr) {
        var question = Object.keys(allQuestions)[curr];
        questionArea.innerHTML = '';
        questionArea.innerHTML = question;
    }

    function loadAnswers(curr) {
        var answers = allQuestions[Object.keys(allQuestions)[curr]];
        answerArea.innerHTML = '';

        for (var i = 0; i < answers.length - 1; i += 1) {
            var createDiv = document.createElement('div'),
                text = document.createTextNode(answers[i]);

            createDiv.appendChild(text);
            createDiv.addEventListener('click', checkAnswer(i, answers));

            answerArea.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {
        return function() {
            var givenAnswer = i,
                correctAnswer = arr[arr.length - 1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current < Object.keys(allQuestions).length - 1) {
                current += 1;
                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'Done';
                answerArea.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }
        };
    }

    function addChecker(bool) {
        var createDiv = document.createElement('div'),
            txt = document.createTextNode(current + 1);

        createDiv.appendChild(txt);

        if (bool) {
            createDiv.className += 'correct';
            checker.appendChild(createDiv);
        } else {
            createDiv.className += 'false';
            checker.appendChild(createDiv);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers;
        checker.appendChild(resultDiv);
    }

    loadQuestion(current);
    loadAnswers(current);
};








//Media & Communication - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea1 = document.getElementsByClassName('questions1')[0],
        answerArea1   = document.getElementsByClassName('answers1')[0],
        checker1      = document.getElementsByClassName('checker1')[0],
        current1      = 0,
        correctAnswers1 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions1 = {
            'What does the term "media" refer to?' : ["The internet only", "Newspapers and magazines only", "Various channels of communication, including television, radio, and the internet", 2],

            'What is the definition of communication?' : ['The process of exchanging information and ideas between people', 'The process of reading a book or watching a movie' , 'The process of listening to music or playing sports', 0],

            'What is the role of media in shaping public opinion? ' : ['Media has no impact on public opinion', 'Media can influence public opinion through the messages it presents', 'Public opinion has no impact on media', 1]
        };
    function loadQuestion1(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question1 = Object.keys(allQuestions1)[curr];

        questionArea1.innerHTML = '';
        questionArea1.innerHTML = question1;
    }
    function loadAnswers1(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers1 = allQuestions1[Object.keys(allQuestions1)[curr]];

        answerArea1.innerHTML = '';

        for (var i = 0; i < answers1.length -1; i += 1) {
            var createDiv1 = document.createElement('div'),
                text1 = document.createTextNode(answers1[i]);

            createDiv1.appendChild(text1);
            createDiv1.addEventListener("click", checkAnswer1(i, answers1));


            answerArea1.appendChild(createDiv1);
        }
    }
    function checkAnswer1(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers1 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current1 < Object.keys(allQuestions1).length -1) {
                current1 += 1;

                loadQuestion1(current1);
                loadAnswers1(current1);
            } else {
                questionArea1.innerHTML = 'Done';
                answerArea1.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv1 = document.createElement('div'),
            txt1       = document.createTextNode(current1 + 1);

        createDiv1.appendChild(txt1);

        if (bool) {

            createDiv1.className += 'correct';
            checker1.appendChild(createDiv1);
        } else {
            createDiv1.className += 'false';
            checker1.appendChild(createDiv1);
        }
    }
    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers1;
        checker1.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion1(current1);
    loadAnswers1(current1);
});








//Design - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea2 = document.getElementsByClassName('questions2')[0],
        answerArea2   = document.getElementsByClassName('answers2')[0],
        checker2      = document.getElementsByClassName('checker2')[0],
        current2      = 0,
        correctAnswers2 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions2 = {
            "What is the design process?" : ["The process of sketching and creating a final design", "The process of ideation, research, prototyping, and testing", "The process of choosing colors and fonts for a design", 1],

            'What is the purpose of a mood board in the design process?' : ['To gather inspiration and develop a visual direction for a project', 'To create a final design' , 'To present design concepts to a client', 0],

            'What is the difference between raster and vector graphics? ' : ['Raster graphics are created using mathematical equations, while vector graphics are made up of pixels', 'Raster graphics are made up of pixels, while vector graphics are created using mathematical equations', 'Raster graphics and vector graphics are the same thing', 1]
        };
    function loadQuestion2(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question2 = Object.keys(allQuestions2)[curr];

        questionArea2.innerHTML = '';
        questionArea2.innerHTML = question2;
    }
    function loadAnswers2(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers2 = allQuestions2[Object.keys(allQuestions2)[curr]];

        answerArea2.innerHTML = '';

        for (var i = 0; i < answers2.length -1; i += 1) {
            var createDiv2 = document.createElement('div'),
                text2 = document.createTextNode(answers2[i]);

            createDiv2.appendChild(text2);
            createDiv2.addEventListener("click", checkAnswer2(i, answers2));


            answerArea2.appendChild(createDiv2);
        }
    }
    function checkAnswer2(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers2 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current2 < Object.keys(allQuestions2).length -1) {
                current2 += 1;

                loadQuestion2(current2);
                loadAnswers2(current2);
            } else {
                questionArea2.innerHTML = 'Done';
                answerArea2.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv2 = document.createElement('div'),
            txt2       = document.createTextNode(current2 + 1);

        createDiv2.appendChild(txt2);

        if (bool) {

            createDiv2.className += 'correct';
            checker2.appendChild(createDiv2);
        } else {
            createDiv2.className += 'false';
            checker2.appendChild(createDiv2);
        }
    }
    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers2;
        checker2.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion2(current2);
    loadAnswers2(current2);
});










//Design - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea3 = document.getElementsByClassName('questions3')[0],
        answerArea3   = document.getElementsByClassName('answers3')[0],
        checker3      = document.getElementsByClassName('checker3')[0],
        current3      = 0,
        correctAnswers3 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions3 = {
            "What is design?" : ["The process of creating products and services", "The process of organizing and planning events", "The process of creating visual and/or functional solutions to problems", 2],

            'What is the difference between graphic design and industrial design?' : ['Graphic design involves creating visual communications, while industrial design involves designing physical products', 'Graphic design involves designing physical products, while industrial design involves creating visual communications' , 'Graphic design and industrial design are the same thing', 0],

            'What is typography? ' : ['The study of how people communicate through language', 'The study of how words are formed and structured', 'The study of how fonts and typefaces are designed and used', 2]
        };
    function loadQuestion3(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question3 = Object.keys(allQuestions3)[curr];

        questionArea3.innerHTML = '';
        questionArea3.innerHTML = question3;
    }
    function loadAnswers3(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers3 = allQuestions3[Object.keys(allQuestions3)[curr]];

        answerArea3.innerHTML = '';

        for (var i = 0; i < answers3.length -1; i += 1) {
            var createDiv3 = document.createElement('div'),
                text3 = document.createTextNode(answers3[i]);

            createDiv3.appendChild(text3);
            createDiv3.addEventListener("click", checkAnswer3(i, answers3));


            answerArea3.appendChild(createDiv3);
        }
    }
    function checkAnswer3(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers3 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current3 < Object.keys(allQuestions3).length -1) {
                current3 += 1;

                loadQuestion3(current3);
                loadAnswers3(current3);
            } else {
                questionArea3.innerHTML = 'Done';
                answerArea3.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv3 = document.createElement('div'),
            txt3       = document.createTextNode(current3 + 1);

        createDiv3.appendChild(txt3);

        if (bool) {

            createDiv3.className += 'correct';
            checker3.appendChild(createDiv3);
        } else {
            createDiv3.className += 'false';
            checker3.appendChild(createDiv3);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers3;
        checker3.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion3(current3);
    loadAnswers3(current3);
});









//Education - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea4 = document.getElementsByClassName('questions4')[0],
        answerArea4   = document.getElementsByClassName('answers4')[0],
        checker4      = document.getElementsByClassName('checker4')[0],
        current4      = 0,
        correctAnswers4 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions4 = {
            "What is the difference between formative and summative assessment?" : ["Formative assessment is given at the end of a unit of study, while summative assessment is given throughout the unit", "Formative assessment is used to evaluate learning progress, while summative assessment is used to evaluate learning outcomes", "Formative assessment is used to assign grades, while summative assessment is used to provide feedback", 1],

            'What is the difference between a learning objective and a learning outcome?' : ['Learning objectives are broad goals, while learning outcomes are specific and measurable', 'Learning objectives are specific and measurable, while learning outcomes are broad goals' , 'Learning objectives and learning outcomes are the same thing', 0],

            'What is differentiated instruction? ' : ['The process of teaching students with different learning styles in the same way', 'The process of providing all students with the same level of support and resources', 'The process of adapting instruction to meet the needs of individual learners', 2]
        };
    function loadQuestion4(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question4 = Object.keys(allQuestions4)[curr];

        questionArea4.innerHTML = '';
        questionArea4.innerHTML = question4;
    }
    function loadAnswers4(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers4 = allQuestions4[Object.keys(allQuestions4)[curr]];

        answerArea4.innerHTML = '';

        for (var i = 0; i < answers4.length -1; i += 1) {
            var createDiv4 = document.createElement('div'),
                text4 = document.createTextNode(answers4[i]);

            createDiv4.appendChild(text4);
            createDiv4.addEventListener("click", checkAnswer4(i, answers4));


            answerArea4.appendChild(createDiv4);
        }
    }
    function checkAnswer4(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers4 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current4 < Object.keys(allQuestions4).length -1) {
                current4 += 1;

                loadQuestion4(current4);
                loadAnswers4(current4);
            } else {
                questionArea4.innerHTML = 'Done';
                answerArea4.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv4 = document.createElement('div'),
            txt4       = document.createTextNode(current4 + 1);

        createDiv4.appendChild(txt4);

        if (bool) {

            createDiv4.className += 'correct';
            checker4.appendChild(createDiv4);
        } else {
            createDiv4.className += 'false';
            checker4.appendChild(createDiv4);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers4;
        checker4.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion4(current4);
    loadAnswers4(current4);
});









//Education - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea5 = document.getElementsByClassName('questions5')[0],
        answerArea5   = document.getElementsByClassName('answers5')[0],
        checker5      = document.getElementsByClassName('checker5')[0],
        current5      = 0,
        correctAnswers5 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions5 = {
            "What is the practice of teaching and the methods used to facilitate learning?" : ["Pedagogy", "Curriculum", "Assessment", 0],

            'What is the materials, lessons, and activities that are designed to be taught in a specific educational setting?' : ['Assessment', 'Differentiation' , 'Curriculum', 2],

            'What is the field of education that addresses the needs of students with disabilities or special needs? ' : ['Classroom Management', 'Special Education', 'Differentiation', 1]
        };
    function loadQuestion5(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question5 = Object.keys(allQuestions5)[curr];

        questionArea5.innerHTML = '';
        questionArea5.innerHTML = question5;
    }
    function loadAnswers5(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers5 = allQuestions5[Object.keys(allQuestions5)[curr]];

        answerArea5.innerHTML = '';

        for (var i = 0; i < answers5.length -1; i += 1) {
            var createDiv5 = document.createElement('div'),
                text5 = document.createTextNode(answers5[i]);

            createDiv5.appendChild(text5);
            createDiv5.addEventListener("click", checkAnswer5(i, answers5));


            answerArea5.appendChild(createDiv5);
        }
    }
    function checkAnswer5(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers5 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current5 < Object.keys(allQuestions5).length -1) {
                current5 += 1;

                loadQuestion5(current5);
                loadAnswers5(current5);
            } else {
                questionArea5.innerHTML = 'Done';
                answerArea5.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv5 = document.createElement('div'),
            txt5       = document.createTextNode(current5 + 1);

        createDiv5.appendChild(txt5);

        if (bool) {

            createDiv5.className += 'correct';
            checker5.appendChild(createDiv5);
        } else {
            createDiv5.className += 'false';
            checker5.appendChild(createDiv5);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers5;
        checker5.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion5(current5);
    loadAnswers5(current5);
});








//People & Health - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea6 = document.getElementsByClassName('questions6')[0],
        answerArea6   = document.getElementsByClassName('answers6')[0],
        checker6      = document.getElementsByClassName('checker6')[0],
        current6      = 0,
        correctAnswers6 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions6 = {
            "What is the role of the World Health Organization (WHO)?" : ["To provide funding for medical research", "To develop and implement public health policies and programs", "To train healthcare professionals", 1],

            'Which of the following is not a vital sign?' : ['Blood pressure', 'Heart rate' , 'Body weight', 2],

            'What is the difference between a vaccine and an antibiotic? ' : ['A vaccine is used to treat bacterial infections, while an antibiotic is used to prevent viral infections', 'A vaccine is used to prevent infections, while an antibiotic is used to treat infections', 'A vaccine and an antibiotic are the same thing', 1]
        };
    function loadQuestion6(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question6 = Object.keys(allQuestions6)[curr];

        questionArea6.innerHTML = '';
        questionArea6.innerHTML = question6;
    }
    function loadAnswers6(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers6 = allQuestions6[Object.keys(allQuestions6)[curr]];

        answerArea6.innerHTML = '';

        for (var i = 0; i < answers6.length -1; i += 1) {
            var createDiv6 = document.createElement('div'),
                text6 = document.createTextNode(answers6[i]);

            createDiv6.appendChild(text6);
            createDiv6.addEventListener("click", checkAnswer6(i, answers6));


            answerArea6.appendChild(createDiv6);
        }
    }
    function checkAnswer6(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers6 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current6 < Object.keys(allQuestions6).length -1) {
                current6 += 1;

                loadQuestion6(current6);
                loadAnswers6(current6);
            } else {
                questionArea6.innerHTML = 'Done';
                answerArea6.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv6 = document.createElement('div'),
            txt6       = document.createTextNode(current6 + 1);

        createDiv6.appendChild(txt6);

        if (bool) {

            createDiv6.className += 'correct';
            checker6.appendChild(createDiv6);
        } else {
            createDiv6.className += 'false';
            checker6.appendChild(createDiv6);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers6;
        checker6.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion6(current6);
    loadAnswers6(current6);
});








//People & Health - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea7 = document.getElementsByClassName('questions7')[0],
        answerArea7   = document.getElementsByClassName('answers7')[0],
        checker7      = document.getElementsByClassName('checker7')[0],
        current7      = 0,
        correctAnswers7 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions7 = {
            "What is the definition of health?" : ["The absence of disease or illness", "The state of complete physical, mental, and social well-being", "The ability to perform physical activities", 1],

            'What is a healthy lifestyle?' : ['Eating a balanced diet, exercising regularly, and getting enough sleep', 'Avoiding all unhealthy foods and beverages' , 'Only engaging in physical activities that are fun', 0],

            'What is the difference between acute and chronic illnesses? ' : ['Acute illnesses last for a short period of time, while chronic illnesses last for a long time or are permanent', 'Chronic illnesses are caused by infections, while acute illnesses are caused by genetics', 'Acute illnesses are more severe than chronic illnesses', 0]
        };
    function loadQuestion7(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question7 = Object.keys(allQuestions7)[curr];

        questionArea7.innerHTML = '';
        questionArea7.innerHTML = question7;
    }
    function loadAnswers7(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers7 = allQuestions7[Object.keys(allQuestions7)[curr]];

        answerArea7.innerHTML = '';

        for (var i = 0; i < answers7.length -1; i += 1) {
            var createDiv7 = document.createElement('div'),
                text7 = document.createTextNode(answers7[i]);

            createDiv7.appendChild(text7);
            createDiv7.addEventListener("click", checkAnswer7(i, answers7));


            answerArea7.appendChild(createDiv7);
        }
    }
    function checkAnswer7(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers7 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current7 < Object.keys(allQuestions7).length -1) {
                current7 += 1;

                loadQuestion7(current7);
                loadAnswers7(current7);
            } else {
                questionArea7.innerHTML = 'Done';
                answerArea7.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv7 = document.createElement('div'),
            txt7       = document.createTextNode(current7 + 1);

        createDiv7.appendChild(txt7);

        if (bool) {

            createDiv7.className += 'correct';
            checker7.appendChild(createDiv7);
        } else {
            createDiv7.className += 'false';
            checker7.appendChild(createDiv7);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers7;
        checker7.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion7(current7);
    loadAnswers7(current7);
});







//Business & Tourism - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea8 = document.getElementsByClassName('questions8')[0],
        answerArea8   = document.getElementsByClassName('answers8')[0],
        checker8      = document.getElementsByClassName('checker8')[0],
        current8      = 0,
        correctAnswers8 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions8 = {
            "What is the main difference between a tourist and a traveller?" : ["A tourist stays in a hotel, while a traveller stays in a hostel", "A tourist follows a set itinerary, while a traveller prefers to explore independently", "There is no difference between a tourist and a traveller", 1],

            'What is the role of marketing in the tourism industry?' : ['To encourage tourists to visit destinations and purchase tourism products and services', 'To limit the number of tourists visiting destinations to protect local cultures' , 'To provide customer service to tourists', 0],

            'Which of the following is an example of sustainable tourism practices?' : ['Building a resort in a protected nature reserve', 'Using renewable energy sources in hotels and other tourism businesses', 'Promoting mass tourism to a previously unexplored area', 1]
        };
    function loadQuestion8(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question8 = Object.keys(allQuestions8)[curr];

        questionArea8.innerHTML = '';
        questionArea8.innerHTML = question8;
    }
    function loadAnswers8(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers8 = allQuestions8[Object.keys(allQuestions8)[curr]];

        answerArea8.innerHTML = '';

        for (var i = 0; i < answers8.length -1; i += 1) {
            var createDiv8 = document.createElement('div'),
                text8 = document.createTextNode(answers8[i]);

            createDiv8.appendChild(text8);
            createDiv8.addEventListener("click", checkAnswer8(i, answers8));


            answerArea8.appendChild(createDiv8);
        }
    }
    function checkAnswer8(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers8 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current8 < Object.keys(allQuestions8).length -1) {
                current8 += 1;

                loadQuestion8(current8);
                loadAnswers8(current8);
            } else {
                questionArea8.innerHTML = 'Done';
                answerArea8.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv8 = document.createElement('div'),
            txt8       = document.createTextNode(current8 + 1);

        createDiv8.appendChild(txt8);

        if (bool) {

            createDiv8.className += 'correct';
            checker8.appendChild(createDiv8);
        } else {
            createDiv8.className += 'false';
            checker8.appendChild(createDiv8);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers8;
        checker8.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion8(current8);
    loadAnswers8(current8);
});








//Business & Tourism - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea9 = document.getElementsByClassName('questions9')[0],
        answerArea9   = document.getElementsByClassName('answers9')[0],
        checker9      = document.getElementsByClassName('checker9')[0],
        current9      = 0,
        correctAnswers9 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions9 = {
            "Which of the following best describes what a career in tourism and hospitality entails?" : ["Managing and marketing businesses that provide products and services for travellers and tourists", "Building and designing tourist attractions and theme parks", "Providing medical care for travellers and tourists", 0],

            'What is sustainable tourism?' : ['Tourism that encourages travellers to engage in activities that harm the environment', 'Tourism that ignores the impact on local communities and their cultures' , 'Tourism that promotes responsible and ethical practices to protect the planet\'s natural resources', 2],

            'What is the role of technology in the tourism industry?' : ['To discourage travellers from visiting certain destinations', 'To replace human workers in the travel industry', 'To enhance the customer experience and streamline business operations', 2]
        };
    function loadQuestion9(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question9 = Object.keys(allQuestions9)[curr];

        questionArea9.innerHTML = '';
        questionArea9.innerHTML = question9;
    }
    function loadAnswers9(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers9 = allQuestions9[Object.keys(allQuestions9)[curr]];

        answerArea9.innerHTML = '';

        for (var i = 0; i < answers9.length -1; i += 1) {
            var createDiv9 = document.createElement('div'),
                text9 = document.createTextNode(answers9[i]);

            createDiv9.appendChild(text9);
            createDiv9.addEventListener("click", checkAnswer9(i, answers9));


            answerArea9.appendChild(createDiv9);
        }
    }
    function checkAnswer9(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers9 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current9 < Object.keys(allQuestions9).length -1) {
                current9 += 1;

                loadQuestion9(current9);
                loadAnswers9(current9);
            } else {
                questionArea9.innerHTML = 'Done';
                answerArea9.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv9 = document.createElement('div'),
            txt9       = document.createTextNode(current9 + 1);

        createDiv9.appendChild(txt9);

        if (bool) {

            createDiv9.className += 'correct';
            checker9.appendChild(createDiv9);
        } else {
            createDiv9.className += 'false';
            checker9.appendChild(createDiv9);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers9;
        checker9.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion9(current9);
    loadAnswers9(current9);
});








//Sport - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea10 = document.getElementsByClassName('questions10')[0],
        answerArea10   = document.getElementsByClassName('answers10')[0],
        checker10      = document.getElementsByClassName('checker10')[0],
        current10      = 0,
        correctAnswers10 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions10 = {
            "What is the role of a sports agent?" : ["To represent athletes in contract negotiations with teams and sponsors", "To design and implement training programs for athletes", "To coordinate and organize sporting events and competitions", 0],

            'What is sports psychology?' : ['The study of how the human body moves and functions during physical activity', 'The study of the history and evolution of sports' , 'The study of the mental and emotional factors that affect athletic performance', 2],

            'What is sports journalism?' : ['The study of the cultural and social impact of sports on society', 'The practice of reporting on and writing about sports and athletic events', 'The study of the economic and financial aspects of sports and athletic events', 1]
        };
    function loadQuestion10(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question10 = Object.keys(allQuestions10)[curr];

        questionArea10.innerHTML = '';
        questionArea10.innerHTML = question10;
    }
    function loadAnswers10(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers10 = allQuestions10[Object.keys(allQuestions10)[curr]];

        answerArea10.innerHTML = '';

        for (var i = 0; i < answers10.length -1; i += 1) {
            var createDiv10 = document.createElement('div'),
                text10 = document.createTextNode(answers10[i]);

            createDiv10.appendChild(text10);
            createDiv10.addEventListener("click", checkAnswer10(i, answers10));


            answerArea10.appendChild(createDiv10);
        }
    }
    function checkAnswer10(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers10 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current10 < Object.keys(allQuestions10).length -1) {
                current10 += 1;

                loadQuestion10(current10);
                loadAnswers10(current10);
            } else {
                questionArea10.innerHTML = 'Done';
                answerArea10.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv10 = document.createElement('div'),
            txt10       = document.createTextNode(current10 + 1);

        createDiv10.appendChild(txt10);

        if (bool) {

            createDiv10.className += 'correct';
            checker10.appendChild(createDiv10);
        } else {
            createDiv10.className += 'false';
            checker10.appendChild(createDiv10);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers10;
        checker10.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion10(current10);
    loadAnswers10(current10);
});







//Sport - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea11 = document.getElementsByClassName('questions11')[0],
        answerArea11   = document.getElementsByClassName('answers11')[0],
        checker11      = document.getElementsByClassName('checker11')[0],
        current11      = 0,
        correctAnswers11 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions11 = {
            "What is the main goal of sports science?" : ["To study the history of sports and athletic events", "To improve athletic performance through research and data analysis", "To design sports equipment and gear", 1],

            'What is kinesiology?' : ['The study of how the human body moves and functions during physical activity', 'The study of the cultural and social impact of sports on society' , 'The study of the design and construction of sports facilities', 0],

            'What is sports medicine?' : ['The study of the economic and financial aspects of sports and athletic events', 'The study of sports psychology and mental preparation for athletic competitions', 'The prevention, diagnosis, and treatment of injuries related to sports and physical activity', 2]
        };
    function loadQuestion11(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question11 = Object.keys(allQuestions11)[curr];

        questionArea11.innerHTML = '';
        questionArea11.innerHTML = question11;
    }
    function loadAnswers11(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers11 = allQuestions11[Object.keys(allQuestions11)[curr]];

        answerArea11.innerHTML = '';

        for (var i = 0; i < answers11.length -1; i += 1) {
            var createDiv11 = document.createElement('div'),
                text11 = document.createTextNode(answers11[i]);

            createDiv11.appendChild(text11);
            createDiv11.addEventListener("click", checkAnswer11(i, answers11));


            answerArea11.appendChild(createDiv11);
        }
    }
    function checkAnswer11(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers11 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current11 < Object.keys(allQuestions11).length -1) {
                current11 += 1;

                loadQuestion11(current11);
                loadAnswers11(current11);
            } else {
                questionArea11.innerHTML = 'Done';
                answerArea11.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv11 = document.createElement('div'),
            txt11       = document.createTextNode(current11 + 1);

        createDiv11.appendChild(txt11);

        if (bool) {

            createDiv11.className += 'correct';
            checker11.appendChild(createDiv11);
        } else {
            createDiv11.className += 'false';
            checker11.appendChild(createDiv11);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers11;
        checker11.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion11(current11);
    loadAnswers11(current11);
});








//Life Sciences & Chemistry - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea12 = document.getElementsByClassName('questions12')[0],
        answerArea12   = document.getElementsByClassName('answers12')[0],
        checker12      = document.getElementsByClassName('checker12')[0],
        current12      = 0,
        correctAnswers12 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions12 = {
            "Which of the following is the basic unit of life?" : ["Atom", "Molecule", "Cell", 2],

            'What is the role of enzymes in biochemical reactions?' : ['They provide energy to the reaction', 'They act as catalysts to speed up the reaction' , 'They store genetic information for the reaction', 1],

            'What is the difference between prokaryotic and eukaryotic cells? ' : ['Prokaryotic cells are larger than eukaryotic cells', 'Prokaryotic cells have a nucleus, while eukaryotic cells do not', 'Eukaryotic cells have membrane-bound organelles, while prokaryotic cells do not', 2]
        };
    function loadQuestion12(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question12 = Object.keys(allQuestions12)[curr];

        questionArea12.innerHTML = '';
        questionArea12.innerHTML = question12;
    }
    function loadAnswers12(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers12 = allQuestions12[Object.keys(allQuestions12)[curr]];

        answerArea12.innerHTML = '';

        for (var i = 0; i < answers12.length -1; i += 1) {
            var createDiv12 = document.createElement('div'),
                text12 = document.createTextNode(answers12[i]);

            createDiv12.appendChild(text12);
            createDiv12.addEventListener("click", checkAnswer12(i, answers12));


            answerArea12.appendChild(createDiv12);
        }
    }
    function checkAnswer12(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers12 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current12 < Object.keys(allQuestions12).length -1) {
                current12 += 1;

                loadQuestion12(current12);
                loadAnswers12(current12);
            } else {
                questionArea12.innerHTML = 'Done';
                answerArea12.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv12 = document.createElement('div'),
            txt12       = document.createTextNode(current12 + 1);

        createDiv12.appendChild(txt12);

        if (bool) {

            createDiv12.className += 'correct';
            checker12.appendChild(createDiv12);
        } else {
            createDiv12.className += 'false';
            checker12.appendChild(createDiv12);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers12;
        checker12.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion12(current12);
    loadAnswers12(current12);
});









//Life Sciences & Chemistry - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea13 = document.getElementsByClassName('questions13')[0],
        answerArea13   = document.getElementsByClassName('answers13')[0],
        checker13      = document.getElementsByClassName('checker13')[0],
        current13      = 0,
        correctAnswers13 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions13 = {
            "What is biology?" : ["The study of the structure and function of matter", "The study of the behaviour and mental processes of living organisms", "The study of the natural world and the organisms that inhabit it", 2],

            'What is chemistry?' : ['The study of the natural world and the organisms that inhabit it', 'The study of the behaviour and mental processes of living organisms' , 'The study of the structure and function of matter', 2],

            'What is genetics?' : ['The study of the natural world and the organisms that inhabit it', 'The study of the behaviour and mental processes of living organisms', 'The study of heredity and the passing of traits from parents to offspring', 2]
        };
    function loadQuestion13(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question13 = Object.keys(allQuestions13)[curr];

        questionArea13.innerHTML = '';
        questionArea13.innerHTML = question13;
    }
    function loadAnswers13(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers13 = allQuestions13[Object.keys(allQuestions13)[curr]];

        answerArea13.innerHTML = '';

        for (var i = 0; i < answers13.length -1; i += 1) {
            var createDiv13 = document.createElement('div'),
                text13 = document.createTextNode(answers13[i]);

            createDiv13.appendChild(text13);
            createDiv13.addEventListener("click", checkAnswer13(i, answers13));


            answerArea13.appendChild(createDiv13);
        }
    }
    function checkAnswer13(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers13 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current13 < Object.keys(allQuestions13).length -1) {
                current13 += 1;

                loadQuestion13(current13);
                loadAnswers13(current13);
            } else {
                questionArea13.innerHTML = 'Done';
                answerArea13.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv13 = document.createElement('div'),
            txt13       = document.createTextNode(current13 + 1);

        createDiv13.appendChild(txt13);

        if (bool) {

            createDiv13.className += 'correct';
            checker13.appendChild(createDiv13);
        } else {
            createDiv13.className += 'false';
            checker13.appendChild(createDiv13);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers13;
        checker13.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion13(current13);
    loadAnswers13(current13);
});









//Tech & IT - Prior Knowledge
window.addEventListener('load', function () {
    var questionArea14 = document.getElementsByClassName('questions14')[0],
        answerArea14   = document.getElementsByClassName('answers14')[0],
        checker14      = document.getElementsByClassName('checker14')[0],
        current14      = 0,
        correctAnswers14 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions14 = {
            "What is the difference between RAM and ROM?" : ["RAM is permanent and cannot be changed, while ROM can be altered", "ROM is used for short-term storage, while RAM is used for long-term storage", "RAM is volatile and temporary, while ROM is non-volatile and permanent", 2],

            'What is the purpose of a compiler in programming?' : ['To convert high-level language code into machine code', 'To convert machine code into high-level language code' , 'To compress the code for faster execution', 0],

            'What is an IP address? ' : ['A unique identifier assigned to a computer or device on a network', 'A tool used to encrypt and decrypt data', 'A protocol used for transferring files over the internet', 0]
        };
    function loadQuestion14(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question14 = Object.keys(allQuestions14)[curr];

        questionArea14.innerHTML = '';
        questionArea14.innerHTML = question14;
    }
    function loadAnswers14(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers14 = allQuestions14[Object.keys(allQuestions14)[curr]];

        answerArea14.innerHTML = '';

        for (var i = 0; i < answers14.length -1; i += 1) {
            var createDiv14 = document.createElement('div'),
                text14 = document.createTextNode(answers14[i]);

            createDiv14.appendChild(text14);
            createDiv14.addEventListener("click", checkAnswer14(i, answers14));


            answerArea14.appendChild(createDiv14);
        }
    }
    function checkAnswer14(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers14 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current14 < Object.keys(allQuestions14).length -1) {
                current14 += 1;

                loadQuestion14(current14);
                loadAnswers14(current14);
            } else {
                questionArea14.innerHTML = 'Done';
                answerArea14.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv14 = document.createElement('div'),
            txt14       = document.createTextNode(current14 + 1);

        createDiv14.appendChild(txt14);

        if (bool) {

            createDiv14.className += 'correct';
            checker14.appendChild(createDiv14);
        } else {
            createDiv14.className += 'false';
            checker14.appendChild(createDiv14);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers14;
        checker14.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion14(current14);
    loadAnswers14(current14);
});








//Tech & IT - No Prior Knowledge
window.addEventListener('load', function () {
    var questionArea15 = document.getElementsByClassName('questions15')[0],
        answerArea15   = document.getElementsByClassName('answers15')[0],
        checker15      = document.getElementsByClassName('checker15')[0],
        current15      = 0,
        correctAnswers15 = 0, // Counter for correct answers
        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions15 = {
            "What is cloud computing?" : ["A way of storing data on personal computers", "A network of computers that can be accessed remotely over the internet", "A type of computer hardware", 1],

            'Which of the following is an example of an operating system?' : ['Microsoft Word', 'Google Chrome' , 'MacOS', 2],

            'What is the difference between hardware and software? ' : ['Hardware refers to the physical components of a computer, while software refers to the programs that run on the hardware', 'Hardware refers to the programs that run on a computer, while software refers to the physical components of a computer', 'Hardware refers to the type of computer, while software refers to the specific applications that can be run on it', 0]
        };
    function loadQuestion15(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question15 = Object.keys(allQuestions15)[curr];

        questionArea15.innerHTML = '';
        questionArea15.innerHTML = question15;
    }
    function loadAnswers15(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers15 = allQuestions15[Object.keys(allQuestions15)[curr]];

        answerArea15.innerHTML = '';

        for (var i = 0; i < answers15.length -1; i += 1) {
            var createDiv15 = document.createElement('div'),
                text15 = document.createTextNode(answers15[i]);

            createDiv15.appendChild(text15);
            createDiv15.addEventListener("click", checkAnswer15(i, answers15));


            answerArea15.appendChild(createDiv15);
        }
    }
    function checkAnswer15(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is same as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length-1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
                correctAnswers15 += 1; // Increment the counter
            } else {
                addChecker(false);
            }

            if (current15 < Object.keys(allQuestions15).length -1) {
                current15 += 1;

                loadQuestion15(current15);
                loadAnswers15(current15);
            } else {
                questionArea15.innerHTML = 'Done';
                answerArea15.innerHTML = '';
                displayResult(); // Display the total number of correct answers
            }

        };
    }
    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv15 = document.createElement('div'),
            txt15       = document.createTextNode(current15 + 1);

        createDiv15.appendChild(txt15);

        if (bool) {

            createDiv15.className += 'correct';
            checker15.appendChild(createDiv15);
        } else {
            createDiv15.className += 'false';
            checker15.appendChild(createDiv15);
        }
    }

    function displayResult() {
        var resultDiv = document.createElement('div');
        resultDiv.innerHTML = '<br><br>Correct Answers: ' + correctAnswers15;
        checker15.appendChild(resultDiv);
    }
    // Start the quiz right away
    loadQuestion15(current15);
    loadAnswers15(current15);
});