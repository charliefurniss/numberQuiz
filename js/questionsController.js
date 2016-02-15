angular
	.module('quizApp')
	.controller('QuestionsController', QuestionsController)
QuestionsController.$inject = ['$http'];



function QuestionsController($http) {

	var self = this;
	self.remainingTurns = 0;
	self.correctAnswerCounter = 0;
	self.wrongAnswerCounter = 0;
	self.getCorrectAnswer= getCorrectAnswer;
	self.getQuestion = getQuestion;
	self.checkAnswer = checkAnswer;
	self.number = '';
	self.correctAnswer = '';
	self.wrongAnswer1 = '';
	self.wrongAnswer2 = '';
	self.possibleAnswers = [];
	// setCorrectAnswer();
	// console.log(self.number);
	// self.getQuestion();
	self.userAnswer = "";
	self.message = "Welcome to NumberWang!";
	self.correctAnswerArray = [];
	self.correctAnswerNumber;

	self.startQuiz = function() {
		$("#resultMessage").hide();
		console.log('button clicked');
		self.possibleAnswers = [];
		self.remainingTurns = 0;
		self.correctAnswerCounter = 0;
		self.wrongAnswerCounter = 0;
		self.getQuestion();
		self.correctAnswerArray = [];
	}
 

	self.startGame = function() {
		$("#resultMessage").hide();
		console.log('button clicked');
		self.togglePanels();
		self.possibleAnswers = [];
		self.remainingTurns = 0;
		self.correctAnswerCounter = 0;
		self.wrongAnswerCounter = 0;
		self.getQuestion();
		self.correctAnswerArray = [];

	}
	

	function checkAnswer() {
		console.log(self.userAnswer);

		if (self.userAnswer == self.correctAnswer) {
			self.correctAnswerCounter++;
		}

		else {
			self.wrongAnswerCounter++;
			self.displayCorrectAnswer = self.correctAnswerNumber + " is " + self.correctAnswer;
			self.correctAnswerArray.push(self.displayCorrectAnswer);
		}

		self.possibleAnswers = [];
		self.getQuestion();
	}


	function getQuestion() {

		if (self.remainingTurns < 5) {
			self.remainingTurns++;
			self.getCorrectAnswer();
			getWrongAnswer1();
			getWrongAnswer2();
		}
		else {
			self.message = "Well done! You got " +  self.correctAnswerCounter + " right answers and " + self.wrongAnswerCounter + " wrong answers (boooooooo!)";
			endGame();
		}		
	}
	
	function getCorrectAnswer() {		
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true&max=999999999999999999999', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.number = response.data.number.toLocaleString();
				self.correctAnswerNumber = self.number;
				self.correctAnswer = response.data.text
				console.log("THIS IS THE RIGHT ANSWER! " + self.correctAnswer);
				self.possibleAnswers.push(response.data.text);
			});
	}
	
	function getWrongAnswer1() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true&max=999999999999999999999', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer1 = response.data.text;
				self.possibleAnswers.push(response.data.text);
			});
	}
	function getWrongAnswer2() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true&max=999999999999999999999', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer2 = response.data.text;
				self.possibleAnswers.push(response.data.text);
				// console.log(self.possibleAnswers);
			});
	}

	function endGame(){
		$("#start-button").val("Play again");
		$("#main-game").slideToggle("slow");
		$("#welcome-goodbye").slideToggle("slow");
		$("#resultMessage").show();
		$("#welcomeMessage").hide();
	   
	}
	
	self.togglePanels = function(){
		console.log("got to here");
	  $("#main-game").slideToggle("slow");
	  $("#welcome-goodbye").slideToggle("slow");
	}


	self.random = function(){
	   return 0.5 - Math.random();

	};  
}