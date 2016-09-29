app.controller('TemaController',['$scope','TemaResource',function($scope,TemaResource)
{
	$scope.title = "Tema";
	$scope.Tema = {};
	$scope.connect = {};
	$scope.saveTema = function() {
		var request = TemaResource.insertTema($scope.Tema);

		request.then(function(response){
			console.log('success');
			$scope.connect = response;

		},function(error){
			console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error'}

		});
	};

}]);




