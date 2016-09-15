app.controller('IndexController',['$scope','TestResource',function($scope,TestResource)
{
	$scope.title = 'Test Conexión';
	$scope.connect = {};
	$scope.test = function(){
		console.log('in');
			$scope.title = '';
	TestResource.success(function(response)
		{
			$scope.connect = response;
		});
	}
}]);


