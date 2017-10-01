/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pages')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function LoginController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
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
        console.log(vm.login.doctor_email, vm.login.doctor_password);
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

  RegisterController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', 'ngDialog'];

  function RegisterController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, ngDialog) {
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
          $timeout(function() {
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
        if (vm.register.referral_code) var ref = vm.register.referral_code.toUpperCase();
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
                localStorage.setItem('bankFromFinance', 0)
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

  UpgradeController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function UpgradeController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
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
      vm.count = 0;
      vm.makePayment = function() {
        if (vm.count == 1) {
          return false;
        }
        vm.count = 1;
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
            vm.count = 0;
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
                vm.count = 0;
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

  ForgotController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function ForgotController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
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

  NewPasswordController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function NewPasswordController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
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

  DashboardController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function DashboardController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
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
 * Module: Update Features
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.feature')
    .controller('UpdateFeaturesController', UpdateFeaturesController);

  UpdateFeaturesController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', 'ngDialog'];

  function UpdateFeaturesController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, ngDialog) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();
      vm.ngDialogPop = function(template, className) {
        vm.visible = true;
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});

      }
      vm.continueToPF = function() {
        $state.go('app.pfNewPatient');
      }
      $.post(api.url + "check_doctor_upgrade", {
          access_token: localStorage.getItem('doctorToken')
        })
        .success(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
          $scope.mCtrl.flagPopUps(data.flag, data.is_error);
          // ngDialog.close();
          if (data.is_error == 0) {
            if (data.show_pf == 0 && data.is_guaranteed == 1) {
              $scope.mCtrl.is_guaranteed = 1;
              var redirect = localStorage.getItem('financeSaveRedirect');
              console.log(redirect);
              if (redirect == 1) {
                localStorage.setItem('financeSaveRedirect', 0);
                vm.visible = true;
                ngDialog.openConfirm({
                  template: 'upgrade_pf_modal',
                  className: 'ngdialog-theme-default bigPop',
                  scope: $scope,
                  showClose: false
                }).then(function(value) {}, function(reason) {});
                $('#ngdialog1').find('div.ngdialog-content').attr('ng-show', 'visible');

              }
            }
            console.log(data);
            vm.upgrade = {};
            vm.upgrade.show_pf = data.show_pf;
            // vm.upgrade.show_pdp=data.show_pdp;
            vm.upgrade.is_guaranteed = data.is_guaranteed;
            // vm.upgrade.pdp_monthly=data.pdp_monthly;
            // vm.upgrade.pdp_yearly=data.pdp_yearly;
            vm.upgrade.pf_monthly = data.pf_monthly || '';
            vm.upgrade.pf_yearly = data.pf_yearly;
            vm.pfDivs = [];
            // vm.pdpDivs=[];

            if (vm.upgrade.pf_monthly) {


              if (vm.upgrade.show_pf == 1 || vm.upgrade.is_guaranteed == 0) {
                vm.pfDivs[0] = {};
                vm.pfDivs[1] = {};

                vm.pfDivs[0].name = "Patient Financing Monthly";
                vm.pfDivs[0].type = "Monthly";
                vm.pfDivs[0].amount = "$ " + vm.upgrade.pf_monthly;
                vm.pfDivs[0].amountInt = vm.upgrade.pf_monthly;
                vm.pfDivs[0].show = vm.upgrade.show_pf;
                vm.pfDivs[0].pf_months = 1;
                vm.pfDivs[0].is_guaranteed = 1;
                vm.pfDivs[0].note = '';

                vm.pfDivs[1].name = "Patient Financing Yearly";
                vm.pfDivs[1].type = "Yearly";
                vm.pfDivs[1].amount = "$ " + vm.upgrade.pf_yearly;
                vm.pfDivs[1].amountInt = vm.upgrade.pf_yearly;
                vm.pfDivs[1].show = vm.upgrade.show_pf;
                vm.pfDivs[1].pf_months = 12;
                vm.pfDivs[1].is_guaranteed = 1;
                vm.pfDivs[1].note = ''
                // Guaranteed/Non-Guaranteed Payment Option for each patient
              }
            } else {
              vm.pfDivs[0] = {};
              vm.pfDivs[0].name = "Patient Financing Yearly";
              vm.pfDivs[0].type = "Yearly";
              vm.pfDivs[0].amount = "$ " + vm.upgrade.pf_yearly;
              vm.pfDivs[0].amountInt = vm.upgrade.pf_yearly;
              vm.pfDivs[0].show = vm.upgrade.show_pf;
              vm.pfDivs[0].pf_months = 12;
              vm.pfDivs[0].is_guaranteed = 1;
              vm.pfDivs[0].note = ''
            }
          }
        });
      vm.payNow = function(payment) {
        vm.payment = payment;
        console.log(payment);
        vm.card = {};
        vm.ngDialogPop('cardPop', 'cardSmallPop');
      }
      vm.count = 0;
      vm.makePayment = function() {
        if (vm.count == 1) {
          return false;
        }
        vm.count = 1;
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
            vm.count = 0;
            $scope.mCtrl.hitInProgress = false;
            toaster.pop('error', response.error.message, '');
          } else {
            var data = {
              access_token: localStorage.getItem('doctorToken'),
              stripe_token: response.id,
              amount: vm.payment.amountInt,
              pay_later: 0,
              is_guaranteed: vm.payment.is_guaranteed
            }

            if (vm.upgrade.show_pf == 1 || vm.upgrade.is_guaranteed == 0) {
              data.pf_months = vm.payment.pf_months;
            } else {
              data.pf_months = 0;
            }
            $.post(api.url + "pay_doctor_upgrade", data)
              .success(function(data, status) {
                if (typeof data === 'string')
                  var data = JSON.parse(data);
                vm.count = 0;
                $scope.mCtrl.hitInProgress = false;
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
                  // $state.reload();
                  var redirect = localStorage.getItem('financeSaveRedirect');
                  console.log(redirect);
                  if (redirect == 1) {
                    localStorage.setItem('financeSaveRedirect', 0);
                    vm.visible = true;
                    ngDialog.openConfirm({
                      template: 'upgrade_pf_modal',
                      className: 'ngdialog-theme-default bigPop',
                      scope: $scope,
                      showClose: false
                    }).then(function(value) {}, function(reason) {});
                    $('#ngdialog1').find('div.ngdialog-content').attr('ng-show', 'visible');

                  } else
                    $state.go('app.dashboard')
                }
              });
          }
        }

      }
    }
  }
})();


/**=========================================================
 * Module: Support
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.support')
    .controller('SupportController', SupportController);

  SupportController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function SupportController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();
      vm.support = {};
      $.post(api.url + 'support_page', {})
        .success(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
          console.log(data);
          $timeout(function() {
            vm.support = data;
            console.log(vm.support);
            vm.brochures = vm.support.brochures;
          })
        });
    }
  }
})();

/**=========================================================
 * Module: Update Account
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.account')
    .controller('UpdateAccountController', UpdateAccountController);

  UpdateAccountController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout','ngDialog'];

  function UpdateAccountController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout,ngDialog) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      vm.accountStep = 1;
      vm.ngDialogPop = function(template, className) {
        vm.visible = true;
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});

      }
      vm.register = {};
      vm.account_types = ['individual', 'company'];
      vm.practice = {};
      vm.account_type = function(aT) {
        vm.register.account_type = aT;
      }
      vm.practice.practice_name = '';
      if (localStorage.getItem('practiceInfo')) {
        vm.practice = JSON.parse(localStorage.getItem('practiceInfo'));
      }
      vm.goToStep = function() {
        if (!vm.practice.practice_name || vm.practice.practice_name.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid name', '');
          return false;
        }
        var mobile = '';
        console.log(vm.practice.practice_email);
        if (!vm.practice.practice_email || vm.practice.practice_email.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid email', '');
          return false;
        }

        if (!vm.practice.practice_mobile) {
          toaster.pop('warning', 'Enter a valid mobile', '');
          return false;
        } else {
          mobile = vm.practice.practice_mobile.replace(/[^0-9]/g, "");
          if (mobile.length < 9) {
            toaster.pop('warning', 'Enter a valid mobile', '');
            return false;
          } else {
            vm.mobile = mobile;
          }
        }
        // vm.practice.practice_type.practice_type
        vm.practice.practice_type_id = 1;
        localStorage.setItem('practiceInfo', JSON.stringify(vm.practice));
        vm.accountStep = 2;
      }
      vm.checkTerms = function() {
        console.log(vm.register.terms);
      }
      vm.locations = [];
      vm.createToken = function() {
        console.log(vm.address);
        if (!vm.register.account_name || vm.register.account_name.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid name', '');
          return false;
        }
        if (!vm.register.account_name || vm.register.account_name.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid name', '');
          return false;
        }
        if (!vm.register.routing_number || vm.register.routing_number.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid routing number', '');
          return false;
        }
        if (vm.register.routing_number != vm.register.confirm_routing_number) {
          toaster.pop('error', "Routing numbers don't match", '');
          return false;
        }
        if (!vm.register.account_number || vm.register.account_number.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid account number', '');
          return false;
        }

        if (vm.register.account_number != vm.register.confirm_account_number) {
          toaster.pop('error', "Account numbers don't match", '');
          return false;
        }
        if (vm.locations.length == 0) {
          toaster.pop('error', 'Add an address to continue', '');
          return false;
        }
        if (!vm.address) {
          toaster.pop('error', 'Select an address to continue', '');
          return false;
        }
        // if (!vm.register.File) {
        //   toaster.pop('error', 'Select a document to continue', '');
        //   return false;
        // }
        $scope.mCtrl.hitInProgress = true;
        cfpLoadingBar.start();
        Stripe.bankAccount.createToken({
          country: 'US',
          currency: "USD",
          routing_number: vm.register.routing_number,
          account_number: vm.register.account_number,
          account_holder_name: vm.register.account_name,
          account_holder_type: vm.register.account_type
        }, stripeResponseHandler);

        function stripeResponseHandler(status, response) {
          console.log(response);
          if (response.id) {
            if (vm.register.account_type == 'individual') vm.register.account_type_id = 1;
            else vm.register.account_type_id = 2;

            var form = new FormData();
            form.append('access_token', localStorage.getItem('doctorToken'));
            form.append('show_bank_screen', localStorage.getItem('bankScreen'));
            form.append('show_plan_screen', localStorage.getItem('planScreen'));
            form.append('show_practice_screen', localStorage.getItem('practiceScreen'));
            form.append('show_payment_screen', localStorage.getItem('paymentScreen'));
            form.append('show_location_screen', localStorage.getItem('locationScreen'));
            form.append('address', JSON.stringify(vm.address));
            form.append('locations', localStorage.getItem('locations'));
            form.append('stripe_token', response.id);
            form.append('device_type', 0);
            form.append('tin', vm.practice.tin);
            form.append('practice_name', vm.practice.practice_name);
            form.append('practice_email', vm.practice.practice_email);
            form.append('practice_mobile', '+1-' + vm.mobile);
            form.append('practice_type', 1);
            form.append('device_id', localStorage.getItem('user'));
            form.append('business_type_id', vm.register.account_type_id);
            form.append('date_of_birth', moment(vm.register.dob_date).format('DD-MM-YYYY'));
            // form.append('verification_doc', vm.register.File, vm.register.FileName);
            if (vm.register.account_type_id == 2) {
              form.append('business_name', vm.register.business_name);
              form.append('business_tax_id', vm.register.business_tax_id);
            }
            // $.post(api.url + "add_doctor_bank", form)
            $http({
                url: api.url + 'add_doctor_bank',
                method: 'POST',
                data: form,
                transformRequest: false,
                headers: {
                  'Content-Type': undefined
                }
              })
              .success(function(data, status) {
                if (typeof data === 'string')
                  var data = JSON.parse(data);

                if (data.is_error == 0) {
                  $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                  // $rootScope.checkDoctorToken(1);
                  // $rootScope.setLoginData(data,1);
                  $rootScope.setLoginData(data);
                  $rootScope.register = {};
                  localStorage.setItem('bankScreen', 0);
                  localStorage.removeItem('practiceInfo');
                  $rootScope.showAccount = 0;
                  ngDialog.openConfirm({
                    template: 'register_done_modal',
                    className: 'ngdialog-theme-default bigPop',
                    scope: $scope,
                    showClose: false
                  }).then(function(value) {}, function(reason) {});

                } else {
                  if (data.tracking_id == '3354b6' || data.err == 'tin is not valid ssn/tin.') {
                    toaster.pop('error', 'Please enter a valid TIN', '')
                    $scope.mCtrl.hitInProgress = false;
                    return false;
                  }
                }

              })
          } else {
            cfpLoadingBar.complete();
            $scope.mCtrl.hitInProgress = false;
            toaster.pop('error', 'Invalid Account or Routing Number', '');
          }

        }
      }
      vm.addAddressPop = function() {
        vm.location = {}
        vm.ngDialogPop('addAddressPop', 'bigPop');
      }
      vm.locationIndeces = function() {
        if (vm.locationIndex == -1) {
          vm.locationIndexDefault = 0;
        }
      }
      vm.selectBankAddress = function(location, id) {
        console.log(vm.locations);
        console.log(location);
        if (!location || !location.city || !location.zip) {
          toaster.pop('error', 'Select a valid Zipcode', '');
          return false;
        }
        if (!location.practice_location_address) {
          toaster.pop('error', 'Enter a valid address', '');
          return false;
        }
        if (id > -1) {

          vm.address = {
            city: location.city,
            postal_code: location.zip,
            line1: location.practice_location_address,
          };
          if (location.state_name) vm.address.state = location.state_name
          if (location.state) vm.address.state = location.state

          vm.locationIndex = id;
          vm.locationIndexDefault = id;
        } else {
          console.log(location);
          vm.address = {
            city: location.city,
            postal_code: location.zip.zip,
            state: location.state,
            line1: location.practice_location_address,
          };
          location.zip = location.zip.zip;
          vm.locationIndex = 0;
          vm.locationIndexDefault = 0;
          ngDialog.close();
          vm.locations.push(location);

        }
        console.log(vm.address);

      }
      vm.locationZipSelect = function(item, model, label, event) {
        console.log(vm.location.zip);
        if (vm.location.zip.city_id)
          vm.location.city_id = vm.location.zip.city_id;
        else vm.location.city_id = '';
        if (vm.location.zip.city)
          vm.location.city = vm.location.zip.city;
        else vm.location.city = '';
        if (vm.location.zip.state_name)
          vm.location.state = vm.location.zip.state_name;
        else vm.location.state = '';
        if (!vm.location.city_id) vm.location.city_id = '';
      }
      vm.register.dob = {
        month: '',
        day: '',
        year: ''
      };
      vm.invalidDate = false;
      vm.register.dob_date = '';

      vm.check_date = function(dob) {
        vm.register.dob_temp = new Date(dob.year, dob.month.month - 1, dob.day);
        // console.log(vm.register.dob_temp.getTime() > $rootScope.today.getTime());
        // console.log(vm.register.dob_temp);
        // console.log($rootScope.today);
        if (dob.year % 4 != 0 && dob.month.month == 2 && dob.day > 29) {
          toaster.pop('error', 'Please enter a valid date', '');
          vm.invalidDate = true;
          return false;
        } else if (dob.month.month == 4 || dob.month.month == 6 || dob.month.month == 9 || dob.month.month == 11) {
          if (dob.day > 30) {
            toaster.pop('error', 'Please enter a valid date', '');
            vm.invalidDate = true;
            return false;
          }
          if (vm.register.dob_temp.getTime() > $rootScope.today.getTime()) {
            // console.log("Enter a valid Birthdate");
            vm.invalidDate = true;
            toaster.pop('error', 'Enter a valid Birthdate', '');
            // console.log("3");
            return false;
          } else {
            vm.invalidDate = false;
            // console.log("4");
            vm.register.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
          }
        } else if (vm.register.dob_temp.getTime() > $rootScope.today.getTime()) {
          // console.log("Enter a valid Birthdate");
          vm.invalidDate = true;
          toaster.pop('error', 'Enter a valid Birthdate', '');
          return false;
        } else {
          vm.invalidDate = false;
          vm.register.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
        }
      }
    }
  }
})();


/**=========================================================
 * Module: Email
=========================================================*/

(function() {
    'use strict';

    angular
      .module('app.email')
      .controller('EmailController', EmailController);

    EmailController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','$sce'];

    function EmailController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,$sce) {
      var vm = this;

      //$rootScope.$on('init', function() {
        activate();
       // });

      ////////////////

      function activate() {
        $scope.mCtrl.checkToken();

    vm.ngDialogPop = function(template, className) {
      vm.visible = true;
      ngDialog.openConfirm({
        template: template,
        className: 'ngdialog-theme-default ' + className,
        scope: $scope
      }).then(function(value) {}, function(reason) {});

    }
    // GMAIL
    var clientId = '888750246117-hdiq9usud39eefq9h32houp62o3pjosv.apps.googleusercontent.com';
    var apiKey = 'AIzaSyAUnB3N3ZeNuxlz3oHO5fCmQ__JFxDTBLc';
    var scopes = 'https://www.googleapis.com/auth/contacts.readonly';

    vm.getGoogleContacts = function() {
      vm.manualEnter = 0;
      gapi.client.setApiKey(apiKey);
      window.setTimeout(authorize);
    };

    function authorize() {
      gapi.auth.authorize({
        client_id: clientId,
        scope: scopes,
        immediate: false,
        cookie_policy: 'single_host_origin'
      }, handleAuthorization);
    }

    function handleAuthorization(authorizationResult) {
      // vm.patients_selected = [];
      vm.accountUsed = '';
      if (authorizationResult && !authorizationResult.error) {
        $.get("https://www.google.com/m8/feeds/contacts/default/thin?alt=json&access_token=" + authorizationResult.access_token + "&max-results=500&v=3.0",
          function(response) {
            //process the response here
            console.log(response);
            var entries = response.feed.entry;
            var contacts = [];
            vm.accountUsed = response.feed.id.$t;
            $timeout(function() {
              for (var i = 0; i < entries.length; i++) {
                var name = entries[i].title.$t;
                var emails = entries[i].gd$email || [];
                for (var j = 0; j < emails.length; j++) {
                  var email = emails[j].address || '';
                  if (email)
                    contacts.push({
                      email: email
                    });
                  if ($.inArray(email, vm.patients_selected) != -1) {
                    // vm.mCtrl.openToast('warning', 'Already added', '');
                    // vm.customEmails.manualEmail = '';
                    // return false;
                  } else vm.patients_selected.push(email);
                }
              }
            });
            console.log(contacts);
            console.log(vm.patients_selected);
          });
        gapi.auth.setToken(null);
        gapi.auth.signOut();
      }
    }


    vm.uploadCSV = function() {
      vm.manualEnter = 0;
      $('.csvUpload').trigger('click');
    }

    vm.csvUpload = function(files) {
      vm.accountUsed = '';
      // vm.patients_selected = [];
      if (files.length > 0) {
        console.log(files);
        Papa.parse(files[0], {
          complete: function(results) {
            console.log(results);
            $timeout(function() {
              for (var i = 1; i < results.data.length; i++) {
                console.log(results.data[i]);
                if (vm.mCtrl.emailPattern.test(results.data[i])) {
                  if ($.inArray(results.data[i][0], vm.patients_selected) == -1) {
                    vm.patients_selected.push(results.data[i][0])
                  }
                } else {
                  console.log("Not a valid email");
                }

              }
              console.log(vm.patients_selected);
            })
          }
        });
      } else {
        toaster.pop('error', 'Please choose a file', '');

      }
    }
    vm.manualEnter = 0;
    vm.patients_selected = [];
    vm.manualChoose = function() {
      vm.manualEnter = 1;
      vm.manualEmail = '';
      // vm.patients_selected = [];
      var userArray = new Array();
    }
    vm.addPatient = function(email) {
      if (!email) {
        // vm.mCtrl.openToast('warning', 'Enter a valid mail', '');
        return false;
      }
      if ($.inArray(email, vm.patients_selected) != -1) {
        toaster.pop('warning', 'Already added', '');
        vm.customEmails.manualEmail = '';
        return false;
      } else {
        vm.patients_selected.push(email);
        vm.customEmails.manualEmail = '';
        return false;
      }
    }
    vm.deleteEmail = function(id) {
      vm.patients_selected.splice(id, 1);
    }




    cfpLoadingBar.start();
    vm.customEmails = {};
    $http.get('app/data/email-template.txt')
      .then(function(data) {

        vm.customEmails.template = data.toString();
        vm.customEmails.templateMesg = data.toString();
      })
    $http.get('app/data/email-templates.json')
      .then(function(data) {
        vm.templates = data;
      })
    vm.selectedTemplate = "Select a template";
    vm.selectTemplate = function(id) {
      $timeout(function() {
        vm.customEmails.message = vm.templates[id].message;
        vm.customEmails.subject = vm.templates[id].subject;
        vm.selectedTemplate = vm.templates[id].title;
        vm.editMessage();
      });
    }
    var userNumList = new Array();
    var userIDList = new Array();

    vm.customEmails.message = '';
    vm.editMessage = function() {
      var body = vm.customEmails.templateMesg;
      // console.log(vm.customEmails.message);
      if (vm.customEmails.message) vm.customEmails.template = body.replace('"Your message comes here"', vm.customEmails.message);
      else vm.customEmails.template = body;
    }
    vm.trustedHtml = function(plainText) {
      return $sce.trustAsHtml(plainText);
    }
    vm.options = {
      language: 'en',
      allowedContent: true,
      entities: false
    };
    vm.clearAll = function() {
      vm.patients_selected = [];
    }
    vm.sendEmail = function() {
      console.log("assd");

      // if (vm.isAll == 0 && vm.partner_selected.length == 0) {
      //   vm.mCtrl.openToast('error', 'No Partner Selected', '');
      //   return false;
      // }
      if (vm.patients_selected.length == 0) {
        toaster.pop('error', 'No Patient Selected', '');
        return false;
      }
      if (vm.customEmails.message == '') {
        toaster.pop('error', 'Message is empty', '');
        return false;
      }
      cfpLoadingBar.start();
      var t = vm.customEmails.template.replace('width:100%;display:table;', 'min-height:30px;');
      // for (var i = 0; i < $scope.patients_selected.length; i++) {
      //   $scope.patients_selected[i]
      // }
      var data = {
        access_token: localStorage.getItem('doctorToken'),
        email_subject: vm.customEmails.subject,
        email_body: t,
        email_array: vm.patients_selected
        // is_all: vm.isAll
      }

      // if (vm.isAll == 1) {
      //   data.partner_ids = 0;
      // } else data.partner_ids = vm.customEmails.user_id;

      // $.post(api.url + "mass_email_partners", data)
      var form = new FormData();
      form.append('access_token', localStorage.getItem('doctorToken'));
      form.append('email_subject', vm.customEmails.subject);
      form.append('email_body', t);
      form.append('emails_array', vm.patients_selected);

      $http({
          url: api.url + 'mass_email',
          method: 'POST',
          data: form,
          transformRequest: false,
          headers: {
            'Content-Type': undefined
          }
        })
        .then(function(data, status) {
          vm.doSubmit = false;
          if (typeof data === 'string') data = JSON.parse(data);
          $scope.mCtrl.flagPopUps(data.flag, data.is_error);
          if (data.is_error == 0) {
            // vm.customEmails={}
            // $state.reload();
            vm.doSubmit = false;
            toaster.pop('success', 'Mail Sent Successfully', '');
          } else {
            vm.doSubmit = false;
            // $scope.isAll==1
          }
        });
    }
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
