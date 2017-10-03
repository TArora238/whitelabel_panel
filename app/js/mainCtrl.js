// ========================================================
// *   Run Function for Main Ctrl
// *   Main configs needed before everything
// ========================================================
(function() {
  'use strict';

  angular
    .module('doctorPanel')
    .run(mainRun)
    .filter('phoneNumber',function () {
            return function (number) {
                 if (!number) { return ''; }
                 number = String(number);
                //  console.log(number);
                 var num=number.split('-');
                //  console.log(num);
                 if(num.length>1){
                   var code=num[0];
                   number=num[1];
                 }
                 else{
                   var code='';
                   number=num[0];
                 }
                 number = number.replace(/[^0-9]*/g, '');
                 var formattedNumber = number;

                 var c = (number[0] == '1') ? '1' : '';
                 number = number[0] == '1' ? number.slice(1) : number;
                //  var c = number[0];
                 var area = number.substring(0, 3);
                 var front = number.substring(3, 6);
                 var end = number.substring(6, 10);
                //  console.log(c,area,front,end);
                 if (front) {
                     formattedNumber = (code + " (" + area + ") " + front);
                 }
                 if (end) {
                     formattedNumber += ("-" + end);
                 }
                 return formattedNumber;
             };
         })
  mainRun.$inject = ['$http', '$state', '$timeout', 'api', 'cfpLoadingBar', '$interval', '$rootScope'];

  function mainRun($http, $state, $timeout, api, cfpLoadingBar, $interval, $rootScope) {
    // console.log("execution");
    // console.log('inside main run');
    var aT = window.location.href.split("token=");
    if (aT[1])
      localStorage.setItem('doctorToken', aT[1]);
    if (typeof localStorage === 'object') {
      try {
        localStorage.setItem('localStorage', 1);
        localStorage.removeItem('localStorage');
      } catch (e) {
        Storage.prototype._setItem = Storage.prototype.setItem;
        Storage.prototype.setItem = function() {};
        alert('Your web browser does not support storing settings locally, most common cause of this is using "Private Browsing Mode". Some settings may not work properly for you. Please switch to normal browsing mode.');
      }
    }
    // if (!localStorage.getItem('doctorToken')) {
    //   localStorage.removeItem('doctorToken');
    //   $state.go('login');
    // }

    $rootScope.get_settings = function() {

      if (localStorage.getItem('user')) {
        $.post(api.url + "get_settings", {
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user')
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            // console.log(api.url);
            api.url = data.server_url + '/';
            // console.log(api.url);

            Stripe.setPublishableKey(data.stripe_pk);
            $timeout(function() {
              $rootScope.messageList = data.popups;

              // $rootScope.$emit('init');
            })
            $rootScope.profile = {};
            // $rootScope.checkDoctorToken();
          });

      } else {
        $rootScope.deviceId();
      }

    }
    $rootScope.deviceId = function() {
      new Fingerprint2().get(function(result, components) {
        var hash = result;
        localStorage.setItem('user', hash);
        $rootScope.get_settings();
      });
    }
    $rootScope.deviceId();

    $rootScope.days = [];
    $rootScope.months = [];
    $rootScope.birthYears = [];
    $rootScope.newYears = [];
    var d = new Date();
    $rootScope.today = new Date();
    // console.log($rootScope.today);
    $rootScope.next_month_date = new Date();
    $rootScope.next_month_date.setDate(7);
    $rootScope.next_month_date.setMonth($rootScope.next_month_date.getMonth() + 1);
    $rootScope.next_month_date = moment($rootScope.next_month_date).format('MMM DD, YYYY');
    // console.log($rootScope.next_month_date);
    d.getYear();
    // console.log(d.getYear());
    for (var i = 0; i < 31; i++) {
      $rootScope.days[i] = i + 1;
    }
    for (var j = 0; j < 12; j++) {
      // console.log($rootScope.months[j]);
      $rootScope.months[j] = {
        month: '',
        month_name: ''
      };
      if (j + 1 == 1) $rootScope.months[j].month_name = 'January';
      if (j + 1 == 2) $rootScope.months[j].month_name = 'February';
      if (j + 1 == 3) $rootScope.months[j].month_name = 'March';
      if (j + 1 == 4) $rootScope.months[j].month_name = 'April';
      if (j + 1 == 5) $rootScope.months[j].month_name = 'May';
      if (j + 1 == 6) $rootScope.months[j].month_name = 'June';
      if (j + 1 == 7) $rootScope.months[j].month_name = 'July';
      if (j + 1 == 8) $rootScope.months[j].month_name = 'August';
      if (j + 1 == 9) $rootScope.months[j].month_name = 'September';
      if (j + 1 == 10) $rootScope.months[j].month_name = 'October';
      if (j + 1 == 11) $rootScope.months[j].month_name = 'November';
      if (j + 1 == 12) $rootScope.months[j].month_name = 'December';
      $rootScope.months[j].month = j + 1;
    }
    var currentYear = 1900 + d.getYear();
    for (var i = currentYear; i > 1900; i--) {
      $rootScope.birthYears[currentYear - i] = i;
    }
    for (var i = currentYear; i < 2100; i++) {
      $rootScope.newYears[i - currentYear] = i;
    }
  }

})();






/**=========================================================
 * Module: access-login.js
 * Demo for login api
 =========================================================*/

(function() {
  'use strict';

  angular
    .module('app.mainCtrl')
    .controller('mainController', mainController)

  mainController.$inject = ['$http', '$state', '$scope', '$timeout', 'api', 'cfpLoadingBar', '$interval', '$rootScope', 'ngDialog', 'toaster'];
  // 'toaster', 'toastrConfig',
  // toaster, toastrConfig,
  function mainController($http, $state, $scope, $timeout, api, cfpLoadingBar, $interval, $rootScope, ngDialog, toaster) {
    var vm = this;

    // $rootScope.$on('init', function() {
      activate();
    // });
    ////////////////

    function activate() {
      $rootScope.$on("$locationChangeSuccess", function() {
        $timeout(function() {
          $(window).scrollTop(0);
          window.scrollTo(0, 0);
          ngDialog.close();
          $('.modal-backdrop').remove();
        });
      });
      // console.log(api.url);

      vm.emailPattern = /^[a-z0-9A-Z]+[a-zA-Z0-9.+_]+@[a-z0-9A-Z.-]+\.[a-zA-Z]{2,7}$/;
      vm.namePattern = /^[a-zA-Z 0-9]*$/;
      vm.amountPattern = /^\d+(\.\d{1,2})?$/;
      // console.log("inside main");
      vm.goToAddPlan = function() {
        vm.showPlans = 0;
        $state.go('app.pdpAddPlan');
      }
      vm.goToAddProspect = function() {

        $('.tour-backdrop').remove();
        // $state.reload();

        $state.go('app.addprospects');

      }
      vm.goToAddBank = function() {
        $state.go('app.updateAccount');
      }
      vm.clearPFData = function() {
        localStorage.removeItem('pfPatientFinance');
        localStorage.removeItem('financeDataSave');
        localStorage.removeItem('profileData');
        localStorage.removeItem('patientProfileSummary');
        localStorage.removeItem('financeScope');
        localStorage.removeItem('pfPatientEmail');
        localStorage.removeItem('selectedMonth');
        localStorage.removeItem('customMonth');
      }
      vm.today = new Date();
      vm.headers = {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
      vm.ngDialogPop = function(template, className) {
        ngDialog.openConfirm({
          template: template,
          className: 'ngdialog-theme-default ' + className,
          scope: $scope
        }).then(function(value) {}, function(reason) {});

      }
      vm.loginRedirect = function() {
        localStorage.removeItem('doctorToken');
        $state.go('login');
      }
      vm.continueToDashboard = function(a) {
        // ngDialog.close();
        $rootScope.get_settings();

        if (localStorage.getItem('bankFromFinance') != 1) $state.go('app.dashboard');
        else $state.go('app.pfFinanceInfo');
        // if(a!=1){
        //     $timeout(function () {
        //       $rootScope.tourGuide();
        //     },200);
        // }
      }


      vm.continueToBank = function() {
        // ngDialog.close();
        $state.go('app.updateAccount');
      }

      vm.checkToken = function() {
        if (!localStorage.getItem('doctorToken') || localStorage.getItem('doctorToken') == null) {
          localStorage.removeItem('doctorToken');
          $state.go('login');
          return false;
        }
      }
      vm.bankFromFinance = function() {
        localStorage.setItem('bankFromFinance', 1);
        $state.go('app.updateAccount');
      }
      vm.showAccountPop = function() {
        vm.ngDialogPop('showAccountPop', 'bigPop accountPop');
      }
      vm.cancelPatientPF = function() {
        vm.ngDialogPop('cancelConfirmFirst', 'smallPop');
      }
      vm.cancelPatient = function() {
        vm.ngDialogPop('cancelConfirmFirst', 'smallPop');
      }
      vm.cancelYes = function() {
        vm.clearPFData();
        $state.go('app.pfPatients');
      }
      if ($state.current.name.indexOf('app')!==-1&&!localStorage.getItem('profileData')) {
        $state.go('login')
      } else if (localStorage.getItem('profileData')) {
        vm.doctor_profile = JSON.parse(localStorage.getItem('profileData'));
        if (vm.doctor_profile.plan_id) {

          if (vm.doctor_profile.plan_id.indexOf('2') > -1) {
            vm.showPFMenu = 1;
          } else {
            vm.showPFMenu = 0;
          }

        }
        if (vm.doctor_profile.is_pdp == 0) {
          vm.showPDPMenu = 0;
        } else {
          vm.showPDPMenu = 1;
        }
      }

      vm.hitInProgress = false;
      vm.countNotfs = function() {
        vm.unreadNotfs = 0;
        for (var i = 0; i < vm.doctor_notifications.length; i++) {
          if (vm.doctor_notifications[i].read_at == null) {
            vm.unreadNotfs++;
          }
        }
      }
      vm.get_notifications = function() {
        if (!localStorage.getItem('doctorToken') || localStorage.getItem('doctorToken') == null) {
          return false;
        } else {
          vm.doctor_notifications = [];
        }
        $.post(api.url + "get_notifications", {
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user'),
            access_token: localStorage.getItem('doctorToken'),
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            if (data.flag == 4) {
              $interval.cancel(notfInterval);
            }
            $timeout(function() {
              vm.doctor_notifications = data.doctor_notifications;
              vm.countNotfs();
            });
          });
      }
      vm.get_notifications();
      var notfInterval = $interval(function() {
        vm.get_notifications();
      }, 60000);
      vm.read_notification = function(id, index) {
        vm.doctor_notifications = [];
        $.post(api.url + "read_notification", {
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user'),
            access_token: localStorage.getItem('doctorToken'),
            dn_id: id
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);

            $timeout(function() {

              vm.doctor_notifications = data.doctor_notifications;
              vm.countNotfs();
            })
          });
      }
      vm.acceptProspect = function(id, index) {
        vm.doctor_notifications = [];
        $.post(api.url + "accept_prospect", {
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user'),
            access_token: localStorage.getItem('doctorToken'),
            dn_id: id
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            vm.read_notification(id);
          });
      }
      vm.rejectProspect = function(id, index) {
        vm.doctor_notifications = [];
        $.post(api.url + "reject_prospect", {
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user'),
            access_token: localStorage.getItem('doctorToken'),
            dn_id: id
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            vm.read_notification(id);
          });
      }

      vm.flagPopUps = function(flag, error) {
        cfpLoadingBar.complete();
        vm.hitInProgress = false;
        if (flag == 4) {
          ngDialog.close();
          // $rootScope.openToast('error', 'Session Expired', '');
          localStorage.removeItem('doctorToken');
          $state.go('login');
          return false;
        }
        if (!$rootScope.messageList || $rootScope.messageList.length == 0) $rootScope.get_settings();
        else {
          for (var i = 0; i < $rootScope.messageList.length; i++) {
            if (flag == $rootScope.messageList[i].flag && $rootScope.messageList[i].show_popup == 1) {
              if (error == 1)
                toaster.pop('error', $rootScope.messageList[i].text, '');
              else
                toaster.pop('success', $rootScope.messageList[i].text, '');
              vm.hitInProgress = false;
            }
          }
        }
      }
      vm.EmailAvailable = false;
      vm.PhoneAvailable = false;
      vm.check_email = function(id, email) {
        if (email) {
          $.post(api.url + 'check_doctor_email', {
              doctor_email: email,
              doctor_id: id
            })
            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              // console.log(data);
              vm.flagPopUps(data.flag, data.is_error);
              if (data.is_error == 0) {
                vm.EmailAvailable = false;
              } else {
                vm.EmailAvailable = true;
              }
            });
        } else {
          toaster.pop('error', 'Enter a valid email');
          return false;
        }

      }
      vm.check_mobile = function(id, mobile, code) {
        // console.log(code);
        if (code == '') {
          code = $('#ext').val();
          // console.log(code);
        }
        if (mobile) {
          var mob = mobile.replace(/[^0-9]/g, "");
          if (code.Code) var doc = '+' + code.Code + '-' + mobile.replace(/[^0-9]/g, "");
          else if (code != '') var doc = code + '-' + mobile.replace(/[^0-9]/g, "");
          $.post(api.url + 'check_doctor_mobile', {
              doctor_mobile: doc,
              doctor_id: id
            })

            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              // console.log(data);
              vm.flagPopUps(data.flag, data.is_error);
              if (data.is_error == 0) {
                vm.PhoneAvailable = false;
              } else {
                vm.PhoneAvailable = true;
              }
            });
        }
        // else{
        //   $rootScope.openToast('error','Enter a valid mobile');
        //   return false;
        // }

      }
      vm.check_patient_email = function(id, email) {
        // console.log(email);
        if (email) {
          $.post(api.url + 'check_patient_email', {
              patient_email: email,
              patient_id: id
            })
            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              // console.log(data);
              vm.flagPopUps(data.flag, data.is_error);
              if (data.is_error == 0) {
                vm.EmailAvailable = false;
              } else {
                vm.EmailAvailable = true;
              }
            });
        }

      }
      vm.check_patient_mobile = function(id, mobile, code) {
        if (mobile) {
          $.post(api.url + 'check_patient_mobile', {
              patient_mobile: '+' + code.Code + '-' + mobile.replace(/[^0-9]/g, ""),
              patient_id: id
            })

            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              // console.log(data);
              vm.flagPopUps(data.flag, data.is_error);
              if (data.is_error == 0) {
                vm.PhoneAvailable = false;
              } else {
                vm.PhoneAvailable = true;
              }
            });
        }
      }
      vm.states=[];
      vm.getLocation = function(query) {
        // console.log(query);
        if(query.length<4)return false;
        return $.post(api.url + 'get_zipcode', {
          zipcode: query
        }).then(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
          // console.log(data);
          if (data.is_error == 0) {
            // return vm.items=data.zip_info;
            // console.log(data);
            vm.states = data.zip_info;
            // vm.$apply();
            // if(vm.states.length>0)$('typeahead-popup').css('display','block');
            $timeout(function() {
              return vm.states;
            })
            // querySearch(query);
          }

        });
      }
      vm.changePasswordFn = function() {
        vm.change = {};
        vm.ngDialogPop('change_password_modal', 'bigPop');
      }
      vm.changePasswordApi = function() {
        if (!vm.change.oldPassword || vm.change.oldPassword.trim().length == 0 || !vm.change.newPassword || vm.change.newPassword.trim().length == 0) {
          vm.openToast('warning', 'Enter a valid password', '');
          return false;
        }

        cfpLoadingBar.start();
        $.post(api.url + "change_password", {
          access_token: localStorage.getItem('doctorToken'),
          old_password: vm.change.oldPassword,
          new_password: vm.change.newPassword,
          device_type: 0,
          app_type: 2,
          app_version: 100,
          device_id: localStorage.getItem('user')
        }).success(function(data, status) {
          if (typeof data === 'string')
            var data = JSON.parse(data);
          // console.log(data);
          vm.flagPopUps(data.flag, data.is_error);

          if (data.is_error == 0) ngDialog.close();
        });
      }
      vm.checkDoctorToken = function(login) {
        // vm.freshUser = localStorage.getItem('freshUser')||0;
        // localStorage.setItem('freshUser',vm.freshUser);

        // console.log(localStorage.getItem('doctorToken'));
        // console.log("asdf");
        if (!localStorage.getItem('doctorToken')) {
          localStorage.removeItem('doctorToken')
          $state.go('login');
          // vm.openToast('warning','Access token has expired, please Login to continue','');
        } else {
          // console.log(localStorage.getItem('doctorToken'));
          $.post(api.url + "access_token_login", {
              access_token: localStorage.getItem('doctorToken'),
              device_type: 0,
              app_type: 2,
              app_version: 100,
              device_id: localStorage.getItem('user')
            })
            .success(function(data, status) {
              if (typeof data === 'string')
                var data = JSON.parse(data);
              // console.log(data);
              vm.flagPopUps(data.flag, data.is_error);
              if (data.show_plan_screen == 1 || data.show_location_screen == 1 || data.show_bank_screen == 1 || data.show_payment_screen == 1 || data.show_practice_screen == 1) {
                vm.setLoginData(data);
                // if ($state.current.name != "app.dashboard") $state.go("app.dashboard");
                // else $state.reload();
                vm.checkBankScreen();
                if (login == 'register') $state.go('addData');
                if (login == 'bank') $state.reload();
              } else if (data.is_error == 0) {
                vm.setLoginData(data, login);
                vm.checkBankScreen();
              }
            });
        }
      }
      vm.checkBankScreen = function() {
        if (localStorage.getItem('bankScreen')) {
          vm.showAccount = localStorage.getItem('bankScreen');
        } else vm.showAccount = 0;
      }
      vm.setLoginData = function(data, login) {

        $timeout(function() {
          vm.profile = {};
          if (data.doctor_profile && data.doctor_profile.access_token) {
            localStorage.setItem('doctorToken', data.doctor_profile.access_token);
            localStorage.setItem('profileData', JSON.stringify(data.doctor_profile));
          }
          if (data.access_token) localStorage.setItem('doctorToken', data.access_token);

          vm.doctor_notifications = [];

          vm.is_guaranteed = data.doctor_profile.is_guaranteed;
          // console.log(vm.is_guaranteed);

          vm.doctor_notifications = data.doctor_notifications;
          vm.countNotfs();
          // console.log(data.doctor_profile);
          // console.log(localStorage.getItem('doctorToken'));
          if (data.doctor_profile && data.doctor_profile.is_pdp == 0) {
            vm.showPDPMenu = 0;
          } else {
            vm.showPDPMenu = 1;
          }
          if (data.doctor_price) {
            localStorage.setItem('doctorPrice', JSON.stringify(data.doctor_price));
          }
          if (data.show_payment_screen) {
            localStorage.setItem('paymentScreen', data.show_payment_screen);
            vm.updateFeatures = 1;
          } else {
            localStorage.setItem('paymentScreen', 0);
            vm.updateFeatures = 0;
          }
          if (data.doctor_profile.plan_id) {

            if (data.doctor_profile.plan_id.indexOf('2') > -1) {
              vm.showPFMenu = 1;
            } else {
              vm.showPFMenu = 0;
            }
            // console.log(vm.showPFMenu);
            // console.log(vm.showPDPMenu);
          }
          if (data.doctor_profile.doctor_image)
            vm.profilePicThumb = data.doctor_profile.doctor_image;
          else vm.profilePicThumb = 'app/img/SVG/profile_placeholder.svg';
          if (data.amount) {
            localStorage.setItem('subscriptionAmount', JSON.stringify(data.amount));
          }
          if (data.show_practice_screen) localStorage.setItem('practiceScreen', data.show_practice_screen);
          else localStorage.setItem('practiceScreen', 0);
          if (data.locations) {
            localStorage.setItem('locations', JSON.stringify(data.locations));
            localStorage.setItem('is_travelling', 0);
          }
          if (data.show_bank_screen) localStorage.setItem('bankScreen', data.show_bank_screen);
          else localStorage.setItem('bankScreen', 0);
          localStorage.setItem('profilePicThumb', vm.profilePicThumb);
          vm.profile.profileData = data.doctor_profile;
          localStorage.setItem('doctor_name', data.doctor_profile.doctor_first_name.toString() + ' ' + data.doctor_profile.doctor_last_name.toString());
          vm.doctor_name = localStorage.getItem('doctor_name');
          vm.profilePicThumb = localStorage.getItem('profilePicThumb');

          // console.log(vm.doctor_name);
          vm.checkBankScreen();

          if (login == 1) {
            // vm.currentStep = 0;
            // localStorage.setItem('myTour',-1);
            // $rootScope.checkTour();
            // $rootScope.freshUser = 0;
            // localStorage.setItem('freshUser',$rootScope.freshUser);

            $state.go('app.dashboard');
          } else if (login == 2) {

            // $rootScope.freshUser = 1;
            // localStorage.setItem('freshUser',$rootScope.freshUser);
            // localStorage.setItem('myTour',0);
            $state.go('app.dashboard');
          } else {
            // $rootScope.freshUser = 0;
            // localStorage.setItem('myTour',-1);
            // vm.checkTour();
          }
        });
      }
      vm.doctor_name = localStorage.getItem('doctor_name');
      vm.profilePicThumb = localStorage.getItem('profilePicThumb');



      vm.logout = function() {
        cfpLoadingBar.start();
        $.post(api.url + "doctor_logout", {
            access_token: localStorage.getItem('doctorToken'),
            device_type: 0,
            app_type: 2,
            app_version: 100,
            device_id: localStorage.getItem('user')
          })
          .success(function(data, status) {
            if (typeof data === 'string')
              var data = JSON.parse(data);
            console.log(data);
            ngDialog.close();
            vm.clearPFData();
            localStorage.removeItem('doctorToken');
            toaster.pop('success', 'Logged Out Successfully', '');
            $state.go('login');
            cfpLoadingBar.complete();
          });
      };

      vm.dataURItoBlob = function(dataURI, id) {
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
        return blob;
      };


      vm.processfile = function(file) {
        if (!(/image/i).test(file.type)) {
          alert("File " + file.name + " is not an image.");
          return false;
        }
        var blob = '';
        // read the files
        var reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = function(event) {
          var blob = new Blob([event.target.result]);
          window.URL = window.URL || window.webkitURL;
          var blobURL = window.URL.createObjectURL(blob);
          var image = new Image();
          image.src = blobURL;
          image.onload = function() {
            var resized = vm.resizeMe(image);
            // console.log(resized);
            blob = vm.dataURItoBlob(resized);
            console.log(blob);
            vm.file = blob;
            console.log(vm.file);
          }
        };

      }

      vm.resizeMe = function(img) {

        var canvas = document.createElement('canvas');

        var width = img.width;
        var height = img.height;
        var max_width = 1024;
        var max_height = 720;
        if (width > height) {
          if (width > max_width) {
            height = Math.round(height *= max_width / width);
            width = max_width;
          }
        } else {
          if (height > max_height) {
            width = Math.round(width *= max_height / height);
            height = max_height;
          }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL("image/jpeg", 0.7);
      }



    }
  }
})();
