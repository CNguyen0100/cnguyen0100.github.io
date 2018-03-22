var myApp = angular.module('cuongApp', ['ngRoute']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
            $routeProvider
                .when('/', {templateUrl: 'public/navbar/views/home.html'})
            .when('/profile', {templateUrl: 'public\\navbar\\views\\profile.html'})
            .when('/projects', {templateUrl: 'public/navbar/views/projects.html'})
            .otherwise({redirectTo: '/'});

            // $locationProvider.html5Mode({enabled: true, requireBase: false});
}]);

