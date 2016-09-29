app.factory('UserResource',['$http','$q',function($http,$q){

	var UserResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

	UserResource.insertUser = function(data){

        //hay que usar formData cuando se va a subir un archivo.
       var fd = new FormData();
       fd.append('file', data.file);
       fd.append('name', data.name);
       fd.append('email', data.email);
       fd.append('password', data.password);
       fd.append('age', data.age);
       fd.append('rol', data.rol);
    
       $http.post("http://localhost/Gappi/public/StoreUser", fd, {
          transformRequest: angular.identity,
          headers: {'Content-Type': undefined}
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

