app.factory('TemaResource',['$http','$q',function($http,$q)
{
    var TemaResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

   TemaResource.insertTema = function(dt)
   {
     console.log(dt);//verificar variable que mando.   
     $http.post("http://localhost/Gappi/public/StoreTema", dt)
        .success(function(data){
            console.log('funcion enviada');
            defered.resolve(data);
        })
        .error(function(err){
            defered.reject(err);
        });
        
        return promise;                
   }

   /* TemaResource.test = function() {
        return "265655";
    } */ 

   TemaResource.listsTemas = function()
   {
        $http.get("http://localhost/Gappi/public/liststema")
        .success(function(data){
            console.log(data);        
            defered.resolve(data);
        })
        .error(function(err){
            defered.reject(err);
        });

        return promise; 
    
   }      
    return TemaResource;
}]);    