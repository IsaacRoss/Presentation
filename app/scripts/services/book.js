'use strict';


var demoServices = angular.module('demoServices', ['ngResource']);

demoServices.factory('Book', ['$resource',
	function($resource){
		return $resource('books/:bookId.json', {},{
			query: {method: 'GET', params:{bookId:'books'}, isArray:true}
		});
	}]);