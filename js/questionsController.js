angular
	.module('quizApp')
	.controller('QuestionsController', QuestionsController)

QuestionsController.$inject = ['$http'];

function QuestionsController($http) {

	console.log('This comes from QuestionsController');

	var self = this;

	self.response = {};
	self.response2 = {};
	self.response3 = {}; 
	// self.number = response.data.number;
	// self.correctAns = response.data.text
	// self.secondOpt = response.data.text
	// self.thirdOpt = response.data.text

	self.getQuestion = function() {

		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.responseObject = response.data;
				console.log(self.responseObject);
				console.log(self.responseObject.text);
			});

		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.responseObject = response.data;
				console.log(self.responseObject);
				console.log(self.responseObject.text);
			});

		$http
			.get('https://numbersapi.p.mashape.com/random/trivia?fragment=true&json=true', {
				headers: { 'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' }
			}).then(function(response) {
				self.responseObject = response.data;
				console.log(self.responseObject);
				console.log(self.responseObject.text);
			});
	}

	self.getQuestion();


}