angular.module('cuongApp').controller('projectsController',['$scope' , function($scope){
    $scope.titles = [];
    for(var i =0; i< 10;i++){
        var name = "Project"+i;
        $scope.titles.push(name);
    }


    console.log("controller is loading" + $scope.titles);
}]);