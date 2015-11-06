'use strict';

(function(){
    var module = angular.module('tokenAuth', []);
    module.service('Auth', ['$cookies', function($cookies){
        var token = '';

        this.authenticate = function(){
            var c = $cookies.get('authenticated_token');
            if (c !== undefined){
                token = c;
                $cookies.remove('authenticated_token');
                console.log("token = ", token);
            }
            console.log($cookies.getAll());
            //else {
            //    var cookies = $cookies.getAll();
            //    angular.forEach(cookies, function (v, k) {
            //        $cookies.remove(k);
            //    });
            //    window.location = window.app.loginUrl;
            //}
        };

        this.get_token = function(){
            return token;
        };
    }]);
})();