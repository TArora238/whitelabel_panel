/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.routes')
        .provider('RouteHelpers', RouteHelpersProvider)
        ;

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

      /* jshint validthis:true */
      return {
        // provider access level
        basepath: basepath,
        resolveFor: resolveFor,
        // controller access level
        $get: function() {
          return {
            basepath: basepath,
            resolveFor: resolveFor
          };
        }
      };

      // Set here the base of the relative path
      // for all app views
      function basepath(uri) {
        return 'app/views/' + uri;
      }

      // Generates a resolve object by passing script names
      // previously configured in constant.APP_REQUIRES
      function resolveFor() {
        var _args = arguments;
        return {
          deps: ['$ocLazyLoad','$q', function ($ocLL, $q) {
            // Creates a promise chain for each argument
            var promise = $q.when(1); // empty promise
            for(var i=0, len=_args.length; i < len; i ++){
              promise = andThen(_args[i]);
            }
            return promise;

            // creates promise to chain dynamically
            function andThen(_arg) {
              // also support a function that returns a promise
              if(typeof _arg === 'function')
                  return promise.then(_arg);
              else
                  return promise.then(function() {
                    // if is a module, pass the name. If not, pass the array
                    var whatToLoad = getRequired(_arg);
                    // simple error check
                    if(!whatToLoad) return $.error('Route resolve: Bad resource name [' + _arg + ']');
                    // finally, return a promise
                    return $ocLL.load( whatToLoad );
                  });
            }
            // check and returns required data
            // analyze module items with the form [name: '', files: []]
            // and also simple array of script files (for not angular js)
            function getRequired(name) {
              if (APP_REQUIRES.modules)
                  for(var m in APP_REQUIRES.modules)
                      if(APP_REQUIRES.modules[m].name && APP_REQUIRES.modules[m].name === name)
                          return APP_REQUIRES.modules[m];
              return APP_REQUIRES.scripts && APP_REQUIRES.scripts[name];
            }

          }]};
      } // resolveFor

    }


})();


/**=========================================================
 * Module: config.js
 * App routes and resources configuration
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.routes')
        .config(routesConfig);

    routesConfig.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider', 'RouteHelpersProvider'];
    function routesConfig($stateProvider, $locationProvider, $urlRouterProvider, helper){

        // Set the following to true to enable the HTML5 Mode
        // You may have to set <base> tag in index and a routing configuration in your server
        $locationProvider.html5Mode(false);

        // defaults to dashboard
        $urlRouterProvider.otherwise('/login');

        //
        // Application Routes
        // -----------------------------------
        $stateProvider
          // .state('page', {
          //       url: '',
          //       templateUrl: 'app/pages/page.html',
          //       resolve: helper.resolveFor('modernizr', 'icons'),
          //       controller: ['$rootScope', function($rootScope) {
          //           $rootScope.app.layout.isBoxed = false;
          //       }]
          //   })
          .state('main', {
                url: '',
                abstract: true,
                resolve: helper.resolveFor('modernizr', 'icons','moment','ngDialog','toaster'),
                controller: 'mainController'
            })
          .state('login', {
              url: '/login',
              title: 'Login',
              resolve: helper.resolveFor('modernizr', 'icons'),
              templateUrl: 'app/pages/login.html'
          })
          .state('register', {
              url: '/register',
              title: 'Register',
              resolve: helper.resolveFor('modernizr', 'icons','ngDialog','inputmask'),
              templateUrl: 'app/pages/register.html'
          })

          .state('upgrade', {
              url: '/upgrade',
              title: 'Upgrade',
              resolve: helper.resolveFor('modernizr', 'icons','ngDialog','inputmask'),
              templateUrl: 'app/pages/upgrade.html'
          })
          .state('forgot', {
              url: '/forgot',
              title: 'Forgot Password',
              resolve: helper.resolveFor('modernizr', 'icons'),
              templateUrl: 'app/pages/forgot.html'
          })
          .state('newPass', {
              url: '/newpassword',
              title: 'New Password',
              resolve: helper.resolveFor('modernizr', 'icons'),
              templateUrl: 'app/pages/newPassword.html'
          })
          .state('doctorTerms', {
              url: '/doctorTerms',
              title: 'Terms & Conditions',
              resolve: helper.resolveFor('modernizr', 'icons'),
              templateUrl: 'app/pages/terms.html'
          })
          .state('app', {
              url: '/app',
              abstract: true,
              templateUrl: helper.basepath('app.html'),
              resolve: helper.resolveFor('fastclick', 'modernizr','inputmask', 'ngDialog', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'easypiechart', 'toaster', 'whirl')
          })
          .state('app.dashboard', {
              url: '/dashboard',
              title: 'Dashboard',
              templateUrl: helper.basepath('dashboard.html'),
              resolve: helper.resolveFor('ngDialog')
          })
          .state('app.support', {
              url: '/support',
              title: 'Support',
              templateUrl: helper.basepath('support.html')
          })

          .state('app.updateFeatures', {
                url: '/updateFeatures',
                title: 'Update Featuers',
                templateUrl: helper.basepath('updateFeatures.html')
          })
          .state('app.updateAccount', {
                url: '/updateAccount',
                title: 'Update Account',
                templateUrl: helper.basepath('updateAccount.html'),
                resolve: helper.resolveFor('ui.select')
          })
          .state('app.email', {
                url: '/email',
                title: 'Email',
                templateUrl: helper.basepath('email.html'),
                resolve: helper.resolveFor('summernote')
          })
          .state('app.pfAddPatient', {
                url: '/pfAddPatient',
                templateUrl:  helper.basepath('pfAddPatient.view.html')
            })
            .state('app.pfNewPatient', {
                url: '/pfNewPatient',
                templateUrl:  helper.basepath('pfNewPatient.view.html'),
                resolve: helper.resolveFor('ui.select')
            })
            .state('app.pfFinanceInfo', {
                url: '/pfFinanceInfo',
                templateUrl:  helper.basepath('pfFinanceInfo.view.html')
            })
            .state('app.choosePFPlan', {
                url: '/choosePFPlan',
                templateUrl:  helper.basepath('choosePFPlan.view.html')
            })
            .state('app.pfAddedPatient', {
                url: '/pfAddedPatient',
                templateUrl:  helper.basepath('pfAddedPatient.view.html')
            })
            .state('app.pfPatientPayment', {
                url: '/pfPatientPayment',
                templateUrl:  helper.basepath('pfPatientPayment.view.html')
            })
            .state('app.pfPatientContract', {
                url: '/pfPatientContract',
                templateUrl:  helper.basepath('pfPatientContract.view.html')
            })
            .state('app.pfPatients', {
                url: '/pfPatients',
                templateUrl:  helper.basepath('pfPatients.view.html'),
                resolve: helper.resolveFor('datatables')
            })
            .state('app.pfPatientProfile', {
                url: '/pfPatientProfile',
                templateUrl:  helper.basepath('pfPatientProfile.view.html')
            })
            .state('app.pfContractDetails', {
                url: '/pfContractDetails',
                templateUrl:  helper.basepath('pfContractDetails.view.html')
            })

          //
          // CUSTOM RESOLVES
          //   Add your own resolves properties
          //   following this object extend
          //   method
          // -----------------------------------
          // .state('app.someroute', {
          //   url: '/some_url',
          //   templateUrl: 'path_to_template.html',
          //   controller: 'someController',
          //   resolve: angular.extend(
          //     helper.resolveFor(), {
          //     // YOUR RESOLVES GO HERE
          //     }
          //   )
          // })
          ;

    } // routesConfig

})();
