/**
 * Created by namita on 14/5/15.
 */
require.config({
    baseUrl: "",
    paths: {
        'angular': '../node_modules/angular/angular.min.js',
        'angular-route': '../node_modules/angular-route/angular-route.min.js',
        'angularAMD': '../node_modules/angularAMD/dist/angularAMD.min.js',
        'jquery': './../node_modules/jquery/dist/jquery.min.js',
        'bootstrap': './../node_modules/bootstrap/dist/js/bootstrap.min.js'

    },
    shim: {
        'angularAMD': ['angular'], 'angular-route':['angular']
    },
    deps: ['route']
});