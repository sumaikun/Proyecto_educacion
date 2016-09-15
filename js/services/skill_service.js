app.factory('SkillResource',['$http','$q',function($http,$q){

	var SkillResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

	SkillResource.insertHabilidad = function(dt)
	{
		console.log(dt);
		$http.post('"http://localhost/Gappi/public/StoreHabilidad"',dt)
		.success(function(data){

        	console.log('funcion enviada');
        	defered.resolve(data);
    	})
    		.error(function(err){
        	defered.reject(err);
    	});
    
    	return promise; 
	}



    SkillResource.listsHabilidades = function()
    {

        $http.get("http://localhost/Gappi/public/listshabilidad")
        .success(function(data){
        console.log(data);        
        defered.resolve(data);
        })
        .error(function(err){
        defered.reject(err);
        });

        return promise; 

    }

	return SkillResource;	
	
}]);

