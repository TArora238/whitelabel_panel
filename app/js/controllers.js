/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
    'use strict';

    angular
      .module('app.pages')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];

    function LoginController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
      var vm = this;

      //$rootScope.$on('init', function() {
        activate();
      // });

      ////////////////

      function activate() {
        // bind here all data from the form
        if (localStorage.getItem('doctorToken')) {
          if ($state.current.name == "login") {
            $scope.mCtrl.checkDoctorToken(1);
            // $state.go('app.prospects');
          }
        }
        vm.login = {};
        vm.loginAdmin = function(form) {
          console.log(vm.login.doctor_email,vm.login.doctor_password);
          if (!vm.login.doctor_email || vm.login.doctor_email.trim().length == 0) {
            toaster.pop('warning', 'Enter a valid email', '');
            return false;
          }
          if (!vm.login.doctor_password || vm.login.doctor_password.trim().length == 0) {
            toaster.pop('warning', 'Enter a valid password', '');
            return false;
          }
          $scope.mCtrl.hitInProgress = true;
          cfpLoadingBar.start();
          $.post(api.url + "email_login", {
              doctor_email: vm.login.doctor_email.replace(/\s/g, '').toLowerCase(),
              doctor_password: vm.login.doctor_password,
              device_type: 0,
              app_type: 2,
              app_version: 100,
              device_id: localStorage.getItem('user')
            })
            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              console.log(data);
              //vm.loading=false;
              $timeout(function() {
                $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                // $state.go('app.addPatientStep1');
                // return false;
                if (data.flag == 116) {
                  localStorage.setItem('reset_password_token', data.reset_password_token);
                  localStorage.setItem('reset_email', vm.login.doctor_email);
                  $state.go('newPass');
                } else if (data.is_error == 0) {

                  $scope.mCtrl.clearPFData();
                  localStorage.removeItem('pfPatientEmail');
                  localStorage.removeItem('financePlans');
                  localStorage.removeItem('financeSave');
                  $scope.mCtrl.setLoginData(data, 1);
                }
                // else if (data.show_plan_screen == 1 || data.show_location_screen == 1 || data.show_bank_screen == 1 || data.show_payment_screen == 1||data.show_practice_screen==1) {
                //     vm.setAddData(data);
                //     localStorage.setItem('login_email',vm.login.doctor_email);
                //     if ($state.current.name != "addData") $state.go("addData");
                //     else $state.reload();
                //     // $state.go('app.prospects');
                // }
              })
            })
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
      .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','ngDialog'];

    function RegisterController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,ngDialog) {
      var vm = this;

      //$rootScope.$on('init', function() {
        activate();
      // });

      ////////////////

      function activate() {
        if (localStorage.getItem('doctorToken')) {
          $scope.mCtrl.checkDoctorToken(1);
        // $state.go('app.prospects');
        } else {
          localStorage.removeItem('doctorToken');
        }
    $timeout(function() {
      ngDialog.open({
        template: 'register_pop_modal',
        className: 'ngdialog-theme-default signUpPop',
        scope: $scope,
        showClose: false
      })
    }, 100);
    vm.closePop = function() {
      ngDialog.close();
    }
    vm.continueToUpgrade = function() {
      ngDialog.close();
      // $rootScope.get_settings();
      $state.go('upgrade');
    }
    $.post(api.url + 'doctor_speciality_list', {
        'access_token': localStorage.getItem('doctorToken')
      })
      .success(function(data, status) {
        if (typeof data === 'string')
          var data = JSON.parse(data);
        console.log(data);
        $timeout(function () {
          vm.specialityList = data.doctor_speciality;
      })
    })
    vm.specialitySelect = function(sT) {
      console.log(sT);
      console.log(vm.register.speciality_type);
      vm.register.doctor_speciality = sT;
    }
    vm.register = {};

    vm.registerFn = function() {
      // console.log($scope.register.phone);
      if (!vm.register.first_name || !vm.register.last_name || vm.register.first_name.trim().length == 0 || vm.register.last_name.trim().length == 0) {
        toaster.pop('warning', 'Enter a valid name', '');
        return false;
      }
      if (!vm.register.doctor_speciality) {
        toaster.pop('warning', 'Select a speciality', '');
        return false;
      }
      if (!vm.register.phone) {
        toaster.pop('warning', 'Enter a valid mobile', '');
        return false;
      } else var mobile = vm.register.phone.replace(/[^0-9]/g, "");
      if (mobile.length < 9) {
        toaster.pop('warning', 'Enter a valid mobile', '');
        return false;
      }
      // var mobile='';
      if (!mobile) {
        toaster.pop('warning', 'Enter a valid mobile', '');
        return false;
      } else {
        mobile = vm.register.phone.replace(/[^0-9]/g, "");
        if (mobile.length < 9) {
          toaster.pop('warning', 'Enter a valid mobile', '');
          return false;
        }
      }
      if (!vm.register.email || vm.register.email.trim().length == 0) {
        toaster.pop('warning', 'Enter a valid email', '');
        return false;
      }
      if (!vm.register.password || vm.register.password.trim().length == 0) {
        toaster.pop('warning', 'Enter a valid password', '');
        return false;
      }
      cfpLoadingBar.start();
      if(vm.register.referral_code)var ref = vm.register.referral_code.toUpperCase();
      else ref = '';
      $.post(api.url + "register_doctor", {
          doctor_email: vm.register.email.replace(/\s/g, '').toLowerCase(),
          doctor_first_name: vm.register.first_name,
          doctor_last_name: vm.register.last_name,
          doctor_mobile: $('#ext').val() + '-' + mobile,
          doctor_password: vm.register.password,
          doctor_speciality: vm.register.doctor_speciality,
          // date_of_birth: moment(vm.register.dob_date).format('DD-MM-YYYY'),
          referral_code: ref,
          device_type: 0,
          app_type: 2,
          app_version: 100,
          device_id: localStorage.getItem('user'),
        })
        .success(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
            $scope.mCtrl.clearPFData();
          $scope.mCtrl.flagPopUps(data.flag, data.is_error);
          if (data.is_error == 0) {
            $timeout(function() {
              localStorage.removeItem('pfPatientEmail');
              localStorage.removeItem('financePlans');
              localStorage.removeItem('financeSave');
              localStorage.setItem('bankFromFinance',0)
              localStorage.setItem('doctorToken', data.access_token);
              localStorage.setItem('bankScreen', data.show_bank_screen);
              localStorage.setItem('register_first_name', vm.register.first_name);
              localStorage.setItem('register_last_name', vm.register.last_name);
              localStorage.setItem('register_dob', vm.register.dob);
              localStorage.setItem('register_email', vm.register.email);
              console.log(localStorage.getItem('doctorToken'));
              $scope.mCtrl.setLoginData(data);
              ngDialog.openConfirm({
                template: 'register_done_modal',
                className: 'ngdialog-theme-default bigPop',
                scope: $scope,
                showClose: false
              }).then(function(value) {}, function(reason) {});

            })
          }

        })

    }

      }
    }
  })();


    /**=========================================================
     * Module: Upgrade Before Dashboard
    =========================================================*/

    (function() {
        'use strict';

        angular
          .module('app.pages')
          .controller('UpgradeController', UpgradeController);

        UpgradeController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];

        function UpgradeController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
          var vm = this;

          //$rootScope.$on('init', function() {
            activate();
           // });

          ////////////////

          function activate() {

            console.log(window.location.href);
    var aT = window.location.href.split("token=");
    if (aT[1])
      localStorage.setItem('doctorToken', aT[1]);

    $scope.mCtrl.checkToken();
    $scope.mCtrl.checkDoctorToken();

    vm.upgrade = {};
    vm.ngDialogPop = function(template, className) {
      ngDialog.openConfirm({
        template: template,
        className: 'ngdialog-theme-default ' + className,
        scope: $scope
      }).then(function(value) {}, function(reason) {});

    }
    $.post(api.url + "guarantee_type_list", {
        access_token: localStorage.getItem('doctorToken')
      })
      .success(function(data, status) {
        if (typeof data === 'string') data = JSON.parse(data);
        console.log(data);
        $scope.mCtrl.flagPopUps(data.flag, data.is_error);
        vm.upgrade.guarantee_types = data.guarantee_type;
        vm.upgrade.guarantee_type = vm.upgrade.guarantee_types[0].guarantee_type;
      });
    vm.amount = 149;
    vm.payNow = function(payment) {
      console.log(payment);
      vm.card = {};
      vm.ngDialogPop('cardPop', 'cardSmallPop');
    }
    vm.count=0;
    vm.makePayment = function() {
      if(vm.count==1){
        return false;
      }
      vm.count=1;
      $scope.mCtrl.hitInProgress = true;
      cfpLoadingBar.start();
      console.log(vm.card);
      Stripe.card.createToken({
        number: vm.card.cardNumber,
        cvc: vm.card.cardCVV,
        exp_month: vm.card.cardMonth,
        exp_year: vm.card.cardYear
      }, stripeCardResponseHandler);

      function stripeCardResponseHandler(status, response) {
        if (response.error) {
          cfpLoadingBar.complete();
          vm.count=0;
          $scope.mCtrl.hitInProgress = false;
          toaster.pop('error', response.error.message, '');
        } else {
          var data = {
            access_token: localStorage.getItem('doctorToken'),
            stripe_token: response.id,
            amount: vm.amount,
            pay_later: 0,
            is_guaranteed: 1,
            pf_months: 12
          }
          $.post(api.url + "pay_doctor_upgrade", data)
            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              $scope.mCtrl.hitInProgress = false;
              vm.count=0;
              if (data.is_error == 1) {
                if (data.override_text) {
                  cfpLoadingBar.complete();
                  toaster.pop('error', data.override_text, '');
                } else {
                  $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                }
              }
              if (data.is_error == 0) {
                ngDialog.close();
                $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                $scope.mCtrl.continueToDashboard();
              }
            });
        }
      }

    }


          }
        }
    })();

  /**=========================================================
   * Module: Forgot Password
  =========================================================*/

  (function() {
      'use strict';

      angular
        .module('app.pages')
        .controller('ForgotController', ForgotController);

      ForgotController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];

      function ForgotController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
        var vm = this;

        //$rootScope.$on('init', function() {
          activate();
        // });

        ////////////////

        function activate() {
          vm.forgot = {};

          vm.forgotEmailFn = function(form) {
            console.log(vm.forgot.doctor_email);
            if (!vm.forgot.doctor_email || vm.forgot.doctor_email.trim().length == 0) {
              toaster.pop('warning', 'Enter a valid email', '');
              return false;
            }
            $scope.mCtrl.hitInProgress = true;
            cfpLoadingBar.start();
            $.post(api.url + "forgot_password", {
                doctor_email: vm.forgot.doctor_email.replace(/\s/g, '').toLowerCase(),
                device_type: 0,
                app_type: 2,
                app_version: 100,
                device_id: localStorage.getItem('user')
              })
              .success(function(data, status) {
                if (typeof data === 'string')
                  var data = JSON.parse(data);
                $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                if (data.is_error == 0) {
                  $state.go('login');
                }
              })

          };
        }
      }
  })();


  /**=========================================================
   * Module: New Password Password
  =========================================================*/

  (function() {
      'use strict';

      angular
        .module('app.pages')
        .controller('NewPasswordController', NewPasswordController);

      NewPasswordController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];

      function NewPasswordController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
        var vm = this;

        //$rootScope.$on('init', function() {
          activate();
        // });

        ////////////////

        function activate() {
          if (localStorage.getItem('doctorToken')) {
      $scope.mCtrl.checkDoctorToken();
      $state.go('app.dashboard');
    } else if (!localStorage.getItem('reset_password_token')) {
      $state.go('login');
    }
    vm.newPass = {
      password: '',
      passwordC: ''
    };

    vm.setPassword = function() {
      if (!vm.newPass.password || vm.newPass.password.trim().length == 0) {
        toaster.pop('warning', 'Enter a valid password', '');
        return false;
      }
      localStorage.getItem('reset_password_token');
      localStorage.getItem('reset_email');
      cfpLoadingBar.start();
      $.post(api.url + "change_password", {
          reset_password_token: localStorage.getItem('reset_password_token'),
          doctor_email: localStorage.getItem('reset_email').replace(/\s/g, '').toLowerCase(),
          new_password: vm.newPass.password,
          device_type: 0,
          app_type: 2,
          app_version: 100,
          device_id: localStorage.getItem('user')
        })
        .success(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
          $scope.mCtrl.flagPopUps(data.flag, data.is_error);
          if (data.is_error == 0) {
            if (data.show_plan_screen == 1 || data.show_location_screen == 1 || data.show_bank_screen == 1 || data.show_payment_screen == 1 || data.show_practice_screen == 1) {
              $rootScope.setAddData(data);
              if ($state.current.name != "addData") $state.go("addData");
              else $state.reload();
            } else if (data.is_error == 0) {
              $scope.mCtrl.setLoginData(data, 1);
            }
          }
        })
    };

        }
      }
  })();


  /**=========================================================
   * Module: Dashboard
  =========================================================*/

  (function() {
      'use strict';

      angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

      DashboardController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];

      function DashboardController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
        var vm = this;

        //$rootScope.$on('init', function() {
          activate();
         // });

        ////////////////

        function activate() {
          $scope.mCtrl.checkToken();
    $scope.mCtrl.checkDoctorToken();
  vm.dashboard = {
      total: {},
      pf: {}
    };
    $.post(api.url + 'doctor_dashboard', {
        access_token: localStorage.getItem('doctorToken')
      })
      .success(function(data, status) {
        if (typeof data === 'string')
          var data = JSON.parse(data);
        console.log(data);
        if (data.is_error == 0) {
          vm.dashboard.total.amount_to_be_deposited = 0;
          vm.dashboard.total.revenue_made = 0;
          vm.dashboard.total.number_of_patients = 0;
          if (data.pf) {
            vm.dashboard.pf = data.pf;
            if (data.pf.amount_to_be_deposited != 0 || data.pf.amount_to_be_deposited != "0.00") vm.dashboard.total.amount_to_be_deposited += vm.dashboard.pf.amount_to_be_deposited.toFixed(2);
            vm.dashboard.total.revenue_made += parseFloat(vm.dashboard.pf.revenue_made);
            vm.dashboard.total.number_of_patients += vm.dashboard.pf.number_of_patients;
          }
        console.log(vm.dashboard);
          var revenue_made = vm.dashboard.total.revenue_made.toFixed(2);
          vm.dashboard.total.revenue_made = revenue_made;
          revenue_made = vm.dashboard.pf.revenue_made.toFixed(2);
          vm.dashboard.pf.revenue_made = revenue_made;

          var amount_to_be_deposited = vm.dashboard.total.amount_to_be_deposited.toFixed(2);
          vm.dashboard.total.amount_to_be_deposited = amount_to_be_deposited;

          if (data.pf.amount_to_be_deposited != 0 || data.pf.amount_to_be_deposited != "0.00") {
            amount_to_be_deposited = vm.dashboard.pf.amount_to_be_deposited.toFixed(2);
            vm.dashboard.pf.amount_to_be_deposited = amount_to_be_deposited;
          }
          console.log(vm.dashboard);
        }
      });
        }
      }
  })();


  /**=========================================================
   * Module: Forgot Password
  =========================================================*/

  // (function() {
  //     'use strict';
  //
  //     angular
  //       .module('app.pages')
  //       .controller('RegisterFormController', RegisterFormController);
  //
  //     RegisterFormController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];
  //
  //     function RegisterFormController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
  //       var vm = this;
  //
  //       //$rootScope.$on('init', function() {
  //         activate();
  //        // });
  //
  //       ////////////////
  //
  //       function activate() {}
  //     }
  // })();


  /**=========================================================
   * Module: Forgot Password
  =========================================================*/

  // (function() {
  //     'use strict';
  //
  //     angular
  //       .module('app.pages')
  //       .controller('RegisterFormController', RegisterFormController);
  //
  //     RegisterFormController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];
  //
  //     function RegisterFormController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
  //       var vm = this;
  //
  //       //$rootScope.$on('init', function() {
  //         activate();
  //        // });
  //
  //       ////////////////
  //
  //       function activate() {}
  //     }
  // })();



  /**=========================================================
   * Module: Forgot Password
  =========================================================*/

  // (function() {
  //     'use strict';
  //
  //     angular
  //       .module('app.pages')
  //       .controller('RegisterFormController', RegisterFormController);
  //
  //     RegisterFormController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout'];
  //
  //     function RegisterFormController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout) {
  //       var vm = this;
  //
  //       //$rootScope.$on('init', function() {
  //         activate();
  //        // });
  //
  //       ////////////////
  //
  //       function activate() {}
  //     }
  // })();
