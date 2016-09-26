var app = angular.module("Application",['ngRoute']);
app.config(function ($routeProvider) { 
  console.log($routeProvider);
  $routeProvider
    .when('/User',{ 
      controller: 'UserController', 
      templateUrl: 'js/Views/User/creation.html' 
    })       
    .when('/Calendar',{ 
      controller: 'CalendarController', 
      templateUrl: 'js/Views/Calendar.html' 
    })
    .when('/Tema',{ 
      controller: 'TemaController', 
      templateUrl: 'js/Views/Forms/Tema.html' 
    })
    .when('/Habilidad',{ 
      controller: 'SkillController', 
      templateUrl: 'js/Views/Forms/Habilidad.html' 
    })
    .when('/Formulacion',{ 
      controller: 'AskController', 
      templateUrl: 'js/Views/Forms/Formulacion.html' 
    }) 
    .when('/Entrenamiento',{ 
      controller: 'TrainingController', 
      templateUrl: 'js/Views/Forms/Entrenamiento.html' 
    })             
    .when('/Mail',{ 
      controller: 'MailController', 
      templateUrl: 'js/Views/MailBox.html' 
    })
    .when('/TaskDeliveries',{ 
      controller: 'TaskController', 
      templateUrl: 'js/Views/TaskDeliveries.html' 
    })
    .when('/Califications',{ 
      controller: 'CalificationController', 
      templateUrl: 'js/Views/Califications.html' 
    })        
    .when('/',{ 
      controller: 'IndexController', 
      templateUrl: 'js/Views/Home.html' 
    }) 
    .otherwise({
      redirectTo: '/'
    });
});


app.filter('makePositive', function() {
    return function(num) { return Math.abs(num); }
});