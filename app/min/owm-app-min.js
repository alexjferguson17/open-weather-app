angular.module("OWMApp",["ngRoute"]).value("owmCities",["New York","Dallas","Chicago"]).config(["$routeProvider",function(t){t.when("/",{templateUrl:"home.html",controller:"HomeCtrl"}).when("/cities/:city",{templateUrl:"city.html",controller:"CityCtrl",resolve:{city:function(t,r,e){var o=r.current.params.city;return-1===t.indexOf(o)?void e.path("/error"):o}}}).when("/error",{template:"<p>Error -Page Not Found</p>"})}]).controller("HomeCtrl",function(t){}).controller("CityCtrl",function(t,r){t.city=r}).controller("CityCtrl",["$scope","$routeParams",function(t,r){t.city=r.city}]);