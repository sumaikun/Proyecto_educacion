app.factory('UserResource',['$http','$q',function($http,$q){

	var UserResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

	UserResource.insertUser = function(dt)
	{
		console.log(dt);
		//$http.post("http://localhost/Gappi/public/StoreUser",dt)
        $http({method: 'POST',
            url: "http://localhost/Gappi/public/StoreUser",
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            data:{dt},
            transformRequest: function (data, headersGetter) {
                var formData = new FormData();
                angular.forEach(data, function (value, key) {
                    formData.append(key, value);
                });

                var headers = headersGetter();
                delete headers['Content-Type'];

                return formData;
            }
        })
		.success(function(data){

        	console.log('funcion enviada');
        	defered.resolve(data);
    	})
    		.error(function(err){
        	defered.reject(err);
    	});
    
    	return promise; 
	}



    UserResource.listsHabilidades = function()
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

	return UserResource;	
	
}]);

