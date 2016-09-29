app.controller('AskController',['$scope','SkillResource','AskResource',function($scope,SkillResource,AskResource)
{
	$scope.title = "Formulación";
	$scope.Habilidades = {};
	$scope.connect = {};
	$scope.Formulacion = {};

	var listhab = SkillResource.listsHabilidades();
	listhab.then(function(response){

			$scope.Habilidades = response;	

		},function(error){
			//console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error al cargar las habilidadess'}

		});

	$scope.saveFormulacion = function(){

		var request = AskResource.insertFormulacion($scope.Formulacion);

		request.then(function(response){
			console.log('success');
			$scope.connect = response;

		},function(error){
			console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error'}

		});
	}
}]);




