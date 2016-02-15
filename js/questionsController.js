angular
	.module('quizApp')
	.controller('QuestionsController', QuestionsController)

QuestionsController.$inject = ['QuestionFactory'];

function QuestionsController(QuestionFactory) {

	console.log('This comes from QuestionsController');

	var self = this;
	self.question = {};

	self.getQuestion = function() {

		self.question = QuestionFactory.get();
		console.log(self.question);


	}

	self.getQuestion();

}