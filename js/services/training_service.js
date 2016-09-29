app.factory('TrainingResource',['$http','$q',function($http,$q)
{
    var TrainingResource = {};
    var defered = $q.defer();
    var promise = defered.promise;

   /*TrainingResource.ask_search = function(dt)
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
   }*/

    

   TrainingResource.ask_search = function(id)
   {
        return $http.get('http://localhost/Gappi/public/searchFormulacion'+'/'+id)
        .success(function(data){
            console.log(data);        
            defered.resolve(data);
        })
        .error(function(err){
            defered.reject(err);
        });

        return promise; 
    
   }      
    return TrainingResource;
}]);    