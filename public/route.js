/**
 * Created by Namita Malik on 29/1/15.
 */
define(['angularAMD', 'angular-route', 'jquery', 'bootstrap'], function (angularAMD) {
    var module = angular.module("route", ['ngRoute']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/product', angularAMD.route({
                templateUrl: 'product.html',
                controller: 'ProductController',
                controllerAs: 'productController',
                controllerUrl: './ProductController'
            }))
            .when('/cart', angularAMD.route({
                templateUrl: 'cart.html',
                controller: 'CartController',
                controllerAs: 'cartController',
                controllerUrl: './CartController'
            }))
            .when('/payment', angularAMD.route({
                templateUrl: 'payment.html',
                controller: 'PaymentController',
                controllerAs: 'paymentController',
                controllerUrl: './PaymentController'
            }))
            .otherwise({
                redirectTo: '/cart'
            });
    }]);
    return angularAMD.bootstrap(module);
});
