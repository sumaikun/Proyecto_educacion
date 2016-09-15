app.factory('AskResource',['$http','$q',function($http,$q){

	var AskResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

    	AskResource.insertFormulacion = function(dt)
    	{
    		console.log(dt);
    		$http.post("http://localhost/Gappi/public/StoreFormulacion",dt)
    		.success(function(data){

            	console.log('funcion enviada');
            	defered.resolve(data);
        	})
        		.error(function(err){
            	defered.reject(err);
        	});
        
        	return promise; 
    	}

	return AskResource;	
	
}]);

