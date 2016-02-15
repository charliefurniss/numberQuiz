angular 
	.module('quizApp')
	.factory('QuestionFactory', QuestionFactory);

QuestionFactory.$inject = ['$resource'];

function QuestionFactory($resource) {

	return $resource('https://numbersapi.p.mashape.com/random/trivia?json=true', null, {
		get: { 
				method: 'GET',
				isArray: false,
				headers: { 
					'X-Mashape-Authorization' : '1lM52liN37mshekVR70k9k6SlPrNp13RotojsnLu7QdUmr70jC' 
				}
			}
		});
}




//   return $resource('https://montanaflynn-dictionary.p.mashape.com/define', null, {
//     find: {
//       method: 'GET',
//       isArray: false,
//       headers: {
//         'X-Mashape-Authorization': mashapeKey
//       }
//     }
//   });
// }