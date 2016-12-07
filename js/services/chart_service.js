app.factory('ChartResource',['$http','$q',function($http,$q){

	var ChartResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

    	ChartResource.general_score_chart = function()
    	{
           
    		return $http.get("http://localhost/Gappi/public/general_score_chart")
    		.success(function(data){

            	return data;
            	
        	})
        		.error(function(err){
            	return err;
        	});
        
        	
    	}

        ChartResource.general_attempts = function()
        {
            
            return $http.get("http://localhost/Gappi/public/general_attemps")

            .success(function(data){

                return data;
            })
                .error(function(err){
                return err;
            });
        
            
        }

	return ChartResource;	
	
}]);

