/**
 * Created by namita on 22/5/15.
 */
(function (ng) {
    var loginApp = ng.module('loginApp', []);
    loginApp.controller('LoginController', ['$scope','$http', function ($scope,$http) {
        $scope.showSignUpModal = function () {
            ng.element('#myModal').modal('show');
        };
        $scope.registerUser = function () {
            $http.post('/login', {test: "test"}).
                success(function (data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                }).
                error(function (data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        }
    }]);
})(angular);
