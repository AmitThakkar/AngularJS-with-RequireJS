/**
 * Created by namita on 22/5/15.
 */
(function (ng) {
    var loginApp = ng.module('loginApp', []);
    loginApp.controller('LoginController', ['$scope', function ($scope) {
        $scope.showSignUpModal = function () {
            ng.element('#myModal').modal('show');
        };
    }]);
})(angular);
