var DetailControl = function($scope, mealDataService) {
  $scope.meal = {};
  $scope.counter = mealDataService.mealID;
  $scope.handleForm = function() {
    mealDataService.addMeal($scope.meal);
    $scope.meal = {};
    $scope.counter++
  }
}

DetailControl.$inject = ['$scope', 'mealDataService'];
app.controller('DetailControl', DetailControl);

//charge control====================================
var ChargeControl = function($scope, mealDataService) {
  $scope.meals = mealDataService.getMeals();
  $scope.counter = 1;
  $scope.present = 0;
  $scope.advance = function() {
    if ($scope.counter === $scope.meals.length) {
      $scope.counter = 1;
      $scope.present = 0;
    } else {
      $scope.counter++;
      $scope.present++;
    }
  };
  $scope.retreat = function() {
    if ($scope.counter > 1) {
      $scope.counter--;
      $scope.present--;
    } else {
      $scope.counter = $scope.meals.length;
      $scope.present = $scope.meals.length - 1;
    }
  };
}

ChargeControl.$inject = ['$scope', 'mealDataService'];
app.controller('ChargeControl', ChargeControl);


//earning control====================================
var EarningControl = function($scope, mealDataService) {
  $scope.totals = mealDataService.getCumulativeTotal();
}

EarningControl.$inject = ['$scope', 'mealDataService'];

app.controller('EarningControl', EarningControl);

//reset control======================================
var ResetControl = function($scope, $location, mealDataService) {
  $scope.reset = function() {
    mealDataService.reset();
    $location.url('/details');
  }
}

ResetControl.$inject = ['$scope', '$location', 'mealDataService'];

app.controller('ResetControl', ResetControl);