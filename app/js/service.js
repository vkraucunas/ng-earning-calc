app.service('mealDataService', [function(){
    this.meals = [];
    this.mealID = 1;
    this.totals = {
        tipTotal: 0,
        mealCount: 0,
        avgTip: 0
    };
    this.getMeals = function() {
        return this.meals;
    };
    this.getCumulativeTotal = function() {
        return this.totals;
    };
    this.addMeal = function(meal) {
        meal.tip = meal.sub*(meal.tip/100);
        this.meals.push(meal);
        this.totals.mealCount++;
        this.mealID++;
        this.totals.tipTotal += meal.tip;
        this.totals.avgTip = this.totals.tipTotal / this.totals.mealCount;
        console.log(this.totals);
    };
    this.reset = function() {
        this.meals = [];
        this.totals = {
            tipTotal: 0,
            mealCount: 0,
            avgTip: 0
        };
        this.mealID = 1;
        console.log(this.meals);
    }
}])