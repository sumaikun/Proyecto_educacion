app.controller('UserController',['$scope','UserResource',function($scope,UserResource)
{
	$scope.title = "Usuario";
	$scope.connect = {};
	$scope.User = {};
	$scope.param = {};
	
		
	$scope.saveUser = function(){
		//console.log('imagen: '+JSON.stringify($scope.User.file));
		
		var request = UserResource.insertUser($scope.User);		
		request.then(function(response){
			console.log('success');
			$scope.connect = response;

		},function(error){
			console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error'}

		});
	}

}]);






