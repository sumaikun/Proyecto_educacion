app.controller('ChartController',['$scope','ChartResource',function($scope,ChartResource)
{
	//PLugin de graficas http://www.fusioncharts.com/angularjs-charts/#/demos/ex2

	$scope.title = "Graficas";

	//Ejemplo de Barchart
	$scope.myDataSource = {
	    chart: {
	        caption: "Promedio general de estudiantes",
	        subCaption: "Promedio de la nota del estudiante",
	        numberPrefix: "",
	        theme: "ocean"
	    },
	    data:[{
	        label: "Bakersfield Central",
	        value: "880000"
	    },
	    {
	        label: "Garden Groove harbour",
	        value: "730000"
	    },
	    {
	        label: "Los Angeles Topanga",
	        value: "590000"
	    },
	    {
	        label: "Compton-Rancho Dom",
	        value: "520000"
	    },
	    {
	        label: "Daly City Serramonte",
	        value: "330000"
	    }]
	};

	// 	Ejemplo de pieChart

	$scope.myDataSource2 = {
    chart: {
        caption: "Age profile of website visitors",
        subcaption: "Last Year",
        startingangle: "120",
        showlabels: "0",
        showlegend: "1",
        enablemultislicing: "0",
        slicingdistance: "15",
        showpercentvalues: "1",
        showpercentintooltip: "0",
        plottooltext: "Age group : $label Total visit : $datavalue",
        theme: "fint"
    },
    data: [
        {
            label: "Teenage",
            value: "1250400"
        },
        {
            label: "Adult",
            value: "1463300"
        },
        {
            label: "Mid-age",
            value: "1050700"
        },
        {
            label: "Senior",
            value: "491000"
        }
    ]
}

	$scope.generalData = {
	    chart: {
	        caption: "Promedio general de estudiantes",
	        subCaption: "Promedio de la nota del estudiante",
	        numberPrefix: "",
	        theme: "ocean"
	    },
	    data:[]
	};

	$scope.generalattemptsData = {
	    chart: {
	        caption: "Promedio general de estudiantes",
	        subCaption: "Numero de notas por estudiante",
	        numberPrefix: "",
	        theme: "ocean"
	    },
	    data:[]
	};


	var general_chart = ChartResource.general_score_chart();

 		general_chart.success(function(response){
				$scope.generalData.data = response;
		
			});

 		general_chart.error(function(error){
			//console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error al cargar las habilidadess'}

		});

	var general_attempt = ChartResource.general_attempts();

 		general_attempt.success(function(response){

 			console.log(response);
			$scope.generalattemptsData.data = response; 	

		});
		general_attempt.error(function(error){
			//console.log('error');
			$scope.connect = {message: 'Ha ocurrido un error al cargar las habilidadess'}

		});	

}]);