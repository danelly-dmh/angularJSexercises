var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/london", {
        templateUrl : "libro1.html"
    })
    .when("/london", {
        templateUrl : "libro2.html"
    })
    .when("/london", {
        templateUrl : "libro3.html"
    })
    .when("/paris", {
        templateUrl : "libro4.html"
    });
});
