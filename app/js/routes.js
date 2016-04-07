app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/details', {
        templateUrl: 'templates/details.html',
        controller: 'DetailControl'
    })
    .when('/charges', {
        templateUrl: 'templates/charges.html',
        controller: 'ChargeControl'
    })
    .when('/earnings', {
        templateUrl: 'templates/earnings.html',
        controller: 'EarningControl'
    })
    .otherwise('/details');
});