App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        templateUrl: 'app/templates/ListRequests.html'
      }
    )
    .when('/create-request', 
      {
        templateUrl: 'app/templates/CreateRequest.html'
      }
    )
    .when('/journal', 
      {
        templateUrl: 'app/templates/Journal.html'
      }
    )
    .when('/groups', 
      {
        templateUrl: 'app/templates/ListGroups.html'
      }
    )
     .when('/login', 
      {
        templateUrl: 'app/templates/Login.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});