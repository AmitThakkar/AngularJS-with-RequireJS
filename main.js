/**
 * Created by namita on 14/5/15.
 */
require.config({
    baseUrl: "",
    paths: {
        'angular': 'node_modules/angular/angular.min',
        'angular-route': 'node_modules/angular-route/angular-route.min',
        'angularAMD': 'node_modules/angularAMD/dist/angularAMD.min',
        'jquery': './node_modules/jquery/dist/jquery.min',
        'bootstrap': './node_modules/bootstrap/dist/js/bootstrap.min'

    },
    shim: {
        'angularAMD': ['angular'], 'angular-route':['angular']
    },
    deps: ['route']
});