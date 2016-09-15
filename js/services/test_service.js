app.factory('TestResource',['$http',function($http){
	return $http.get("http://localhost/Gappi/public/User")
		.success(function(data){
			
			return data;
		})
		.error(function(err){
			return err;
		}); 
	
}]);

