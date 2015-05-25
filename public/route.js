/**
 * Created by Namita Malik on 29/1/15.
 */
define(['angularAMD', 'angular-route', 'jquery', 'bootstrap'], function (angularAMD) {
    var module = angular.module("route", ['ngRoute']);
    module.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/product', angularAMD.route({
                templateUrl: './product/product.html',
                controller: 'ProductController',
                controllerAs: 'productController',
                controllerUrl: './product/ProductController'
            }))
            .when('/cart', angularAMD.route({
                templateUrl: './cart/cart.html',
                controller: 'CartController',
                controllerAs: 'cartController',
                controllerUrl: './cart/CartController'
            }))
            .when('/payment', angularAMD.route({
                templateUrl: './payment/payment.html',
                controller: 'PaymentController',
                controllerAs: 'paymentController',
                controllerUrl: './payment/PaymentController'
            }))
            .otherwise({
                redirectTo: '/cart.html',
            });
    }]);
    return angularAMD.bootstrap(module);
});
