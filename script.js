'use strict';

//Generating random number
let randomnumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener
    ("click", function () {
        let guess = Number(document.querySelector(".guess").value); //getting the value from ip

        if (!guess) {
            document.querySelector(".message").textContent = "Please enter a number";
        }
        else if (guess === randomnumber) {
            document.querySelector(".number").textContent = randomnumber;
            document.querySelector(".message").textContent = "You Won 🏆";
            document.querySelector("body").style.backgroundColor = "#382956";
            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }
        }
        else if (guess > randomnumber) {
            document.querySelector(".message").textContent = "Too High";
            score--;
            document.querySelector(".score").textContent = score;
        }
        else if (guess < randomnumber) {
            document.querySelector(".message").textContent = "Too Low";
            score--;
            document.querySelector(".score").textContent = score;
        }
    })

//Reset button

document.querySelector(".again").addEventListener
    ("click", function () {
        document.querySelector(".guess").value = "";
        randomnumber = Math.trunc(Math.random() * 20 + 1);
        document.querySelector("body").style.backgroundColor = "#5c6667";
        document.querySelector(".message").textContent = "Start guessing...";
        score = 20;
        document.querySelector(".score").textContent = score;
        document.querySelector(".number").textContent = "?";

    })