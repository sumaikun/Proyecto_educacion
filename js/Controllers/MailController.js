app.controller('MailController',['$scope',function($scope)
{
	$scope.title = "Mail";
	$scope.message = 'inbox';
	$scope.prueba = "Prueba";
	$scope.compose = function(){
		$scope.prueba="compose";
		$scope.message = 'compose'
	}
	$scope.inbox = function(){
		$scope.prueba="inbox";
		$scope.message = 'inbox';
	}
	$scope.read = function(){
		$scope.prueba="read";
		$scope.message = 'read';	
	}   

}]);