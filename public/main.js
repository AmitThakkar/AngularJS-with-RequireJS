/**
 * Created by namita on 14/5/15.
 */
require.config({
    baseUrl: "",
    paths: {
        'angular': './angular/angular.min',
        'angular-route': './angular-route/angular-route.min',
        'angularAMD': './angularAMD/dist/angularAMD.min',
        'jquery': './jquery/dist/jquery.min',
        'bootstrap': './bootstrap/dist/js/bootstrap.min'

    },
    shim: {
        'angularAMD': ['angular'], 'angular-route':['angular']
    },
    deps: ['route']
});