angular
	.module('quizApp')
	.controller('QuestionsController', QuestionsController)

QuestionsController.$inject = ['$http'];

function QuestionsController($http) {

	console.log('This comes from QuestionsController');

	var self = this;

	self.getQuestion= getQuestion;
	self.number = '';
	self.correctAnswer = '';
	self.wrongAnswer1 = '';
	self.wrongAnswer2 = '';

	// setCorrectAnswer();
	// console.log(self.number);

	self.getQuestion()
	getWrongAnswer1()
	getWrongAnswer2()
	

	function getQuestion() {		
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				//self.responseObject = response.data;
				self.number = response.data.number;
				self.correctAnswer = response.data.text
				console.log(self.number);
			});

	}
	
	function getWrongAnswer1() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer1 = response.data.text;
			});
	}


	function getWrongAnswer2() {
		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.wrongAnswer2 = response.data.text;
			});

	}
	

	// self.getQuestion(thing, function() {

	// 	console.log("GOT TO LINE 57");
	// 	console.log(self.number);
	// 	console.log(self.correctAnswer);
	// 	console.log(self.wrongAnswer1);
	// 	console.log(self.wrongAnswer2);

	// });

}


