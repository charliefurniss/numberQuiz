angular
	.module('quizApp')
	.controller('QuestionsController', QuestionsController)

QuestionsController.$inject = ['$http'];

function QuestionsController($http) {

	console.log('This comes from QuestionsController');

	var self = this;

	self.getCorrectAnswer= getCorrectAnswer;
	self.getQuestion = getQuestion;
	self.number = '';
	self.correctAnswer = '';
	self.wrongAnswer1 = '';
	self.wrongAnswer2 = '';
	self.possibleAnswers = [];

	// setCorrectAnswer();
	// console.log(self.number);

	self.getQuestion();


	function getQuestion() {

		self.getCorrectAnswer();
		getWrongAnswer1();
		getWrongAnswer2();

	}
	

	function getCorrectAnswer() {		
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				//self.responseObject = response.data;
				self.number = response.data.number;
				self.correctAnswer = response.data.text
				// console.log(self.number);
				self.possibleAnswers.push(response.data.text);
			});

	}
	
	function getWrongAnswer1() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer1 = response.data.text;
				self.possibleAnswers.push(response.data.text);
			});
	}


	function getWrongAnswer2() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer2 = response.data.text;
				self.possibleAnswers.push(response.data.text);
				console.log(self.possibleAnswers);
			});

	}
	

	self.random = function(){
	   return 0.5 - Math.random();
	};  

}


