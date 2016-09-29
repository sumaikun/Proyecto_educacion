app.controller('TrainingController',['$scope','SkillResource','TrainingResource',function($scope,SkillResource,TrainingResource)
{
	$scope.title = 'Entrenamiento';
	$scope.connect = {};
	$scope.Formulacion = {};
	$scope.dom = '';
	$scope.performance = {percent:0,color:'bg-green',icon:'fa-thumbs-o-up'};
	

	var listhab = SkillResource.listsHabilidades();

 		listhab.then(function(response){

			$scope.Habilidades = response;	

		},function(error){
			//console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error al cargar las habilidadess'}

		});

	$scope.search = function(id){

		var ask_search = TrainingResource.ask_search(id);
		ask_search.then(function(response){
			$scope.connect = response;			
			if($scope.connect.data.message!=null)
			{				
				console.log('logica1');
				$scope.skill = id;
				$scope.dom='nofound';

			}
			else
			{
				console.log($scope.connect.data);
				console.log('logica2');
				$scope.dom='found';
			}

			
		},function(error){
			 console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error'}

		});		
	}

	$scope.check_answer = function(){

		//var diff = Math.abs( $scope.connect.data[0].respuesta - $scope.Formulacion.respuesta );
		//console.log(diff);

		if($scope.connect.data.respuesta == $scope.Formulacion.respuesta)
		{
			$scope.performance.percent += 10;		
			$scope.search($scope.connect.data.skill_id);
		}
		else{
			$scope.performance.percent -= 10;
			$scope.search($scope.connect.data.skill_id);
			
		}

		styles();	
	}

	function styles(){

		console.log($scope.performance.percent);
		if($scope.performance.percent >= 0)
		{
			$scope.performance.color='bg-green';
			$scope.performance.icon='fa-thumbs-o-up';
		}
		else
		{
			$scope.performance.color='bg-red';
			$scope.performance.icon='fa-thumbs-o-down';	
		}
	}	


}]);


