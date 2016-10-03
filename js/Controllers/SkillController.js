app.controller('SkillController',['$scope','TemaResource','SkillResource',function($scope,TemaResource,SkillResource)
{
	$scope.title = "Habilidad";
	$scope.Temas = {};
	$scope.connect = {};
	$scope.Habilidad = {};
	var listtemas = TemaResource.listsTemas();
	listtemas.then(function(response){
			//console.log('success');
			$scope.Temas = response;
			//console.log($scope.Temas);
			//$scope.connect = response;

		},function(error){
			//console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error al cargar los temas'}

		});		

		/*var test = TemaResource.test();
    	console.log(test);
		
		SkillResource.test();*/
	
		
	$scope.saveHabilidad = function(){
		var request = SkillResource.insertHabilidad($scope.Habilidad);
		//SkillResource.test();
		request.then(function(response){
			console.log('success');
			$scope.connect = response;

		},function(error){
			console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error'}

		});
	}
}]);




