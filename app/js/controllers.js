/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$state','$rootScope','toaster','$scope'];
    function LoginController($http, $state,$rootScope,toaster,$scope) {
        var vm = this;

        $rootScope.$on('init', function () {
          activate();
        });

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.login = {};
          console.log("loginCtrl");
          vm.login = function() {
            if(vm.loginForm.$valid) {

              $.post('api/account/login', {email: vm.login.email, password: vm.login.password})
                .success(function(data) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !data.is_error ) {

                  }else{

                  }
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.loginForm.account_email.$dirty = true;
              vm.loginForm.account_password.$dirty = true;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: access-register.js
 * Demo for register account api
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.pages')
        .controller('RegisterFormController', RegisterFormController);

    RegisterFormController.$inject = ['$http', '$state','$rootScope'];
    function RegisterFormController($http, $state,$rootScope) {
        var vm = this;

        $rootScope.$on('init', function () {
          activate();
        });

        ////////////////

        function activate() {
          // bind here all data from the form
          vm.account = {};
          // place the message if something goes wrong
          vm.authMsg = '';

          vm.register = function() {
            vm.authMsg = '';

            if(vm.registerForm.$valid) {

              $http
                .post('api/account/register', {email: vm.account.email, password: vm.account.password})
                .then(function(response) {
                  // assumes if ok, response is an object with some data, if not, a string with error
                  // customize according to your api
                  if ( !response.account ) {
                    vm.authMsg = response;
                  }else{
                    $state.go('app.dashboard');
                  }
                }, function() {
                  vm.authMsg = 'Server Request Error';
                });
            }
            else {
              // set as dirty if the user click directly to login so we show the validation messages
              /*jshint -W106*/
              vm.registerForm.account_email.$dirty = true;
              vm.registerForm.account_password.$dirty = true;
              vm.registerForm.account_agreed.$dirty = true;

            }
          };
        }
    }
})();
