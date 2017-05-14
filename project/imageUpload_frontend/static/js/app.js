var myApp = angular.module('imageuploadFrontendApp', ['ngResource']);

myApp.config(function($resourceProvider) {
    $resourceProvider.defaults.stripTrailingSlashes = false;
});

myApp.controller('MainCtrl', function($scope, Images) {
    $scope.images = Images.query();

    $scope.newImage = {};

    $scope.deleteImage = function(image) {
        image.$delete(
            function(response) {
                $scope.images =Images.query();
            }
        );    
    };

    $scope.uploadImage = function() {
        console.log("upload image called");
        Images.save($scope.newImage).$promise.then(
            function(response) {
                $scope.images.unshift(response);
            }
        );
    };

});

myApp.directive('filesModel', filesModelDirective);
