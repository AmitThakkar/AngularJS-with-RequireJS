/**
 * Created by Namita Malik on 29/1/15.
 */
var module = angular.module("myApp", ['ngRoute']);

module.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/product', {
            templateUrl: 'product.html',
            controller: 'ProductController',
            controllerAs: 'productController'
        })
        .when('/cart', {
            templateUrl: 'cart.html',
            controller: 'CartController',
            controllerAs: 'cartController'
        })
        .when('/payment', {
            templateUrl: 'payment.html',
            controller: 'PaymentController',
            controllerAs: 'paymentController'
        })
        .otherwise({
            redirectTo: '/cart'
        });
}]);
module.controller("ProductController", function () {
    var productController = this;
    productController.message = "Product Page looks awesome!"
});
module.controller("CartController", function () {
    var cartController = this;
    cartController.message = "Cart Page looks awesome!"
});
module.controller("PaymentController", function () {
    var paymentController = this;
    paymentController.message = "Payment Page looks awesome!"
});
