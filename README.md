# Tic Tac Toe Game
This is a simple implementation of the classic Tic Tac Toe game using HTML, CSS, and JavaScript.

# How to Play
* To start the game, simply load the webpage in your web browser.
* Two players can play this game. One player is designated as "Cross" and the other as "Circle".
* The first player to get three in a row (horizontally, vertically, or diagonally) wins the game.
* If all nine squares are filled and no player has won, the game is considered a tie.
* Click on any empty square to place your symbol. The game will automatically switch turns between the two players.
* When the game is over, a confirmation box will appear displaying the result (winner or tie) and the board will be reset to start a new game.

# Technical Details
* This implementation of the Tic Tac Toe game uses a 3x3 grid represented by an array. The state of each square is tracked using the gameBoardValues array, where each element can have one of three values: "" (empty), "close" (representing "Cross"), or "radio_button_unchecked" (representing "Circle").
* The game checks for a winner or a tie after each move by looping through all possible winning combinations and comparing the values in those squares. If a winner is found, the scoreIncrement function is called, which displays a confirmation box showing the winner and increments their score. If no winner is found but all squares are filled, the checkTie function is called, which displays a confirmation box showing that the game is a tie.
* The game also includes a "Reset" button that clears the board and sets the scores back to zero.


![image](https://user-images.githubusercontent.com/111266613/222883572-ef6b8701-b0e7-401a-85af-58ee0377aae6.png) ![image](https://user-images.githubusercontent.com/111266613/222883496-7d60fd53-df40-4aee-ae62-63e97f03029d.png)

![image](https://user-images.githubusercontent.com/111266613/222883402-a01d3396-c3bf-49e2-90ab-17fce014fdd1.png)
