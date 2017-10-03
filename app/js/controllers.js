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

                $rootScope.clearPFData();
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
            $rootScope.clearPFData();
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

  UpdateAccountController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', 'ngDialog'];

  function UpdateAccountController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, ngDialog) {
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
                  var data = JSON.parse(data.data);
                else var data = data.data;
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

  EmailController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', '$sce'];

  function EmailController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, $sce) {
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
                      // $scope.mCtrl.openToast('warning', 'Already added', '');
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
                  if ($scope.mCtrl.emailPattern.test(results.data[i])) {
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
          // $scope.mCtrl.openToast('warning', 'Enter a valid mail', '');
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
          console.log(data);
          vm.customEmails.template = data.data.toString();
          vm.customEmails.templateMesg = data.data.toString();
        })
      $http.get('app/data/email-templates.json')
        .then(function(data) {
          console.log(data);
          vm.templates = data.data;
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
        //   $scope.mCtrl.openToast('error', 'No Partner Selected', '');
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
            if (typeof data === 'string') data = JSON.parse(data.data);
            else var data = data.data;
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
 * Module: PF Patient List
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pf')
    .controller('PFPatientsController', PFPatientsController);

  PFPatientsController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', 'ngDialog', 'DTOptionsBuilder'];

  function PFPatientsController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, ngDialog, DTOptionsBuilder) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();

      vm.selectedFilterMode = 'Filter by Plan';
      vm.filterMode = function(plan) {
        vm.selectedFilterMode = plan;
      }
      vm.dtOptions = {
        "scrollX": true
      }
      vm.ngDialogPop = function(template, className) {
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});

      }
      vm.currentPage = 1;
      vm.itemsPerPage = 10;
      vm.maxSize = 5;
      vm.skip = 0;
      vm.pageChanged = function(currentPage) {
        vm.currentPage = currentPage;
        for (var i = 1; i <= vm.totalItems / 10 + 1; i++) {
          if (vm.currentPage == i) {
            vm.skip = 10 * (i - 1);
          }
        }
        vm.pf_patient_list = [];
        vm.initTable();
      };
      vm.initTable = function() {
        cfpLoadingBar.start();
        vm.pf_patient_list = [];
        $.post(api.url + "pf_patient_list", {
            access_token: localStorage.getItem('doctorToken'),
            limit: 100,
            offset: vm.skip
          })
          .then(function(data, status) {

            if (typeof data === 'string') data = JSON.parse(data);
            // console.log(data);
            $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            vm.pf_patient_list = data.patient_list;
            vm.totalItems = data.patient_list.length;

          });
      }
      vm.initTable();
      vm.patientDetails = function(patient) {
        localStorage.setItem('pfPatientData', JSON.stringify(patient));
        $state.go('app.pfPatientProfile');
      }
    }
  }
})();


/**=========================================================
 * Module: PF FINANCE INFO
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pf')
    .controller('PFFinanceInfoController', PFFinanceInfoController);

  PFFinanceInfoController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function PFFinanceInfoController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();
      localStorage.setItem('bankFromFinance', 0);
      vm.ngDialogPop = function(template, className, f) {
        if (f) {
          ngDialog.openConfirm({
            template: template,
            className: 'ngdialog-theme-default ' + className,
            scope: $scope,
            showClose: false,
          }).then(function(value) {}, function(reason) {});
        } else {
          ngDialog.openConfirm({
            template: template,
            className: 'ngdialog-theme-default ' + className,
            scope: $scope
          }).then(function(value) {}, function(reason) {});
        }

      }
      // $scope.ngDialogPop('no_guarantee_modal','bigPop');
      vm.customMonths = 0;
      vm.finance = {};
      vm.steps = 1;
      vm.pfMonths = [3, 6, 9, 12, 15, 18]
      vm.selectedMonth = [];
      vm.finance.customMonth = '';
      vm.monthCheck = [false, false, false, false, false, false];
      // vm.monthCheck=[true,true,false,false,false,false,false];
      console.log(localStorage.getItem('customMonth'));
      if (localStorage.getItem('customMonth')) {
        $timeout(function() {
          vm.finance.customMonth = parseInt(localStorage.getItem('customMonth'));
          console.log(vm.finance.customMonth);
          vm.selectedMonth.push(vm.finance.customMonth);
        }); // vm.customMonths = 1;
      }
      if (localStorage.getItem('selectedMonth')) {
        $timeout(function() {
          vm.monthCheck = JSON.parse(localStorage.getItem('selectedMonth'))
          for (var i = 0; i < 6; i++) {
            if (vm.monthCheck[i]) vm.selectedMonth.push(vm.pfMonths[i])
          }

          console.log(vm.selectedMonth);
        });
      }

      if (localStorage.getItem('financeScope') && localStorage.getItem('financeScope') != null) {
        vm.finance = JSON.parse(localStorage.getItem('financeScope'));

        vm.finance.customMonth = '';
      }
      vm.finance.customMonths = '';
      vm.chooseCustomMonth = function(month) {
        console.log(vm.finance.customMonth);
        for (var i = 0; i < vm.selectedMonth.length; i++) {
          if (vm.selectedMonth[i] != vm.finance.customMonth) {
            if (vm.selectedMonth[i] % 3 != 0) {
              vm.selectedMonth.splice(i, 1);
            }
          }
        }
        if (parseInt(month) > 0)
          vm.selectedMonth.push(parseInt(month));
        else {
          // if(parseInt(month)==0)
          //   $scope.mCtrl.openToast('error', "Please choose a valid month value", '');
          return false;
        }
        console.log(vm.selectedMonth);
      }
      vm.chooseMonth = function(month, index) {
        console.log(month, index);
        // console.log(vm.finance.customMonth);
        console.log(vm.monthCheck[index]);
        console.log(!vm.monthCheck[index]);

        if (vm.monthCheck[index]) {
          if (parseInt(month) > 0 && vm.selectedMonth.indexOf(parseInt(month)) == -1)
            vm.selectedMonth.push(parseInt(month));

        } else {
          vm.selectedMonth.splice(vm.selectedMonth.indexOf(parseInt(month)), 1)
        }


        console.log(vm.selectedMonth);
        console.log(vm.monthCheck);
      }
      vm.step2 = function() {
        if (!vm.finance.downpayment_amount) {
          toaster.pop('error', "Please enter a valid down payment amount", '');
          return false;
        }
        if (!vm.finance.treatment_amount) {
          toaster.pop('error', "Please enter a valid treatment amount", '');
          return false;
        }
        if (vm.selectedMonth.length == 0) {
          toaster.pop('error', "Please choose at least one valid month option for comparing", '');
          return false;
        }
        // console.log(vm.finance.downpayment_amount);
        // console.log(vm.finance.treatment_amount);

        if (parseFloat(vm.finance.downpayment_amount) >= parseFloat(vm.finance.treatment_amount)) {
          toaster.pop('error', "Down Payment Amount can't be greater or same than the treatment amount", '');
          return false;
        }
        if (vm.finance.downpayment_amount != 0) {
          if ($scope.mCtrl.showAccount == 1) {
            vm.ngDialogPop('showAccountPopForce', 'bigPop accountPop');
            return false;
          }
        }
        vm.selectedMonthTemp = vm.selectedMonth;
        vm.selectedMonth = vm.selectedMonthTemp.filter(function(item, pos) {
          return vm.selectedMonthTemp.indexOf(item) == pos;
        });
        // console.log(vm.finance.customMonth);
        // console.log(vm.selectedMonth);
        // return false;
        vm.finalData = [];
        vm.finance.financed_amount = vm.finance.treatment_amount - vm.finance.downpayment_amount;
        vm.selectedMonth = vm.selectedMonth.sort(function(a, b) {
          return a - b
        });
        for (var p = 0; p < vm.selectedMonth.length; p++) {
          vm.finance.remaining_amount = (vm.finance.financed_amount * (Math.pow((1 + (vm.finance.interest_rate / 1200)), (vm.selectedMonth[p])))).toFixed(2);
          // console.log(vm.finance.remaining_amount);
          vm.finance.recurring_amount = (vm.finance.remaining_amount / vm.selectedMonth[p]).toFixed(2);
          var d = {
            month: vm.selectedMonth[p],
            amount: vm.finance.remaining_amount,
            monthlyInstallment: vm.finance.recurring_amount,
            interest: vm.finance.interest_rate,
            downpayment: vm.finance.downpayment_amount,
            treatment_amount: vm.finance.treatment_amount,
            remaining_amount: vm.finance.remaining_amount
          }
          vm.finalData.push(d);
        }
        // vm.finalData = finalData;
        // vm.steps = 2;
        console.log(vm.monthCheck);
        localStorage.setItem('selectedMonth', JSON.stringify(vm.monthCheck));
        if (vm.finance.customMonth) localStorage.setItem('customMonth', vm.finance.customMonth);
        localStorage.setItem('financePlans', JSON.stringify(vm.finalData));
        localStorage.setItem('financeScope', JSON.stringify(vm.finance));

        $state.go('app.choosePFPlan');

        // vm.ngDialogPop('no_guarantee_modal','bigPop');
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
    .module('app.pf')
    .controller('ChoosePFPlanController', ChoosePFPlanController);

  ChoosePFPlanController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout', 'ngDialog'];

  function ChoosePFPlanController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout, ngDialog) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      vm.ngDialogPop = function(template, className) {
        vm.visible = true;
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});

      }
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();

      vm.steps = 2;
      vm.finance = {};
      if (localStorage.getItem('financeScope') && localStorage.getItem('financeScope') != null) {
        vm.finance = JSON.parse(localStorage.getItem('financeScope'));
      }
      if (localStorage.getItem('financePlans') && localStorage.getItem('financePlans') != null) {
        vm.finalData = JSON.parse(localStorage.getItem('financePlans'));
      }
      vm.is_guaranteed = JSON.parse(localStorage.getItem('profileData')).is_guaranteed;

      vm.viewPopup = function(month, Installment) {
        var mon = [];
        for (var i = 1; i <= month; i++) {
          if (i) {
            var k = i;
          }
          mon.push(k);
        }
        vm.installment = Installment;
        vm.months = mon;
        vm.ngDialogPop('view_Details', 'bigPop');
      }
      vm.selectPFPlan = function(f) {
        vm.steps = 3;
        console.log(f);
        vm.finance.number_of_payments = f.month;
        vm.addPatientFinance();
      }

      vm.addPatientFinance = function() {
        console.log(vm.finance);
        var d = {
          // access_token: localStorage.getItem('doctorToken'),
          // patient_id: vm.patients[0].patient_id,
          treatment_amount: vm.finance.treatment_amount,
          financed_amount: vm.finance.financed_amount || vm.finance.treatment_amount - vm.finance.downpayment_amount,
          downpayment_amount: vm.finance.downpayment_amount,
          number_of_payments: vm.finance.number_of_payments,
          interest_rate: vm.finance.interest_rate,
          recurring_amount: vm.finance.recurring_amount,
          // guarantee_type: vm.finance.guarantee_type,
          // start_date: moment(vm.finance.dob_date).format('YYYY-MM-DD'),
          remaining_amount: vm.finance.remaining_amount || (vm.finance.recurring_amount * vm.finance.number_of_payments)
        }
        var t = (vm.finance.recurring_amount * vm.finance.number_of_payments);
        vm.finance.remaining_amount = t.toFixed(2);
        localStorage.setItem('financeDataSave', JSON.stringify(vm.finance));
        localStorage.setItem('financePatientSave', JSON.stringify(d));
        $state.go('app.pfAddPatient');
      }
    }
  }
})();



/**=========================================================
 * Module: PF EMAIL CHECK CONTROLLER
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pf')
    .controller('PFAddPatientController', PFAddPatientController);

  PFAddPatientController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout'];

  function PFAddPatientController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();
      vm.addPatient = {};

      if (localStorage.getItem('pfPatientEmail'))
        vm.addPatient.userName = localStorage.getItem('pfPatientEmail');

      vm.checkEmailPatient = function() {
        if (!vm.addPatient.userName || vm.addPatient.userName.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid email/username', '');
          return false;
        }
        cfpLoadingBar.start();
        $.post(api.url + 'check_email_code', {
            access_token: localStorage.getItem('doctorToken'),
            patient_email_code: vm.addPatient.userName,
            dp_id: -1,
            is_primary: 1,
            contract_code: 0,
            contract_id: 0
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            console.log(data);
            // $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            cfpLoadingBar.complete();
            if (!data.is_error) {
              localStorage.setItem('patientProfile', JSON.stringify(data.patients))
              localStorage.setItem('pfPatientEmail', vm.addPatient.userName);

              $state.go('app.pfNewPatient');
            } else {
              if (data.flag == 72 || !$scope.mCtrl.emailPattern.test(vm.addPatient.userName)) {
                toaster.pop('warning', 'Enter a valid email if not already registered', '');
                localStorage.removeItem('pfPatientEmail', vm.addPatient.userName);
                return false;
              }
              localStorage.setItem('pfPatientEmail', vm.addPatient.userName);

              localStorage.setItem('patientProfile', 1);
              $state.go('app.pfNewPatient');
            }
          });
      }

    }
  }
})();



/**=========================================================
 * Module: PF Form Controller
=========================================================*/

(function() {
  'use strict';

  angular
    .module('app.pf')
    .controller('PFNewPatientController', PFNewPatientController);

  PFNewPatientController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope', 'cfpLoadingBar', 'api', '$timeout','ngDialog'];

  function PFNewPatientController($http, $state, $rootScope, toaster, $scope, cfpLoadingBar, api, $timeout,ngDialog) {
    var vm = this;

    //$rootScope.$on('init', function() {
    activate();
    // });

    ////////////////

    function activate() {
      $scope.mCtrl.checkToken();
      $scope.mCtrl.checkDoctorToken();
      vm.ngDialogPop = function(template, className, f) {
        if (f) {
          ngDialog.openConfirm({
            template: template,
            className: 'ngdialog-theme-default ' + className,
            scope: $scope,
            showClose: false,
          }).then(function(value) {}, function(reason) {});
        } else {
          ngDialog.openConfirm({
            template: template,
            className: 'ngdialog-theme-default ' + className,
            scope: $scope
          }).then(function(value) {}, function(reason) {});
        }

      }
      //$scope.mCtrl.checkDoctorFinancing();
      vm.addPatient = {};
      vm.address = {};
      vm.addressEmp = {};

      vm.addPatient.employer_mobile = '';
      // console.log(localStorage.getItem('patientProfile'));
      if (localStorage.getItem('patientProfile') && localStorage.getItem('patientProfile') != 1 && localStorage.getItem('patientProfile') != null) {
        var p = JSON.parse(localStorage.getItem('patientProfile'));
        vm.addPatient = p[0];
        console.log(vm.addPatient);
        // return false;
        var a = vm.addPatient.patient_mobile.split('-');
        var b = a[0].split('+');
        var code = b[1];
        vm.code = code;
        // for (var c = 0; c < $rootScope.countries.length; c++) {
        //   if ($rootScope.countries[c].Code == vm.code) {
        //     vm.addPatient.codeSelect = $rootScope.countries[c];
        //   }
        // }
        // vm.profile.phone = a[1];
        var p1 = a[1].slice(0, 3);
        var p2 = a[1].slice(3, 6);
        var p3 = a[1].slice(6);
        vm.addPatient.phone = '(' + p1 + ') ' + p2 + '-' + p3;
        if (vm.addPatient.employer_mobile) {
          var a = vm.addPatient.employer_mobile.split('-');
          var b = a[0].split('+');
          var code = b[1];
          vm.code = code;
          // for (var c = 0; c < $rootScope.countries.length; c++) {
          //   if ($rootScope.countries[c].Code == vm.code) {
          //     vm.addPatient.codeSelect = $rootScope.countries[c];
          //   }
          // }
          // vm.profile.phone = a[1];
          var p1 = a[1].slice(0, 3);
          var p2 = a[1].slice(3, 6);
          var p3 = a[1].slice(6);
          vm.addPatient.employer_mobile = '(' + p1 + ') ' + p2 + '-' + p3;
        } else vm.addPatient.employer_mobile = '';
        vm.addPatient.state = vm.addPatient.state_name;
        if (vm.addPatient.patient_gender == 1 || vm.addPatient.patient_gender_id == 1) vm.addPatient.patient_gender = 'Male';
        else if (vm.addPatient.patient_gender == 2 || vm.addPatient.patient_gender_id == 2) vm.addPatient.patient_gender = 'Female';
        else if (vm.addPatient.patient_gender == 3 || vm.addPatient.patient_gender_id == 3) vm.addPatient.patient_gender = 'Others';
        else vm.addPatient.patient_gender = '';
      } else {
        vm.addPatient.patient_email = vm.addPatient.email || localStorage.getItem('pfPatientEmail');
        vm.addPatient.patient_gender = '';
      }
      vm.address.selected = {};
      if (vm.addPatient.zip && vm.addPatient.zip != null) vm.address.selected.zip = vm.addPatient.zip.toString();
      if (vm.addPatient.employer_zip && vm.addPatient.employer_zip != null) vm.addressEmp.selected = vm.addPatient.employer_zip.toString();
      vm.genderSelect = function(gen) {
        vm.addPatient.patient_gender = gen;
        if (gen == 'Male') vm.addPatient.patient_gender_id = 1;
        if (gen == 'Female') vm.addPatient.patient_gender_id = 2;
        if (gen == 'Others') vm.addPatient.patient_gender_id = 3;
      }
      vm.invalidDate = true;
      vm.addPatient.dob_date = '';

      vm.check_date = function(dob) {
        vm.addPatient.dob_temp = new Date(dob.year, dob.month.month - 1, dob.day);
        console.log(vm.addPatient.dob_temp.getTime() > $scope.mCtrl.today.getTime());
        console.log(vm.addPatient.dob_temp);
        console.log($scope.mCtrl.today);
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
          if (vm.addPatient.dob_temp.getTime() > $rootScope.today.getTime()) {
            // console.log("Enter a valid Birthdate");
            vm.invalidDate = true;
            toaster.pop('error', "Enter a valid Birthdate", '');
            // console.log("3");
            return false;
          } else {
            vm.invalidDate = false;
            // console.log("4");
            vm.addPatient.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
          }
        } else if (vm.addPatient.dob_temp.getTime() > $rootScope.today.getTime()) {
          // console.log("Enter a valid Birthdate");
          vm.invalidDate = true;
          toaster.pop('error', 'Enter a valid Birthdate', '');
          return false;
        } else {
          vm.invalidDate = false;
          vm.addPatient.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
        }
        console.log(vm.invalidDate);
        console.log(vm.addPatient.dob_date);
      }
      vm.addPatient.dob = {
        month: '',
        day: '',
        year: ''
      };
      if (vm.addPatient.date_of_birth) {
        var d = vm.addPatient.date_of_birth.split('-');
        vm.DOBMonth = parseInt(d[0]) - 1;
        vm.DOBDay = parseInt(d[1]) - 1;
        vm.DOBYear = parseInt(d[2]);
        console.log(vm.DOBYear, vm.DOBDay, vm.DOBMonth);
        vm.addPatient.dob.day = parseInt(d[1]);
        vm.addPatient.dob.year = parseInt(d[2]);
        vm.addPatient.dob.month = $rootScope.months[vm.DOBMonth];
        vm.check_date(vm.addPatient.dob);
      }


      // var temp=JSON.parse(localStorage.getItem('plan_selected'));
      // console.log(temp);
      // vm.dp_id=temp[0].plan_id;
      if (vm.addPatient.patient_gender_id == 1) vm.addPatient.patient_gender = 'Male'
      if (vm.addPatient.patient_gender_id == 2) vm.addPatient.patient_gender = 'Female'
      if (vm.addPatient.patient_gender_id == 3) vm.addPatient.patient_gender = 'Others'

      if (vm.addPatient.patient_gender == 'Male') vm.addPatient.patient_gender_id = 1;
      if (vm.addPatient.patient_gender == 'Female') vm.addPatient.patient_gender_id = 2;
      if (vm.addPatient.patient_gender == 'Others') vm.addPatient.patient_gender_id = 3;
      vm.guaranteeSelect = function(mode) {
        console.log(mode);
        vm.addPatient.guarantee_type = mode;
        vm.addPatientData();
      }
      vm.noGuaranteeSelect = function() {
        vm.addPatient.guarantee_type = 1;
        vm.addPatientData();
      }
      vm.continueNG = function() {
        vm.addPatient.state_name = vm.addPatient.state;
        vm.addPatient.patient_mobile = '+' + vm.addPatient.codeSelect.Code + '-' + vm.addPatient.phone.replace(/[^0-9]/g, "");
        vm.addPatient.date_of_birth = moment(vm.addPatient.dob_date).format('MM-DD-YYYY');
        vm.finance.next_date = vm.next_date;
        localStorage.setItem('financeDataSave', JSON.stringify(vm.finance));
        localStorage.setItem('financeSaveRedirect', 1);
        localStorage.setItem('patientProfile', JSON.stringify([vm.addPatient]));
        ngDialog.close();
        $state.go('app.updateFeatures');
      }
      $.post(api.url + "guarantee_type_list", {
          access_token: localStorage.getItem('doctorToken')
        })
        .success(function(data, status) {
          if (typeof data === 'string') data = JSON.parse(data);
          $timeout(function() {

            $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            vm.addPatient.guarantee_types = data.guarantee_type;
            vm.addPatient.guarantee_type = vm.addPatient.guarantee_types[0].guarantee_type;
            // console.log(vm.addPatient.guarantee_types);
          })
        });
      vm.chooseGuarantee = function() {
        // console.log(vm.addPatient.patient_gender);
        // console.log(vm.addPatient.patient_gender_id);
        // return false;
        if(vm.invalidDate){
          toaster.pop('warning', 'Enter a valid Date of birth', '');
          return false;
        }
        if (!vm.addPatient.patient_first_name || vm.addPatient.patient_first_name.trim().length == 0 || !vm.addPatient.patient_last_name || vm.addPatient.patient_last_name.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid name', '');
          return false;
        }
        var mobile = '';

        if (!vm.addPatient.phone) {
          toaster.pop('warning', 'Enter a valid mobile', '');
          return false;
        } else {
          mobile = vm.addPatient.phone.replace(/[^0-9]/g, "");
          if (mobile.length < 9) {
            toaster.pop('warning', 'Enter a valid mobile', '');
            return false;
          }
        }
        if (!vm.addPatient.patient_email || vm.addPatient.patient_email.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid email', '');
          return false;
        }
        if (!vm.addPatient.patient_address) {
          toaster.pop('warning', 'Enter a valid address', '');
          return false;
        }
        if (!vm.addPatient.city_id) {
          toaster.pop('warning', 'Enter a valid zip', '');
          return false;
        }
        console.log(vm.addPatient.employer_mobile);
        if (vm.addPatient.employer_mobile === undefined) {
          toaster.pop('warning', 'Enter a valid mobile', '');
          return false;
        }
        if (vm.addPatient.employer_mobile) {
          var mobile = vm.addPatient.employer_mobile.replace(/[^0-9]/g, "");
          console.log(mobile.length);
          if (mobile.length < 9) {
            toaster.pop('warning', 'Enter a valid mobile', '');
            return false;
          }
        }

        if (vm.addPatient.zipEmp) {
          if (!vm.addPatient.employer_city_id) {
            toaster.pop('warning', 'Enter a valid zip for employer', '');
            return false;
          }
        }
        if (!vm.addPatient.patient_gender_id) {
          toaster.pop('warning', 'Enter a valid gender', '');
          return false;
        }
        vm.is_guaranteed = JSON.parse(localStorage.getItem('profileData')).is_guaranteed;
        console.log(vm.addPatient.guarantee_types);
        if (vm.is_guaranteed == 1)
          vm.ngDialogPop('guarantee_modal', 'bigPop');
        else {
          vm.visible = true;
          ngDialog.open({
            template: 'no_guarantee_modal',
            className: 'ngdialog-theme-default bigPop',
            scope: $scope,
            showClose: false
          })
          $('#ngdialog1').find('div.ngdialog-content').attr('ng-show', 'visible');
        }
      }
      // $scope.chooseGuarantee();
      vm.finance = JSON.parse(localStorage.getItem('financeDataSave'));
      // console.log(vm.finance);


      vm.addPatientData = function() {
        if (!vm.addPatient.patient_first_name || vm.addPatient.patient_first_name.trim().length == 0 || !vm.addPatient.patient_last_name || vm.addPatient.patient_last_name.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid name', '');
          return false;
        }
        var mobile = '';
        if (!vm.addPatient.phone) {
          toaster.pop('warning', 'Enter a valid mobile', '');
          return false;
        } else {
          mobile = vm.addPatient.phone.replace(/[^0-9]/g, "");
          if (mobile.length < 9) {
            toaster.pop('warning', 'Enter a valid mobile', '');
            return false;
          }
        }
        if (!vm.addPatient.patient_email || vm.addPatient.patient_email.trim().length == 0) {
          toaster.pop('warning', 'Enter a valid email', '');
          return false;
        }
        if (!vm.addPatient.patient_address) {
          toaster.pop('warning', 'Enter a valid address', '');
          return false;
        }
        if (!vm.addPatient.city_id) {
          toaster.pop('warning', 'Enter a valid zip', '');
          return false;
        }
        if (!vm.addPatient.patient_gender_id) {
          toaster.pop('warning', 'Enter a valid gender', '');
          return false;
        }
        if (vm.addPatient.employer_mobile) {
          var mobile = vm.addPatient.employer_mobile.replace(/[^0-9]/g, "");
          if (mobile.length < 9) {
            toaster.pop('warning', 'Enter a valid mobile', '');
            return false;
          }
        }
        if (vm.addPatient.zipEmp) {
          if (!vm.addPatient.employer_city_id) {
            toaster.pop('warning', 'Enter a valid zip for employer', '');
            return false;
          }
        }
        // console.log(vm.addPatient.patient_gender);
        // console.log(vm.addPatient.patient_gender_id);
        vm.next_date = new Date();
        vm.next_date.setDate(vm.next_date.getDate() + 1);
        // console.log(vm.addPatient.dob_date);
        // console.log(moment(vm.addPatient.dob_date).format('YYYY-MM-DD'));
        // return false;
        var data = {
          access_token: localStorage.getItem('doctorToken'),
          patient_email: vm.addPatient.patient_email.replace(/\s/g, '').toLowerCase(),
          patient_first_name: vm.addPatient.patient_first_name,
          patient_last_name: vm.addPatient.patient_last_name,
          patient_mobile: '+1-' + vm.addPatient.phone.replace(/[^0-9]/g, ""),
          patient_address: vm.addPatient.patient_address,
          date_of_birth: moment(vm.addPatient.dob_date).format('YYYY-MM-DD'),
          patient_gender: vm.addPatient.patient_gender_id,
          city_id: vm.addPatient.city_id,
          patient_ssn: vm.addPatient.patient_ssn,
          dl_number: vm.addPatient.dl_number,
          dp_id: -1,
          is_primary: 1,
          patients: [],
          contract_code: 0,
          contract_id: 0,

          treatment_amount: parseFloat(vm.finance.treatment_amount).toFixed(2),
          financed_amount: parseFloat(vm.finance.financed_amount).toFixed(2) || parseFloat(vm.finance.treatment_amount - vm.finance.downpayment_amount).toFixed(2),
          downpayment_amount: parseFloat(vm.finance.downpayment_amount).toFixed(2),
          number_of_payments: vm.finance.number_of_payments,
          interest_rate: parseFloat(vm.finance.interest_rate).toFixed(2),
          recurring_amount: parseFloat(vm.finance.recurring_amount).toFixed(2),
          guarantee_type: vm.addPatient.guarantee_type,
          start_date: moment(vm.next_date).format('YYYY-MM-DD'),
          remaining_amount: parseFloat(vm.finance.remaining_amount).toFixed(2),
          employer_name: vm.addPatient.employer_name || '',
          employer_mobile: vm.addPatient.employer_mobile ? '+1-' + vm.addPatient.employer_mobile.replace(/[^0-9]/g, "") : '',
          employer_address: vm.addPatient.employer_address || '',
          employer_city: vm.addPatient.employer_city_id || '',
          annual_income: vm.addPatient.annual_income || '',

        }
        vm.addPatient.state_name = vm.addPatient.state;
        vm.addPatient.patient_mobile = '+1-' + vm.addPatient.phone.replace(/[^0-9]/g, "");
        if (vm.addPatient.employer_mobile) vm.addPatient.employer_mobile = '+1-' + vm.addPatient.employer_mobile.replace(/[^0-9]/g, "");
        vm.addPatient.date_of_birth = moment(vm.addPatient.dob_date).format('MM-DD-YYYY');
        if (vm.addPatient.patient_id) data.patient_id = vm.addPatient.patient_id;
        cfpLoadingBar.start();
        console.log(vm.finance);
        vm.finance.next_date = vm.next_date;
        localStorage.setItem('financeDataSave', JSON.stringify(vm.finance));
        // return false;
        $.post(api.url + "add_pf_patient", data)
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            console.log(data);

            if (!data.is_error) {
              $scope.mCtrl.flagPopUps(data.flag, data.is_error);
              localStorage.setItem('patientProfileSummary', JSON.stringify([data]));
              // $state.go('app.pfFinanceInfo');

              var patient = {
                contract_id: data.contract_id,
                contract_code: data.contract_code,
                downpayment_amount: data.downpayment_amount,
                financed_amount: data.financed_amount,
                fixed_flat_fee: data.fixed_flat_fee,
                guarantee_percent: data.guarantee_percent,
                pf_id: data.pf_id,
                treatment_amount: data.treatment_amount,
                interest_rate: vm.finance.interest_rate,
                start_date: moment(vm.finance.dob_date).format('MM-DD-YYYY'),
                number_of_payments: vm.finance.number_of_payments,
                recurring_amount: vm.finance.recurring_amount,
                remaining_amount: vm.finance.remaining_amount
              }
              ngDialog.close();
              // localStorage.removeItem('financeSave');
              vm.addPatient.state_name = vm.addPatient.state;
              localStorage.setItem('patientProfile', JSON.stringify([vm.addPatient]))
              localStorage.setItem('pfPatientFinance', JSON.stringify(patient));
              $state.go('app.pfAddedPatient');
            } else if (data.tracking_id == '4251a' && data.err[0] == "patient_ssn is not valid tin number.") {
              toaster.pop('error', 'Enter a valid TIN', '');
              cfpLoadingBar.complete();
              $scope.mCtrl.hitInProgress = false;
              return false;
            } else {
              $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            }
          });

      }

      $scope.zipSelect = function(item, model, label, event) {
        // console.log(item);
        // console.log(item);
        // console.log(model);
        if (item.city_id)
          vm.addPatient.city_id = item.city_id;
        else vm.addPatient.city_id = '';
        if (item.city)
          vm.addPatient.city = item.city;
        else vm.addPatient.city = '';
        if (item.state_name)
          vm.addPatient.state = item.state_name;
        else vm.addPatient.state = '';
        if (!vm.addPatient.city_id) vm.addPatient.city_id = '';
      }
      $scope.zipSelectEmp = function(item, model, label, event) {
        console.log(item);
        if (item.city_id)
          vm.addPatient.employer_city_id = item.city_id;
        else vm.addPatient.employer_city_id = '';
        if (item.city)
          vm.addPatient.employer_city = item.city;
        else vm.addPatient.employer_city = '';
        if (item.state_name)
          vm.addPatient.employer_state = item.state_name;
        else vm.addPatient.employer_state = '';
        if (!vm.addPatient.employer_city_id) vm.addPatient.employer_city_id = '';
        console.log(vm.addPatient);
      }
    }
  }
})();



/**=========================================================
 * Module: PF ADDED / Review Screen
=========================================================*/

(function() {
    'use strict';

    angular
      .module('app.pf')
      .controller('PFAddedPatientController', PFAddedPatientController);

    PFAddedPatientController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','ngDialog'];

    function PFAddedPatientController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,ngDialog) {
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

    vm.confirmPatient = function() {
      vm.ngDialogPop('confirmPatient', 'bigPop');
    }
    vm.paymentScreen = function() {
      ngDialog.close();
      $state.go('app.pfPatientPayment');
    }

    vm.addPatient = {};
    vm.addPatient.terms = false;
    vm.patients = JSON.parse(localStorage.getItem('patientProfileSummary'));
    vm.finance = JSON.parse(localStorage.getItem('pfPatientFinance'));
    vm.finance = JSON.parse(localStorage.getItem('financeDataSave'));
    localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
    console.log(vm.finance);
    localStorage.setItem('patientProfileSummary', JSON.stringify(vm.patients));

      }
    }
})();


/**=========================================================
 * Module: PF Payment Screen
=========================================================*/

(function() {
    'use strict';

    angular
      .module('app.pf')
      .controller('PFPatientPaymentController', PFPatientPaymentController);

    PFPatientPaymentController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','ngDialog'];

    function PFPatientPaymentController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,ngDialog) {
      var vm = this;

      //$rootScope.$on('init', function() {
        activate();
       // });

      ////////////////

      function activate() {
        $scope.mCtrl.checkToken();
        $scope.mCtrl.checkDoctorToken();

        vm.signImg = '';
    vm.signature = '';
    vm.saveSign = function () {
      vm.signature = $scope.accept();
      console.log(vm.signature);
      vm.getdataUrl();
    }
    vm.clearSign = function () {
      vm.signImg = '';
      vm.signature.dataUrl = '';
    }
    $(document).click(function(event) {
    if(!$(event.target).closest('#signPad').length) {
          vm.signature = $scope.accept();
          console.log(vm.signature);
          if(vm.signature&&!vm.signature.isEmpty){
            vm.getdataUrl();
          }
        }
    });
    vm.getdataUrl = function () {
      console.log(vm.signature.dataUrl);
      if(vm.signature.dataUrl){
        var dataURI = vm.signature.dataUrl
        var byteString = atob(dataURI.split(',')[1]);
        var ab = new ArrayBuffer(byteString.length);
        var ia = new Uint8Array(ab);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([ab], {
          type: 'image/jpeg'
        });
        console.log(blob);
        vm.signImg = blob;
        console.log(vm.signImg);
      }
      else{
        // alert('Kootriya sala dekh ke sign kar !!!!!');
        console.log(vm.signature.dataUrl);
      }
    }
    vm.pfPatientFinance = JSON.parse(localStorage.getItem('pfPatientFinance'));
    vm.pfTotalAmount = parseInt(vm.pfPatientFinance.downpayment_amount) + parseInt(vm.pfPatientFinance.fixed_flat_fee);
    vm.ngDialogPop = function(template, className, f) {
      if (f) {
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope,
          showClose: false,
        }).then(function(value) {}, function(reason) {});
      } else {
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});
      }

    }

    vm.patients = JSON.parse(localStorage.getItem('patientProfileSummary'));
    console.log(vm.patients);
    if (vm.patients[0].payment_sources && vm.patients[0].payment_sources.length > 0) {
      vm.sourceAdded = 1;
      vm.payment_source_list = vm.patients[0].payment_sources;
    } else vm.sourceAdded = 0;

    vm.count=0;
    vm.makePaymentPatient = function() {
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
          $scope.mCtrl.hitInProgress = false;
          vm.count=0;
          toaster.pop('error', response.error.message, '');
        } else {
          // var data = {
          //   access_token: localStorage.getItem('doctorToken'),
          //   stripe_token: response.id,
          //   patient_id: vm.patients[0].patient_id,
          //   payment_source_type: 3,
          //   contract_id: vm.pfPatientFinance.contract_id,
          //   apf_id: vm.patients[0].apf_id,
          //   start_date : moment(vm.finance.dob_date).format('YYYY-MM-DD'),
          //   patient_signature : vm.signImg
          // }
          var form = new FormData();
          form.append('access_token',localStorage.getItem('doctorToken'));
          form.append('stripe_token',response.id);
          form.append('patient_id',vm.patients[0].patient_id);
          form.append('payment_source_type',3);
          form.append('contract_id',vm.pfPatientFinance.contract_id);
          form.append('apf_id',vm.patients[0].apf_id);
          form.append('start_date',moment(vm.finance.dob_date).format('YYYY-MM-DD'));
          form.append('patient_signature',vm.signImg);
          // $.post(api.url + "pay_pf", data)
          $http({
              url: api.url + 'pay_pf',
              method: 'POST',
              data: form,
              transformRequest: false,
              headers: {
                'Content-Type': undefined
              }
            })
            .then(function(data, status) {
              console.log(data);
              if (typeof data === 'string')
                var data = JSON.parse(data.data);
              else var data = data.data;
              // ngDialog.close();
              vm.count=0;
              if (data.is_error == 1) {
                if (data.override_text) {
                  cfpLoadingBar.complete();
                  toaster.pop('error', data.override_text, '');
                } else {
                  if(data.flag==38){
                    localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
                    toaster.pop('error','Patient already completed for this patient','');
                    $state.go('app.pfPatientContract');
                  }
                  else $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                }
              }
              if (data.is_error == 0) {
                // console.log(data);

                $scope.mCtrl.flagPopUps(data.flag, data.is_error);
                ngDialog.close();
                vm.finance.next_date = vm.finance.dob_date;
                localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
                $state.go('app.pfPatientContract');

              }

            })
        }
      }
    }
    vm.payFromCard = function(data) {
      cfpLoadingBar.start();
      // var data = {
      //   access_token: localStorage.getItem('doctorToken'),
      //   patient_id: vm.patients[0].patient_id,
      //   source_id: data.source_id,
      //   contract_id: vm.pfPatientFinance.contract_id,
      //   apf_id: vm.patients[0].apf_id||218,
      //   start_date : moment(vm.finance.dob_date).format('YYYY-MM-DD'),
      //   patient_signature : vm.signImg
      // }
      var form = new FormData();
      form.append('access_token',localStorage.getItem('doctorToken'));
      form.append('source_id',data.source_id);
      form.append('patient_id',vm.patients[0].patient_id);
      // form.append('payment_source_type',3);
      form.append('contract_id',vm.pfPatientFinance.contract_id);
      form.append('apf_id',vm.patients[0].apf_id);
      form.append('start_date',moment(vm.finance.dob_date).format('YYYY-MM-DD'));
      form.append('patient_signature',vm.signImg);
      // $.post(api.url + "pay_pf", data)
      $http({
          url: api.url + 'pay_pf',
          method: 'POST',
          data: form,
          transformRequest: false,
          headers: {
            'Content-Type': undefined
          }
        })
      // $.post(api.url + "pay_pf", data)
        .then(function(data, status) {
          console.log(data);
          if (typeof data === 'string')
            var data = JSON.parse(data.data);
          // ngDialog.close();
          else var data = data.data;
          vm.count=0;
          if (data.is_error == 1) {
            if (data.override_text) {
              cfpLoadingBar.complete();
              toaster.pop('error', data.override_text, '');
            } else {
              if(data.flag==38){
                localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
                toaster.pop('error','Patient already completed for this patient','');
                $state.go('app.pfPatientContract');
              }
              else $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            }
          }
          if (data.is_error == 0) {
            // console.log(data);
            $scope.mCtrl.flagPopUps(data.flag, data.is_error);
            ngDialog.close();
            vm.finance.next_date = vm.finance.dob_date;
            localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
            $state.go('app.pfPatientContract');
          }

        })
    }
    vm.finance = JSON.parse(localStorage.getItem('financeDataSave'));
    // console.log(vm.finance);
    vm.finance.dob_date = '';
    // console.log(new Date().getMonth());
    // console.log(new Date().getYear());
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    vm.currentMonth = new Date().getMonth();


    vm.finance.dob = {
      month: $rootScope.months[new Date().getMonth()],
      day: parseInt(new Date().getDate()+1),
      year: parseInt(1900 + new Date().getYear())
    };
    vm.finance.dob_date = new Date(vm.finance.dob.year, vm.finance.dob.month.month - 1, vm.finance.dob.day)
    console.log(vm.finance.dob);
    vm.invalidDate = false;
    vm.check_start_date = function(dob) {
      vm.finance.dob_temp = new Date(dob.year, dob.month.month - 1, dob.day);
      // console.log(vm.finance.dob_temp);
      // console.log(dob);
      // console.log(vm.finance.dob_temp.getTime());
      // console.log($rootScope.today);
      // console.log(vm.finance.dob_temp.getTime() > $rootScope.today.getTime());
      if (dob.year % 4 != 0 && dob.month.month == 2 && dob.day > 29) {
        toaster.pop('error', 'Please enter a valid date', '');
        vm.invalidDate = true;
        // console.log("1");
        return false;
      } else if (dob.month.month == 4 || dob.month.month == 6 || dob.month.month == 9 || dob.month.month == 11) {
        if (dob.day > 30) {
          toaster.pop('error', 'Please enter a valid date', '');
          vm.invalidDate = true;
          // console.log("2");
          return false;
        } else if (vm.finance.dob_temp.getTime() < $rootScope.today.getTime()) {
          // console.log("Enter a valid Birthdate");
          vm.invalidDate = true;
          toaster.pop('warning', "Payments must start from a future date", '');
          // console.log("3");
          return false;
        } else {
          vm.invalidDate = false;
          // console.log("4");
          vm.finance.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
        }
      } else if (vm.finance.dob_temp.getTime() < $rootScope.today.getTime()) {
        // console.log("Enter a valid Birthdate");
        vm.invalidDate = true;
        toaster.pop('warning', "Payments must start from a future date", '');
        // console.log("3");
        return false;
      } else {
        vm.invalidDate = false;
        // console.log("4");
        vm.finance.dob_date = new Date(dob.year, dob.month.month - 1, dob.day)
      }
    }
      }
    }
})();


/**=========================================================
 * Module: PF Contract Screen
=========================================================*/

(function() {
    'use strict';

    angular
      .module('app.pf')
      .controller('PFPatientContractController', PFPatientContractController);

    PFPatientContractController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','ngDialog'];

    function PFPatientContractController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,ngDialog) {
      var vm = this;

      //$rootScope.$on('init', function() {
        activate();
       // });

      ////////////////

      function activate() {
        $scope.mCtrl.checkToken();
        $scope.mCtrl.checkDoctorToken();
        if ($scope.mCtrl.showAccount == 1) {
          $timeout(function () {
            vm.ngDialogPop('showAccountPopReminder','bigPop accountPop');
              return false;
          },1000);
        }
        vm.is_guaranteed = JSON.parse(localStorage.getItem('profileData')).is_guaranteed;
        vm.goToStartPF = function () {
          $rootScope.clearPFData();
          $state.go('app.pfPatients');
        }
        vm.totalAmount = localStorage.getItem('totalAmount');
      vm.ngDialogPop = function(template, className) {
        vm.visible = true;
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});
      }
      // console.log(localStorage.getItem('patientProfile'));
      vm.pfPatientFinance = JSON.parse(localStorage.getItem('pfPatientFinance'));
      vm.finance = JSON.parse(localStorage.getItem('financeDataSave'));
      vm.doctorPractice = JSON.parse(localStorage.getItem('profileData'));
      vm.patients = JSON.parse(localStorage.getItem('patientProfileSummary'));
      console.log(vm.patients);
      }
    }
})();


/**=========================================================
 * Module: PF Contract Screen
=========================================================*/

// (function() {
//     'use strict';
//
//     angular
//       .module('app.pf')
//       .controller('PFAddedPatientController', PfAddedPatientController);
//
//     PFAddedPatientController.$inject = ['$http', '$state', '$rootScope', 'toaster', '$scope','cfpLoadingBar','api','$timeout','ngDialog'];
//
//     function PFAddedPatientController($http, $state, $rootScope, toaster, $scope,cfpLoadingBar,api,$timeout,ngDialog) {
//       var vm = this;
//
//       //$rootScope.$on('init', function() {
//         activate();
//        // });
//
//       ////////////////
//
//       function activate() {
//         $scope.mCtrl.checkToken();
//         $scope.mCtrl.checkDoctorToken();
//         vm.ngDialogPop = function(template, className) {
//       vm.visible = true;
//       ngDialog.openConfirm({
//         template: template,
//         className: 'ngdialog-theme-default ' + className,
//         scope: $scope
//       }).then(function(value) {}, function(reason) {});
//
//     }
//
//     vm.confirmPatient = function() {
//       vm.ngDialogPop('confirmPatient', 'bigPop');
//     }
//     vm.paymentScreen = function() {
//       ngDialog.close();
//       $state.go('app.pfPatientPayment');
//     }
//
//     vm.addPatient = {};
//     vm.addPatient.terms = false;
//     vm.patients = JSON.parse(localStorage.getItem('patientProfileSummary'));
//     vm.finance = JSON.parse(localStorage.getItem('pfPatientFinance'));
//     vm.finance = JSON.parse(localStorage.getItem('financeDataSave'));
//     localStorage.setItem('financeDataSave',JSON.stringify(vm.finance));
//     console.log(vm.finance);
//     localStorage.setItem('patientProfileSummary', JSON.stringify(vm.patients));
//
//       }
//     }
// })();
