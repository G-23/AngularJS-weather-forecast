(function(){
	
	var weatherApp = angular.module('weatherApp', []);

	weatherApp.service('Weather', function($http) {
		this.requestWeather = function(city){
			return $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric');
		};
	});

	weatherApp.controller('weatherController', function($scope, $http, Weather) {
		$scope.weatherForecast = {};
		$scope.date;
		$scope.getWeather = function() {
			if($scope.city) {
				Weather.requestWeather($scope.city).then(function(result) {
					$scope.weatherForecast = result.data;
					$scope.date = new Date();
				});
			}
		};
	});	
})();