/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Version: 3.7.5
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';

    angular
        .module('adminPanel', [
            'app.core',
            'app.routes',
            'app.mainCtrl',
            'app.dashboard',
            'app.pf',
            'app.account',
            'app.feature',
            'app.support',
            'app.email',
            'app.sidebar',
            'app.elements',
            'app.navsearch',
            'app.preloader',
            'app.loadingbar',
            'app.translate',
            'app.settings',
            'app.icons',
            'app.flatdoc',
            'app.notify',
            'app.bootstrapui',
            'app.panels',
            'app.charts',
            'app.forms',
            'app.locale',
            'app.maps',
            'app.pages',
            'app.tables',
            'app.extras',
            'app.mailbox',
            'app.utils',
            'ngDialog',
            'toaster',
            'signature'
        ]);
    // console.log("inside app");
})();


(function() {
    'use strict';

    angular
        .module('app.bootstrapui', []);
})();
(function() {
    'use strict';

    angular
        .module('app.charts', []);
})();
(function() {
    'use strict';

    angular
        .module('app.colors', []);
})();
(function() {
    'use strict';

    angular
        .module('app.core', [
            'ngRoute',
            'ngAnimate',
            'ngStorage',
            'ngCookies',
            'pascalprecht.translate',
            'ui.bootstrap',
            'ui.router',
            'oc.lazyLoad',
            'cfp.loadingBar',
            'ngSanitize',
            'ngResource',
            'tmh.dynamicLocale',
            'ui.utils'
        ]);
        // console.clear();
})();
(function() {
    'use strict';
    angular
        .module('adminPanel').constant("api", {
            // Live
            // "url": "https://apilive.denefits.com:3003/"
            // Dev
            // "url": "http://34.213.160.134:3003/"
            "url": "https://api.denefits.com:3003/"
        })
})();
(function() {
    'use strict';

    angular
        .module('app.mainCtrl', []);
})();
(function() {
    'use strict';

    angular
        .module('app.dashboard', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pf', []);
})();
(function() {
    'use strict';

    angular
        .module('app.account', []);
})();
(function() {
    'use strict';

    angular
        .module('app.email', []);
})();
(function() {
    'use strict';

    angular
        .module('app.feature', []);
})();
(function() {
    'use strict';

    angular
        .module('app.support', []);
})();
(function() {
    'use strict';

    angular
        .module('app.extras', []);
})();
(function() {
    'use strict';

    angular
        .module('app.elements', []);
})();
(function() {
    'use strict';

    angular
        .module('app.flatdoc', []);
})();
(function() {
    'use strict';

    angular
        .module('app.forms', []);
})();
(function() {
    'use strict';

    angular
        .module('app.icons', []);
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload', []);
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.locale', []);
})();
(function() {
    'use strict';

    angular
        .module('app.mailbox', []);
})();
(function() {
    'use strict';

    angular
        .module('app.maps', []);
})();
(function() {
    'use strict';

    angular
        .module('app.navsearch', []);
})();
(function() {
    'use strict';

    angular
        .module('app.notify', []);
})();
(function() {
    'use strict';

    angular
        .module('app.pages', []);
})();


(function() {
    'use strict';

    angular
        .module('app.panels', []);
})();
(function() {
    'use strict';

    angular
        .module('app.preloader', []);
})();


(function() {
    'use strict';

    angular
        .module('app.routes', [
            'app.lazyload'
        ]);
})();
(function() {
    'use strict';

    angular
        .module('app.settings', []);
})();
(function() {
    'use strict';

    angular
        .module('app.sidebar', []);
})();
(function() {
    'use strict';

    angular
        .module('app.tables', []);
})();
(function() {
    'use strict';

    angular
        .module('app.translate', []);
})();
(function() {
    'use strict';

    angular
        .module('app.utils', [
          'app.colors'
          ]);
})();

/**=========================================================
 * Module: demo-alerts.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('AlertDemoCtrl', AlertDemoCtrl);

    function AlertDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.alerts = [
            { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            { type: 'warning', msg: 'Well done! You successfully read this important alert message.' }
          ];

          vm.addAlert = function() {
            vm.alerts.push({msg: 'Another alert!'});
          };

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .config(bootstrapuiConfig);

    bootstrapuiConfig.$inject = ['$uibTooltipProvider'];
    function bootstrapuiConfig($uibTooltipProvider){
      $uibTooltipProvider.options({appendToBody: true});
    }
})();
/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ButtonsCtrl', ButtonsCtrl);

    function ButtonsCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.singleModel = 1;

          vm.radioModel = 'Middle';

          vm.checkModel = {
            left: false,
            middle: true,
            right: false
          };
        }
    }
})();

/**=========================================================
 * Module: demo-carousel.js
 * Provides a simple demo for bootstrap ui carousel
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('CarouselDemoCtrl', CarouselDemoCtrl);

    function CarouselDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.myInterval = 5000;

          vm.slides = [];
          vm.addSlide = function(id) {
            id = id || 8;
            vm.slides.push({
              id: id,
              image: 'app/img/bg' + id + '.jpg',
              text: ['More','Extra','Lots of','Surplus'][vm.slides.length % 2] + ' ' +
                ['Cats', 'Kittys', 'Felines', 'Cutes'][vm.slides.length % 2]
            });
          };

          vm.addSlide(4);
          vm.addSlide(7);
          vm.addSlide(8);

        }
    }
})();

/**=========================================================
 * Module: demo-datepicker.js
 * Provides a simple demo for bootstrap datepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('DatepickerDemoCtrl', DatepickerDemoCtrl);

    function DatepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.today = function() {
            vm.dt = new Date();
          };
          vm.today();

          vm.clear = function () {
            vm.dt = null;
          };

          // Disable weekend selection
          vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
          };

          vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
          };
          vm.toggleMin();

          vm.open = function($event) {
            $event.preventDefault();
            $event.stopPropagation();

            vm.opened = true;
          };

          vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
          };

          vm.initDate = new Date('2019-10-20');
          vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
          vm.format = vm.formats[0];
        }
    }
})();


/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModal'];
    function ModalController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            var modalInstance = $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });

            var state = $('#modal-state');
            modalInstance.result.then(function () {
              state.text('Modal dismissed with OK status');
            }, function () {
              state.text('Modal dismissed with Cancel status');
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance'];
          function ModalInstanceCtrl($scope, $uibModalInstance) {

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };
          }
        }
    }

})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PaginationDemoCtrl', PaginationDemoCtrl);

    function PaginationDemoCtrl() {
        var vm = this;


        activate();

        ////////////////

        function activate() {
          vm.totalItems = 64;
          vm.currentPage = 4;

          vm.setPage = function (pageNo) {
            vm.currentPage = pageNo;
          };

          vm.pageChanged = function() {
            console.log('Page changed to: ' + vm.currentPage);
          };

          vm.maxSize = 5;
          vm.bigTotalItems = 175;
          vm.bigCurrentPage = 1;
        }
    }
})();

/**=========================================================
 * Module: demo-popover.js
 * Provides a simple demo for popovers
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('PopoverDemoCtrl', PopoverDemoCtrl);

    function PopoverDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicPopover = 'Hello, World!';
          vm.dynamicPopoverTitle = 'Title';
        }
    }
})();

/**=========================================================
 * Module: demo-progress.js
 * Provides a simple demo to animate progress bar
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('ProgressDemoCtrl', ProgressDemoCtrl);

    function ProgressDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.max = 200;

          vm.random = function() {
            var value = Math.floor((Math.random() * 100) + 1);
            var type;

            if (value < 25) {
              type = 'success';
            } else if (value < 50) {
              type = 'info';
            } else if (value < 75) {
              type = 'warning';
            } else {
              type = 'danger';
            }

            vm.showWarning = (type === 'danger' || type === 'warning');

            vm.dynamic = value;
            vm.type = type;
          };
          vm.random();

          vm.randomStacked = function() {
            vm.stacked = [];
            var types = ['success', 'info', 'warning', 'danger'];

            for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
                var index = Math.floor((Math.random() * 4));
                vm.stacked.push({
                  value: Math.floor((Math.random() * 30) + 1),
                  type: types[index]
                });
            }
          };
          vm.randomStacked();
        }
    }
})();

/**=========================================================
 * Module: demo-rating.js
 * Provides a demo for ratings UI
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('RatingDemoCtrl', RatingDemoCtrl);

    function RatingDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.rate = 7;
          vm.max = 10;
          vm.isReadonly = false;

          vm.hoveringOver = function(value) {
            vm.overStar = value;
            vm.percent = 100 * (value / vm.max);
          };

          vm.ratingStates = [
            {stateOn: 'fa fa-check', stateOff: 'fa fa-check-circle'},
            {stateOn: 'fa fa-star', stateOff: 'fa fa-star-o'},
            {stateOn: 'fa fa-heart', stateOff: 'fa fa-ban'},
            {stateOn: 'fa fa-heart'},
            {stateOff: 'fa fa-power-off'}
          ];
        }
    }
})();

/**=========================================================
 * Module: demo-timepicker.js
 * Provides a simple demo for bootstrap ui timepicker
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TimepickerDemoCtrl', TimepickerDemoCtrl);

    function TimepickerDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.mytime = new Date();

          vm.hstep = 1;
          vm.mstep = 15;

          vm.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
          };

          vm.ismeridian = true;
          vm.toggleMode = function() {
            vm.ismeridian = ! vm.ismeridian;
          };

          vm.update = function() {
            var d = new Date();
            d.setHours( 14 );
            d.setMinutes( 0 );
            vm.mytime = d;
          };

          vm.changed = function () {
            console.log('Time changed to: ' + vm.mytime);
          };

          vm.clear = function() {
            vm.mytime = null;
          };
        }
    }
})();

/**=========================================================
 * Module: demo-tooltip.js
 * Provides a simple demo for tooltip
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TooltipDemoCtrl', TooltipDemoCtrl);

    function TooltipDemoCtrl() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.dynamicTooltip = 'Hello, World!';
          vm.dynamicTooltipText = 'dynamic';
          vm.htmlTooltip = 'I\'ve been made <b>bold</b>!';

          vm.autoplace = function (context, source) {
            //return (predictTooltipTop(source) < 0) ?  "bottom": "top";
            var pos = 'top';
            if(predictTooltipTop(source) < 0)
              pos = 'bottom';
            if(predictTooltipLeft(source) < 0)
              pos = 'right';
            return pos;
          };

            // Predicts tooltip top position
            // based on the trigger element
            function predictTooltipTop(el) {
              var top = el.offsetTop;
              var height = 40; // asumes ~40px tooltip height

              while(el.offsetParent) {
                el = el.offsetParent;
                top += el.offsetTop;
              }
              return (top - height) - (window.pageYOffset);
            }

            // Predicts tooltip top position
            // based on the trigger element
            function predictTooltipLeft(el) {
              var left = el.offsetLeft;
              var width = el.offsetWidth;

              while(el.offsetParent) {
                el = el.offsetParent;
                left += el.offsetLeft;
              }
              return (left - width) - (window.pageXOffset);
            }
        }
    }
})();

/**=========================================================
 * Module: demo-typeahead.js
 * Provides a simple demo for typeahead
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.bootstrapui')
        .controller('TypeaheadCtrl', TypeaheadCtrl);

    TypeaheadCtrl.$inject = ['$http'];
    function TypeaheadCtrl($http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.selected = undefined;
          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

          // Any function returning a promise object can be used to load values asynchronously
          vm.getLocation = function(val) {
            return $http.get('//maps.googleapis.com/maps/api/geocode/json', {
              params: {
                address: val,
                sensor: false
              }
            }).then(function(res){
              var addresses = [];
              angular.forEach(res.data.results, function(item){
                /*jshint -W106*/
                addresses.push(item.formatted_address);
              });
              return addresses;
            });
          };

          vm.statesWithFlags = [{'name':'Alabama','flag':'5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png'},{'name':'Alaska','flag':'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png'},{'name':'Arizona','flag':'9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png'},{'name':'Arkansas','flag':'9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png'},{'name':'California','flag':'0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png'},{'name':'Colorado','flag':'4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png'},{'name':'Connecticut','flag':'9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png'},{'name':'Delaware','flag':'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png'},{'name':'Florida','flag':'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png'},{'name':'Georgia','flag':'5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png'},{'name':'Hawaii','flag':'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png'},{'name':'Idaho','flag':'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png'},{'name':'Illinois','flag':'0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png'},{'name':'Indiana','flag':'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png'},{'name':'Iowa','flag':'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png'},{'name':'Kansas','flag':'d/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png'},{'name':'Kentucky','flag':'8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png'},{'name':'Louisiana','flag':'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png'},{'name':'Maine','flag':'3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png'},{'name':'Maryland','flag':'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png'},{'name':'Massachusetts','flag':'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png'},{'name':'Michigan','flag':'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png'},{'name':'Minnesota','flag':'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png'},{'name':'Mississippi','flag':'4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png'},{'name':'Missouri','flag':'5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png'},{'name':'Montana','flag':'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png'},{'name':'Nebraska','flag':'4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png'},{'name':'Nevada','flag':'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png'},{'name':'New Hampshire','flag':'2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png'},{'name':'New Jersey','flag':'9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png'},{'name':'New Mexico','flag':'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png'},{'name':'New York','flag':'1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png'},{'name':'North Carolina','flag':'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png'},{'name':'North Dakota','flag':'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png'},{'name':'Ohio','flag':'4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png'},{'name':'Oklahoma','flag':'6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png'},{'name':'Oregon','flag':'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png'},{'name':'Pennsylvania','flag':'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png'},{'name':'Rhode Island','flag':'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png'},{'name':'South Carolina','flag':'6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png'},{'name':'South Dakota','flag':'1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png'},{'name':'Tennessee','flag':'9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png'},{'name':'Texas','flag':'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png'},{'name':'Utah','flag':'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png'},{'name':'Vermont','flag':'4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png'},{'name':'Virginia','flag':'4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png'},{'name':'Washington','flag':'5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png'},{'name':'West Virginia','flag':'2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png'},{'name':'Wisconsin','flag':'2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png'},{'name':'Wyoming','flag':'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png'}];

        }
    }
})();

/**=========================================================
 * Module: chartist.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartistController', ChartistController);

    function ChartistController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Line chart
          // -----------------------------------

          vm.lineData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            series: [
              [12, 9, 7, 8, 5],
              [2, 1, 3.5, 7, 3],
              [1, 3, 4, 5, 6]
            ]
          };

          vm.lineOptions = {
            fullWidth: true,
            height: 220,
            chartPadding: {
              right: 40
            }
          };

          // Bar bipolar
          // -----------------------------------

          vm.barBipolarOptions = {
            high: 10,
            low: -10,
            height: 220,
            axisX: {
              labelInterpolationFnc: function(value, index) {
                return index % 2 === 0 ? value : null;
              }
            }
          };

          vm.barBipolarData = {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
            series: [
              [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
            ]
          };


          // Bar horizontal
          // -----------------------------------

          vm.barHorizontalData = {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            series: [
              [5, 4, 3, 7, 5, 10, 3],
              [3, 2, 9, 5, 4, 6, 4]
            ]
          };

          vm.barHorizontalOptions = {
            seriesBarDistance: 10,
            reverseData: true,
            horizontalBars: true,
            height: 220,
            axisY: {
              offset: 70
            }
          };

          // Smil Animations
          // -----------------------------------

          // Let's put a sequence number aside so we can use it in the event callbacks
          var seq = 0,
            delays = 80,
            durations = 500;

          vm.smilData = {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
              [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
              [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
              [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
            ]
          };

          vm.smilOptions = {
            low: 0,
            height: 260
          };

          vm.smilEvents = {
            created: function() {
              seq = 0;
            },
            draw: function(data) {
              seq++;

              if(data.type === 'line') {
                // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
                data.element.animate({
                  opacity: {
                    // The delay when we like to start the animation
                    begin: seq * delays + 1000,
                    // Duration of the animation
                    dur: durations,
                    // The value where the animation should start
                    from: 0,
                    // The value where it should end
                    to: 1
                  }
                });
              } else if(data.type === 'label' && data.axis === 'x') {
                data.element.animate({
                  y: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.y + 100,
                    to: data.y,
                    // We can specify an easing function from Chartist.Svg.Easing
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'label' && data.axis === 'y') {
                data.element.animate({
                  x: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 100,
                    to: data.x,
                    easing: 'easeOutQuart'
                  }
                });
              } else if(data.type === 'point') {
                data.element.animate({
                  x1: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  x2: {
                    begin: seq * delays,
                    dur: durations,
                    from: data.x - 10,
                    to: data.x,
                    easing: 'easeOutQuart'
                  },
                  opacity: {
                    begin: seq * delays,
                    dur: durations,
                    from: 0,
                    to: 1,
                    easing: 'easeOutQuart'
                  }
                });
              }
            }
          };


          // SVG PATH animation
          // -----------------------------------

          vm.pathData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            series: [
              [1, 5, 2, 5, 4, 3],
              [2, 3, 4, 8, 1, 2],
              [5, 4, 3, 2, 1, 0.5]
            ]
          };

          vm.pathOptions = {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true,
            height: 260
          };

          vm.pathEvents = {
            draw: function(data) {
              if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                  d: {
                    begin: 2000 * data.index,
                    dur: 2000,
                    from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                    to: data.path.clone().stringify(),
                    easing: Chartist.Svg.Easing.easeOutQuint
                  }
                });
              }
            }
          };

        }
    }
})();


/**=========================================================
 * Module: chart.controller.js
 * Controller for ChartJs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartJSController', ChartJSController);

    ChartJSController.$inject = ['Colors'];

    function ChartJSController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Line chart
            // -----------------------------------
            vm.lineLabels = ["January", "February", "March", "April", "May", "June", "July"];
            vm.lineSeries = ['Series A', 'Series B'];
            vm.lineData = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            vm.lineOnClick = function(points, evt) {
                console.log(points, evt);
            };
            vm.lineDatasetOverride = [{
                yAxisID: 'y-axis-1'
            }, {
                yAxisID: 'y-axis-2'
            }];
            vm.lineOptions = {
                scales: {
                    yAxes: [{
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }, {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    }]
                }
            };
            vm.lineColors = [Colors.byName('info'), Colors.byName('purple')];

            // Bar Chart
            // ------------------
            vm.barLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
            vm.barSeries = ['Series A', 'Series B'];
            vm.barData = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            vm.barColors = [{
                backgroundColor: Colors.byName('primary'),
                borderColor: Colors.byName('primary')
            }, {
                backgroundColor: Colors.byName('info'),
                borderColor: Colors.byName('info')
            }]

            // Polar Area Chart
            // ------------------
            vm.polarLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales", "Tele Sales"];
            vm.polarData = [300, 500, 100, 40];
            vm.polarColors = [Colors.byName('pink'), Colors.byName('purple'), Colors.byName('pink'), Colors.byName('purple')];

            // Radar Chart
            // ------------------
            vm.radarLabels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];
            vm.radarData = [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ];
            vm.radarColors = [Colors.byName('purple'), Colors.byName('info')];

            // Pie Chart
            // ------------------
            vm.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            vm.pieData = [300, 500, 100];
            vm.pieColors = [Colors.byName('info'), Colors.byName('purple'), Colors.byName('yellow')];

            // Doughnut Chart
            // ------------------
            vm.douLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            vm.douData = [300, 500, 100];
            vm.douColors = [Colors.byName('info'), Colors.byName('purple'), Colors.byName('yellow')];

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.charts')
        .service('ChartData', ChartData);

    ChartData.$inject = ['$resource'];
    function ChartData($resource) {
        this.load = load;

        ////////////////

        var opts = {
            get: { method: 'GET', isArray: true }
          };
        function load(source) {
          return $resource(source, {}, opts).get();
        }
    }
})();

/**=========================================================
 * Module: flot-chart.js
 * Setup options and data for flot chart directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('FlotChartController', FlotChartController);

    FlotChartController.$inject = ['$scope', 'ChartData', '$timeout'];
    function FlotChartController($scope, ChartData, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // BAR
          // -----------------------------------
          vm.barData = ChartData.load('server/chart/bar.json');
          vm.barOptions = {
              series: {
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // BAR STACKED
          // -----------------------------------
          vm.barStackeData = ChartData.load('server/chart/barstacked.json');
          vm.barStackedOptions = {
              series: {
                  stack: true,
                  bars: {
                      align: 'center',
                      lineWidth: 0,
                      show: true,
                      barWidth: 0.6,
                      fill: 0.9
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 200, // optional: use it for a clear represetation
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // SPLINE
          // -----------------------------------
          vm.splineData = ChartData.load('server/chart/spline.json');
          vm.splineOptions = {
              series: {
                  lines: {
                      show: false
                  },
                  points: {
                      show: true,
                      radius: 4
                  },
                  splines: {
                      show: true,
                      tension: 0.4,
                      lineWidth: 1,
                      fill: 0.5
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  max: 150, // optional: use it for a clear represetation
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v/* + ' visitors'*/;
                  }
              },
              shadowSize: 0
          };

          // AREA
          // -----------------------------------
          vm.areaData = ChartData.load('server/chart/area.json');
          vm.areaOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.8
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#fcfcfc',
                  mode: 'categories'
              },
              yaxis: {
                  min: 0,
                  tickColor: '#eee',
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickFormatter: function (v) {
                      return v + ' visitors';
                  }
              },
              shadowSize: 0
          };

          // LINE
          // -----------------------------------
          vm.lineData = ChartData.load('server/chart/line.json');
          vm.lineOptions = {
              series: {
                  lines: {
                      show: true,
                      fill: 0.01
                  },
                  points: {
                      show: true,
                      radius: 4
                  }
              },
              grid: {
                  borderColor: '#eee',
                  borderWidth: 1,
                  hoverable: true,
                  backgroundColor: '#fcfcfc'
              },
              tooltip: true,
              tooltipOpts: {
                  content: function (label, x, y) { return x + ' : ' + y; }
              },
              xaxis: {
                  tickColor: '#eee',
                  mode: 'categories'
              },
              yaxis: {
                  position: ($scope.app.layout.isRTL ? 'right' : 'left'),
                  tickColor: '#eee'
              },
              shadowSize: 0
          };

          // PIE
          // -----------------------------------
          vm.pieData = [{
              "label": "jQuery",
              "color": "#4acab4",
              "data": 30
            }, {
              "label": "CSS",
              "color": "#ffea88",
              "data": 40
            }, {
              "label": "LESS",
              "color": "#ff8153",
              "data": 90
            }, {
              "label": "SASS",
              "color": "#878bb6",
              "data": 75
            }, {
              "label": "Jade",
              "color": "#b2d767",
              "data": 120
            }];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/pie.json');

          vm.pieOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0,
                      label: {
                          show: true,
                          radius: 0.8,
                          formatter: function (label, series) {
                              return '<div class="flot-pie-label">' +
                              //label + ' : ' +
                              Math.round(series.percent) +
                              '%</div>';
                          },
                          background: {
                              opacity: 0.8,
                              color: '#222'
                          }
                      }
                  }
              }
          };

          // DONUT
          // -----------------------------------
          vm.donutData = [ { "color" : "#39C558",
                "data" : 60,
                "label" : "Coffee"
              },
              { "color" : "#00b4ff",
                "data" : 90,
                "label" : "CSS"
              },
              { "color" : "#FFBE41",
                "data" : 50,
                "label" : "LESS"
              },
              { "color" : "#ff3e43",
                "data" : 80,
                "label" : "Jade"
              },
              { "color" : "#937fc7",
                "data" : 116,
                "label" : "AngularJS"
              }
            ];
          // Direct data temporarily added until fix: https://github.com/flot/flot/pull/1462
          // ChartData.load('server/chart/donut.json');

          vm.donutOptions = {
              series: {
                  pie: {
                      show: true,
                      innerRadius: 0.5 // This makes the donut shape
                  }
              }
          };

          // REALTIME
          // -----------------------------------
          vm.realTimeOptions = {
              series: {
                lines: { show: true, fill: true, fillColor:  { colors: ['#a0e0f3', '#23b7e5'] } },
                shadowSize: 0 // Drawing is faster without shadows
              },
              grid: {
                  show:false,
                  borderWidth: 0,
                  minBorderMargin: 20,
                  labelMargin: 10
              },
              xaxis: {
                tickFormatter: function() {
                    return '';
                }
              },
              yaxis: {
                  min: 0,
                  max: 110
              },
              legend: {
                  show: true
              },
              colors: ['#23b7e5']
          };

          // Generate random data for realtime demo
          var data = [], totalPoints = 300;

          update();

          function getRandomData() {
            if (data.length > 0)
              data = data.slice(1);
            // Do a random walk
            while (data.length < totalPoints) {
              var prev = data.length > 0 ? data[data.length - 1] : 50,
                y = prev + Math.random() * 10 - 5;
              if (y < 0) {
                y = 0;
              } else if (y > 100) {
                y = 100;
              }
              data.push(y);
            }
            // Zip the generated y values with the x values
            var res = [];
            for (var i = 0; i < data.length; ++i) {
              res.push([i, data[i]]);
            }
            return [res];
          }
          function update() {
            vm.realTimeData = getRandomData();
            $timeout(update, 30);
          }
          // end random data generation


          // PANEL REFRESH EVENTS
          // -----------------------------------

          $scope.$on('panel-refresh', function(event, id) {

            console.log('Simulating chart refresh during 3s on #'+id);

            // Instead of timeout you can request a chart data
            $timeout(function(){

              // directive listen for to remove the spinner
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);

              console.log('Refreshed #' + id);

            }, 3000);

          });


          // PANEL DISMISS EVENTS
          // -----------------------------------

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){

            console.log('Panel #' + id + ' removing');

            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();

          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });

        }
    }
})();

/**=========================================================
 * Module: flot.js
 * Initializes the Flot chart plugin and handles data refresh
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('flot', flot);

    flot.$inject = ['$http', '$timeout'];

    function flot($http, $timeout) {

        var directive = {
            restrict: 'EA',
            template: '<div></div>',
            scope: {
                dataset: '=?',
                options: '=',
                series: '=',
                callback: '=',
                src: '='
            },
            link: link
        };
        return directive;

        function link(scope, element, attrs) {
            var height, plot, plotArea, width;
            var heightDefault = 220;

            plot = null;

            width = attrs.width || '100%';
            height = attrs.height || heightDefault;

            plotArea = $(element.children()[0]);
            plotArea.css({
                width: width,
                height: height
            });

            function init() {
                var plotObj;
                if (!scope.dataset || !scope.options) return;
                plotObj = $.plot(plotArea, scope.dataset, scope.options);
                scope.$emit('plotReady', plotObj);
                if (scope.callback) {
                    scope.callback(plotObj, scope);
                }

                return plotObj;
            }

            function onDatasetChanged(dataset) {
                if (plot) {
                    plot.setData(dataset);
                    plot.setupGrid();
                    return plot.draw();
                } else {
                    plot = init();
                    onSerieToggled(scope.series);
                    return plot;
                }
            }
            var $watchOff1 = scope.$watchCollection('dataset', onDatasetChanged, true);

            function onSerieToggled(series) {
                if (!plot || !series) return;
                var someData = plot.getData();
                for (var sName in series) {
                    angular.forEach(series[sName], toggleFor(sName));
                }

                plot.setData(someData);
                plot.draw();

                function toggleFor(sName) {
                    return function(s, i) {
                        if (someData[i] && someData[i][sName])
                            someData[i][sName].show = s;
                    };
                }
            }
            var $watchOff2 = scope.$watch('series', onSerieToggled, true);

            function onSrcChanged(src) {

                if (src) {

                    $http.get(src)
                        .then(function(data) {

                            $timeout(function() {
                                scope.dataset = data.data;
                            });

                        }, function() {
                            $.error('Flot chart: Bad request.');
                        });

                }
            }
            var $watchOff3 = scope.$watch('src', onSrcChanged);

            scope.$on('$destroy', function(){
                // detach watches and scope events
                $watchOff1();
                $watchOff2();
                $watchOff3();
                // destroy chart
                plot.destroy();
            });

        }
    }


})();
/**=========================================================
 * Module: morris.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartMorrisController', ChartMorrisController);

    ChartMorrisController.$inject = ['$timeout', 'Colors'];
    function ChartMorrisController($timeout, Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
         vm.chartdata = [
              { y: '2006', a: 100, b: 90 },
              { y: '2007', a: 75,  b: 65 },
              { y: '2008', a: 50,  b: 40 },
              { y: '2009', a: 75,  b: 65 },
              { y: '2010', a: 50,  b: 40 },
              { y: '2011', a: 75,  b: 65 },
              { y: '2012', a: 100, b: 90 }
          ];

          /* test data update
          $timeout(function(){
            vm.chartdata[0].a = 50;
            vm.chartdata[0].b = 50;
          }, 3000); */

          vm.donutdata = [
            {label: 'Download Sales', value: 12},
            {label: 'In-Store Sales',value: 30},
            {label: 'Mail-Order Sales', value: 20}
          ];

          vm.donutOptions = {
            Colors: [ Colors.byName('danger'), Colors.byName('yellow'), Colors.byName('warning') ],
            resize: true
          };

          vm.barOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            xLabelMargin: 2,
            barColors: [ Colors.byName('info'), Colors.byName('danger') ],
            resize: true
          };

          vm.lineOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: ['#31C0BE', '#7a92a3'],
            resize: true
          };

          vm.areaOptions = {
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Serie A', 'Serie B'],
            lineColors: [ Colors.byName('purple'), Colors.byName('info') ],
            resize: true
          };

        }
    }
})();

/**=========================================================
 * Module: morris.js
 * AngularJS Directives for Morris Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('morrisBar',   morrisChart('Bar')   )
        .directive('morrisDonut', morrisChart('Donut') )
        .directive('morrisLine',  morrisChart('Line')  )
        .directive('morrisArea',  morrisChart('Area')  );

    function morrisChart(type) {
      return function () {
        return {
          restrict: 'EA',
          scope: {
            morrisData: '=',
            morrisOptions: '='
          },
          link: function($scope, element) {
            // start ready to watch for changes in data
            $scope.$watch('morrisData', function(newVal) {
              if (newVal) {
                $scope.morrisInstance.setData(newVal);
                $scope.morrisInstance.redraw();
              }
            }, true);
            // the element that contains the chart
            $scope.morrisOptions.element = element;
            // If data defined copy to options
            if($scope.morrisData)
              $scope.morrisOptions.data = $scope.morrisData;
            // Init chart
            $scope.morrisInstance = new Morris[type]($scope.morrisOptions);

          }
        };
      };
    }

})();

/**=========================================================
 * Module: PieChartsController.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('PieChartsController', PieChartsController);

    /*jshint -W069*/
    PieChartsController.$inject = ['Colors'];

    function PieChartsController(Colors) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // KNOB Charts

          vm.knobLoaderData1 = 80;
          vm.knobLoaderOptions1 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info')
            };

          vm.knobLoaderData2 = 45;
          vm.knobLoaderOptions2 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('purple'),
              readOnly : true
            };

          vm.knobLoaderData3 = 30;
          vm.knobLoaderOptions3 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('pink'),
              displayPrevious : true,
              thickness : 0.1,
              lineCap : 'round'
            };

          vm.knobLoaderData4 = 20;
          vm.knobLoaderOptions4 = {
              width: '50%', // responsive
              displayInput: true,
              fgColor: Colors.byName('info'),
              bgColor: Colors.byName('gray'),
              angleOffset: -125,
              angleArc: 250
            };

          // Easy Pie Charts

          vm.piePercent1 = 85;
          vm.piePercent2 = 45;
          vm.piePercent3 = 25;
          vm.piePercent4 = 60;

          vm.pieOptions1 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('success'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 10,
              lineCap: 'circle'
          };

          vm.pieOptions2= {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('warning'),
              trackColor: false,
              scaleColor: false,
              lineWidth: 4,
              lineCap: 'circle'
          };

          vm.pieOptions3 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: false,
              scaleColor: Colors.byName('gray'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.pieOptions4 = {
              animate:{
                  duration: 800,
                  enabled: true
              },
              barColor: Colors.byName('danger'),
              trackColor: Colors.byName('yellow'),
              scaleColor: Colors.byName('gray-dark'),
              lineWidth: 15,
              lineCap: 'circle'
          };

          vm.randomize = function(type) {
            if ( type === 'easy') {
              vm.piePercent1 = random();
              vm.piePercent2 = random();
              vm.piePercent3 = random();
              vm.piePercent4 = random();
            }
            if ( type === 'knob') {
              vm.knobLoaderData1 = random();
              vm.knobLoaderData2 = random();
              vm.knobLoaderData3 = random();
              vm.knobLoaderData4 = random();
            }
          }

          function random() { return Math.floor((Math.random() * 100) + 1); }

        }
    }
})();

/**=========================================================
 * Module: rickshaw.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .controller('ChartRickshawController', ChartRickshawController);

    function ChartRickshawController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.renderers = [{
                  id: 'area',
                  name: 'Area'
              }, {
                  id: 'line',
                  name: 'Line'
              }, {
                  id: 'bar',
                  name: 'Bar'
              }, {
                  id: 'scatterplot',
                  name: 'Scatterplot'
              }];

          vm.palettes = [
              'spectrum14',
              'spectrum2000',
              'spectrum2001',
              'colorwheel',
              'cool',
              'classic9',
              'munin'
          ];

          vm.rendererChanged = function(id) {
              vm['options' + id] = {
                  renderer: vm['renderer' + id].id
              };
          };

          vm.paletteChanged = function(id) {
              vm['features' + id] = {
                  palette: vm['palette' + id]
              };
          };

          vm.changeSeriesData = function(id) {
              var seriesList = [];
              for (var i = 0; i < 3; i++) {
                  var series = {
                      name: 'Series ' + (i + 1),
                      data: []
                  };
                  for (var j = 0; j < 10; j++) {
                      series.data.push({x: j, y: Math.random() * 20});
                  }
                  seriesList.push(series);
                  vm['series' + id][i] = series;
              }
              //vm['series' + id] = seriesList;
          };

          vm.series0 = [];

          vm.options0 = {
            renderer: 'area'
          };

          vm.renderer0 = vm.renderers[0];
          vm.palette0 = vm.palettes[0];

          vm.rendererChanged(0);
          vm.paletteChanged(0);
          vm.changeSeriesData(0);

          // Graph 2

          var seriesData = [ [], [], [] ];
          var random = new Rickshaw.Fixtures.RandomData(150);

          for (var i = 0; i < 150; i++) {
            random.addData(seriesData);
          }

          vm.series2 = [
            {
              color: '#c05020',
              data: seriesData[0],
              name: 'New York'
            }, {
              color: '#30c020',
              data: seriesData[1],
              name: 'London'
            }, {
              color: '#6060c0',
              data: seriesData[2],
              name: 'Tokyo'
            }
          ];

          vm.options2 = {
            renderer: 'area'
          };

        }
    }
})();

/**=========================================================
 * Module: sparkline.js
 * SparkLines Mini Charts
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.charts')
        .directive('sparkline', sparkline);

    function sparkline () {
        var directive = {
            restrict: 'EA',
            scope: {
              'sparkline': '='
            },
            controller: Controller
        };
        return directive;

    }
    Controller.$inject = ['$scope', '$element', '$timeout', '$window'];
    function Controller($scope, $element, $timeout, $window) {
      var runSL = function(){
        initSparLine();
      };
      // generate a unique resize event so we can detach later
      var resizeEventId = 'resize.sparkline' + $scope.$id;

      $timeout(runSL);

      function initSparLine() {
        var options = $scope.sparkline,
            data = $element.data();

        if(!options) // if no scope options, try with data attributes
          options = data;
        else
          if(data) // data attributes overrides scope options
            options = angular.extend({}, options, data);

        options.type = options.type || 'bar'; // default chart is bar
        options.disableHiddenCheck = true;

        $element.sparkline('html', options);

        if(options.resize) {
          $($window).on(resizeEventId, function(){
            $element.sparkline('html', options);
          });
        }
      }

      $scope.$on('$destroy', function(){
        $($window).off(resizeEventId);
      });

    }


})();

(function() {
    'use strict';

    angular
        .module('app.colors')
        .constant('APP_COLORS', {
          'primary':                '#5d9cec',
          'success':                '#27c24c',
          'info':                   '#23b7e5',
          'warning':                '#ff902b',
          'danger':                 '#f05050',
          'inverse':                '#131e26',
          'green':                  '#37bc9b',
          'pink':                   '#f532e5',
          'purple':                 '#7266ba',
          'dark':                   '#3a3f51',
          'yellow':                 '#fad732',
          'gray-darker':            '#232735',
          'gray-dark':              '#3a3f51',
          'gray':                   '#dde6e9',
          'gray-light':             '#e4eaec',
          'gray-lighter':           '#edf1f2'
        })
        ;
})();
/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.colors')
        .service('Colors', Colors);

    Colors.$inject = ['APP_COLORS'];
    function Colors(APP_COLORS) {
        this.byName = byName;

        ////////////////

        function byName(name) {
          return (APP_COLORS[name] || '#fff');
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.core')
        .config(coreConfig);

    coreConfig.$inject = ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$animateProvider'];
    function coreConfig($controllerProvider, $compileProvider, $filterProvider, $provide, $animateProvider){

      var core = angular.module('app.core');
      // registering components after bootstrap
      core.controller = $controllerProvider.register;
      core.directive  = $compileProvider.directive;
      core.filter     = $filterProvider.register;
      core.factory    = $provide.factory;
      core.service    = $provide.service;
      core.constant   = $provide.constant;
      core.value      = $provide.value;

      // Disables animation on items with class .ng-no-animation
      $animateProvider.classNameFilter(/^((?!(ng-no-animation)).)*$/);

      // Improve performance disabling debugging features
      // $compileProvider.debugInfoEnabled(false);

    }

})();
/**=========================================================
 * Module: constants.js
 * Define constants to inject across the application
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('APP_MEDIAQUERY', {
          'desktopLG':             1200,
          'desktop':                992,
          'tablet':                 768,
          'mobile':                 480
        })
      ;

})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .run(appRun);

    appRun.$inject = ['$rootScope', '$state', '$stateParams', '$window', '$templateCache', 'Colors', '$timeout','cfpLoadingBar'];

    function appRun($rootScope, $state, $stateParams, $window, $templateCache, Colors, $timeout,cfpLoadingBar) {

        // Hook into ocLazyLoad to setup AngularGrid before inject into the app
        // See "Creating the AngularJS Module" at
        // https://www.ag-grid.com/best-angularjs-data-grid/index.php
        var offevent = $rootScope.$on('ocLazyLoad.fileLoaded', function(e, file) {
            if (file.indexOf('ag-grid.js') > -1) {
                agGrid.initialiseAgGridWithAngular1(angular);
                offevent();
            }
        });

        // Set reference to access them from any scope
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$storage = $window.localStorage;

        // Uncomment this to disable template cache
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            // if (typeof(toState) !== 'undefined'){
            //   $templateCache.remove(toState.templateUrl);
            // }
            if(toState.name=="app.updateAccount"&&fromState.name=="app.dashboard"){
            if($rootScope.showAccount==0){
              cfpLoadingBar.complete();
              event.preventDefault();
              $state.go('app.dashboard');
            }
          }
          if(toState.name=="app.updateAccount"&&fromState.name=="app.pfFinanceInfo"){
            if($rootScope.showAccount==0){
              cfpLoadingBar.complete();
              event.preventDefault();
              $state.go('app.pfFinanceInfo');
            }
          }
          if(toState.name=="app.updateFeatures"&&fromState.name=="app.pfNewPatient"){
            if($rootScope.is_guaranteed==1){
              cfpLoadingBar.complete();
              event.preventDefault();
              $state.go('app.pfNewPatient');
            }
          }
          if(toState.name=="upgrade"&&fromState.name=="app.dashboard"){
            cfpLoadingBar.complete();
            event.preventDefault();
            $state.go('app.dashboard');
          }
          if(toState.name=="app.pfPatientContract"&&fromState.name=="app.pfPatients"){
            cfpLoadingBar.complete();
            $rootScope.clearPFData();
            event.preventDefault();
            $state.go('app.pfPatients');
          }
          if(toState.name=="app.pfPatientPayment"&&fromState.name=="app.pfPatientContract"){
            cfpLoadingBar.complete();
            $rootScope.clearPFData();
            event.preventDefault();
            $state.go('app.pfPatientContract');
          }
          if(toState.name=="app.pfPatientContract"&&fromState.name=="app.pfFinanceInfo"){
            cfpLoadingBar.complete();
            event.preventDefault();
            $state.go('app.pfFinanceInfo');
          }
          if(toState.name=="app.pfAddedPatient"&&fromState.name=="app.pfFinanceInfo"){
            cfpLoadingBar.complete();
            event.preventDefault();
            $state.go('app.pfFinanceInfo');
          }
          if(toState.name=="register"&&fromState.name=="upgrade"){
            cfpLoadingBar.complete();
            event.preventDefault();
            $state.go('upgrade');
          }
        });
        // Allows to use branding color with interpolation
        // {{ colorByName('primary') }}
        $rootScope.colorByName = Colors.byName;

        // cancel click event easily
        $rootScope.cancel = function($event) {
            $event.stopPropagation();
        };

        // Hooks Example
        // -----------------------------------

        // Hook not found
        $rootScope.$on('$stateNotFound',
            function(event, unfoundState /*, fromState, fromParams*/ ) {
                console.log(unfoundState.to); // "lazy.state"
                console.log(unfoundState.toParams); // {a:1, b:2}
                console.log(unfoundState.options); // {inherit:false} + default options
            });
        // Hook error
        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error) {
                console.log(error);
            });
        // Hook success
        $rootScope.$on('$stateChangeSuccess',
            function( /*event, toState, toParams, fromState, fromParams*/ ) {
                // display new view from top
                $window.scrollTo(0, 0);
                // Save the route title
                $rootScope.currTitle = $state.current.title;
            });

        // Load a title dynamically
        $rootScope.currTitle = $state.current.title;
        $rootScope.pageTitle = function() {
            var title = $rootScope.app.name + ' - ' + ($rootScope.currTitle || $rootScope.app.description);
            document.title = title;
            return title;
        };

    }

})();
// (function() {
//     'use strict';
//
//     angular
//         .module('app.dashboard')
//         .controller('DashboardController', DashboardController);
//
//     DashboardController.$inject = ['$scope', 'ChartData', '$timeout', 'Colors'];
//     function DashboardController($scope, ChartData, $timeout, Colors) {
//         var vm = this;
//
//         activate();
//
//         ////////////////
//
//         function activate() {
//
//           // EASYPIE
//           // -----------------------------------
//           vm.easyPiePercent = 70;
//           vm.pieOptions = {
//               animate: {
//                   duration: 800,
//                   enabled: true
//               },
//               barColor: Colors.byName('info'),
//               trackColor: 'rgba(200,200,200,0.4)',
//               scaleColor: false,
//               lineWidth: 10,
//               lineCap: 'round',
//               size: 145
//           };
//
//           // SPLINE
//           // -----------------------------------
//           vm.splineData = ChartData.load('server/chart/spline.json');
//           vm.splineOptions = {
//               series: {
//                   lines: {
//                       show: false
//                   },
//                   points: {
//                       show: true,
//                       radius: 4
//                   },
//                   splines: {
//                       show: true,
//                       tension: 0.4,
//                       lineWidth: 1,
//                       fill: 0.5
//                   }
//               },
//               grid: {
//                   borderColor: '#eee',
//                   borderWidth: 1,
//                   hoverable: true,
//                   backgroundColor: '#fcfcfc'
//               },
//               tooltip: true,
//               tooltipOpts: {
//                   content: function (label, x, y) { return x + ' : ' + y; }
//               },
//               xaxis: {
//                   tickColor: '#fcfcfc',
//                   mode: 'categories'
//               },
//               yaxis: {
//                   min: 0,
//                   max: 150, // optional: use it for a clear represetation
//                   tickColor: '#eee',
//                   position: ($scope.app.layout.isRTL ? 'right' : 'left'),
//                   tickFormatter: function (v) {
//                       return v/* + ' visitors'*/;
//                   }
//               },
//               shadowSize: 0
//           };
//
//
//           // PANEL REFRESH EVENTS
//           // -----------------------------------
//
//           $scope.$on('panel-refresh', function(event, id) {
//
//             console.log('Simulating chart refresh during 3s on #'+id);
//
//             // Instead of timeout you can request a chart data
//             $timeout(function(){
//
//               // directive listen for to remove the spinner
//               // after we end up to perform own operations
//               $scope.$broadcast('removeSpinner', id);
//
//               console.log('Refreshed #' + id);
//
//             }, 3000);
//
//           });
//
//
//           // PANEL DISMISS EVENTS
//           // -----------------------------------
//
//           // Before remove panel
//           $scope.$on('panel-remove', function(event, id, deferred){
//
//             console.log('Panel #' + id + ' removing');
//
//             // Here is obligatory to call the resolve() if we pretend to remove the panel finally
//             // Not calling resolve() will NOT remove the panel
//             // It's up to your app to decide if panel should be removed or not
//             deferred.resolve();
//
//           });
//
//           // Panel removed ( only if above was resolved() )
//           $scope.$on('panel-removed', function(event, id){
//
//             console.log('Panel #' + id + ' removed');
//
//           });
//
//         }
//     }
// })();

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('AngularCarouselController', AngularCarouselController);

    function AngularCarouselController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.colors = ['#fc0003', '#f70008', '#f2000d', '#ed0012', '#e80017', '#e3001c', '#de0021', '#d90026', '#d4002b', '#cf0030', '#c90036', '#c4003b', '#bf0040', '#ba0045', '#b5004a', '#b0004f', '#ab0054', '#a60059', '#a1005e', '#9c0063', '#960069', '#91006e', '#8c0073', '#870078', '#82007d', '#7d0082', '#780087', '#73008c', '#6e0091', '#690096', '#63009c', '#5e00a1', '#5900a6', '#5400ab', '#4f00b0', '#4a00b5', '#4500ba', '#4000bf', '#3b00c4', '#3600c9', '#3000cf', '#2b00d4', '#2600d9', '#2100de', '#1c00e3', '#1700e8', '#1200ed', '#0d00f2', '#0800f7', '#0300fc'];

          function getSlide(target, style) {
              var i = target.length;
              return {
                  id: (i + 1),
                  label: 'slide #' + (i + 1),
                  img: 'http://lorempixel.com/1200/500/' + style + '/' + ((i + 1) % 10) ,
                  color: vm.colors[ (i*10) % vm.colors.length],
                  odd: (i % 2 === 0)
              };
          }

          function addSlide(target, style) {
              target.push(getSlide(target, style));
          }

          vm.carouselIndex = 3;
          vm.carouselIndex2 = 0;
          vm.carouselIndex2 = 1;
          vm.carouselIndex3 = 5;
          vm.carouselIndex4 = 5;

          function addSlides(target, style, qty) {
              for (var i=0; i < qty; i++) {
                  addSlide(target, style);
              }
          }

          // 1st ngRepeat demo
          vm.slides = [];
          addSlides(vm.slides, 'sports', 50);

          // 2nd ngRepeat demo
          vm.slides2 = [];
          addSlides(vm.slides2, 'sports', 10);

          // 3rd ngRepeat demo
          vm.slides3 = [];
          addSlides(vm.slides3, 'people', 50);

          // 4th ngRepeat demo
          vm.slides4 = [];
          addSlides(vm.slides4, 'city', 50);


          // 5th ngRepeat demo
          vm.slides6 = [];
          vm.carouselIndex6 = 0;
          addSlides(vm.slides6, 'sports', 10);
          vm.addSlide = function(at) {
              if(at==='head') {
                  vm.slides6.unshift(getSlide(vm.slides6, 'people'));
              } else {
                  vm.slides6.push(getSlide(vm.slides6, 'people'));
              }
          };
        }
    }
})();

/**=========================================================
 * Module: demo-dialog.js
 * Demo for multiple ngDialog Usage
 * - ngDialogProvider for default values not supported
 *   using lazy loader. Include plugin in base.js instead.
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('DialogIntroCtrl', DialogIntroCtrl)
        .controller('DialogMainCtrl', DialogMainCtrl)
        .controller('InsideCtrl', InsideCtrl)
        .controller('SecondModalCtrl', SecondModalCtrl);

    DialogIntroCtrl.$inject = ['$scope', 'ngDialog', 'tpl'];
    // Called from the route state. 'tpl' is resolved before
    function DialogIntroCtrl($scope, ngDialog, tpl) {

        activate();

        ////////////////

        function activate() {
          // share with other controllers
          $scope.tpl = tpl;
          // open dialog window
          ngDialog.open({
            template: tpl.path,
            // plain: true,
            className: 'ngdialog-theme-default'
          });
        }
    }

    DialogMainCtrl.$inject = ['$scope', '$rootScope', 'ngDialog'];
    // Loads from view
    function DialogMainCtrl($scope, $rootScope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $rootScope.jsonData = '{"foo": "bar"}';
          $rootScope.theme = 'ngdialog-theme-default';

          $scope.directivePreCloseCallback = function (value) {
            if(confirm('Close it? MainCtrl.Directive. (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.preCloseCallbackOnScope = function (value) {
            if(confirm('Close it? MainCtrl.OnScope (Value = ' + value + ')')) {
              return true;
            }
            return false;
          };

          $scope.open = function () {
            ngDialog.open({ template: 'firstDialogId', controller: 'InsideCtrl', data: {foo: 'some data'} });
          };

          $scope.openDefault = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openDefaultWithPreCloseCallbackInlined = function () {
            ngDialog.open({
              template: 'firstDialogId',
              controller: 'InsideCtrl',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(value) {
                if (confirm('Close it?  (Value = ' + value + ')')) {
                  return true;
                }
                return false;
              }
            });
          };

          $scope.openConfirm = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default'
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackOnScope = function () {
            ngDialog.openConfirm({
              template: 'modalDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: 'preCloseCallbackOnScope',
              scope: $scope
            }).then(function (value) {
              console.log('Modal promise resolved. Value: ', value);
            }, function (reason) {
              console.log('Modal promise rejected. Reason: ', reason);
            });
          };

          $scope.openConfirmWithPreCloseCallbackInlinedWithNestedConfirm = function () {
            ngDialog.openConfirm({
              template: 'dialogWithNestedConfirmDialogId',
              className: 'ngdialog-theme-default',
              preCloseCallback: function(/*value*/) {

                var nestedConfirmDialog = ngDialog.openConfirm({
                  template:
                      '<p>Are you sure you want to close the parent dialog?</p>' +
                      '<div>' +
                        '<button type="button" class="btn btn-default" ng-click="closeThisDialog(0)">No' +
                        '<button type="button" class="btn btn-primary" ng-click="confirm(1)">Yes' +
                      '</button></div>',
                  plain: true,
                  className: 'ngdialog-theme-default'
                });

                return nestedConfirmDialog;
              },
              scope: $scope
            })
            .then(function(value){
              console.log('resolved:' + value);
              // Perform the save here
            }, function(value){
              console.log('rejected:' + value);

            });
          };

          $scope.openInlineController = function () {
            $rootScope.theme = 'ngdialog-theme-default';

            ngDialog.open({
              template: 'withInlineController',
              controller: ['$scope', '$timeout', function ($scope, $timeout) {
                var counter = 0;
                var timeout;
                function count() {
                  $scope.exampleExternalData = 'Counter ' + (counter++);
                  timeout = $timeout(count, 450);
                }
                count();
                $scope.$on('$destroy', function () {
                  $timeout.cancel(timeout);
                });
              }],
              className: 'ngdialog-theme-default'
            });
          };

          $scope.openTemplate = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope
            });
          };

          $scope.openTemplateNoCache = function () {
            $scope.value = true;

            ngDialog.open({
              template: $scope.tpl.path,
              className: 'ngdialog-theme-default',
              scope: $scope,
              cache: false
            });
          };

          $scope.openTimed = function () {
            var dialog = ngDialog.open({
              template: '<p>Just passing through!</p>',
              plain: true,
              closeByDocument: false,
              closeByEscape: false
            });
            setTimeout(function () {
              dialog.close();
            }, 2000);
          };

          $scope.openNotify = function () {
            var dialog = ngDialog.open({
              template:
                '<p>You can do whatever you want when I close, however that happens.</p>' +
                '<div><button type="button" class="btn btn-primary" ng-click="closeThisDialog(1)">Close Me</button></div>',
              plain: true
            });
            dialog.closePromise.then(function (data) {
              console.log('ngDialog closed' + (data.value === 1 ? ' using the button' : '') + ' and notified by promise: ' + data.id);
            });
          };

          $scope.openWithoutOverlay = function () {
            ngDialog.open({
              template: '<h2>Notice that there is no overlay!</h2>',
              className: 'ngdialog-theme-default',
              plain: true,
              overlay: false
            });
          };

          $rootScope.$on('ngDialog.opened', function (e, $dialog) {
            console.log('ngDialog opened: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closed', function (e, $dialog) {
            console.log('ngDialog closed: ' + $dialog.attr('id'));
          });

          $rootScope.$on('ngDialog.closing', function (e, $dialog) {
            console.log('ngDialog closing: ' + $dialog.attr('id'));
          });
        }

    } // DialogMainCtrl


    InsideCtrl.$inject = ['$scope', 'ngDialog'];
    function InsideCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.dialogModel = {
            message : 'message from passed scope'
          };
          $scope.openSecond = function () {
            ngDialog.open({
              template: '<p class="lead m0"><a href="" ng-click="closeSecond()">Close all by click here!</a></h3>',
              plain: true,
              closeByEscape: false,
              controller: 'SecondModalCtrl'
            });
          };
        }
    }

    SecondModalCtrl.$inject = ['$scope', 'ngDialog'];
    function SecondModalCtrl($scope, ngDialog) {

        activate();

        ////////////////

        function activate() {
          $scope.mCtrl.closeSecond = function () {
            ngDialog.close();
          };
        }

    }


})();




/**=========================================================
 * Module: calendar-ui.js
 * This script handle the calendar demo with draggable
 * events and events creations
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('InfiniteScrollController', InfiniteScrollController)
        .factory('datasource', datasource);

    function InfiniteScrollController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

          vm.loadMore = function() {
            var last = vm.images[vm.images.length - 1];
            for(var i = 1; i <= 10; i++) {
              vm.images.push(last + i);
            }
          };
        }
    }

    datasource.$inject = ['$log', '$timeout'];
    function datasource(console, $timeout) {

        var get = function(index, count, success) {
            return $timeout(function() {
                var i, result, _i, _ref;
                result = [];
                for (i = _i = index, _ref = index + count - 1; index <= _ref ? _i <= _ref : _i >= _ref; i = index <= _ref ? ++_i : --_i) {
                    result.push('item #' + i);
                }
                return success(result);
            }, 100);
        };
        return {
            get: get
        };
    }

})();

/**=========================================================
 * Module: masonry-deck.js
 * Demo for Angular Deck
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('MasonryDeckController', MasonryDeckController)
        .directive('imageloaded', imageloaded); // required by demo

    MasonryDeckController.$inject = ['RouteHelpers'];
    function MasonryDeckController(RouteHelpers) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.basepath = RouteHelpers.basepath;

          vm.photos = [
              {id: 'photo-1', name: 'Awesome photo', src: 'http://lorempixel.com/400/300/abstract'},
              {id: 'photo-2', name: 'Great photo', src: 'http://lorempixel.com/450/400/city'},
              {id: 'photo-3', name: 'Strange photo', src: 'http://lorempixel.com/400/300/people'},
              {id: 'photo-4', name: 'A photo?', src: 'http://lorempixel.com/400/300/transport'},
              {id: 'photo-5', name: 'What a photo', src: 'http://lorempixel.com/450/300/fashion'},
              {id: 'photo-6', name: 'Silly photo', src: 'http://lorempixel.com/400/300/technics'},
              {id: 'photo-7', name: 'Weird photo', src: 'http://lorempixel.com/410/350/sports'},
              {id: 'photo-8', name: 'Modern photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-9', name: 'Classical photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-10', name: 'Dynamic photo', src: 'http://lorempixel.com/420/300/abstract'},
              {id: 'photo-11', name: 'Neat photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-12', name: 'Bumpy photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-13', name: 'Brilliant photo', src: 'http://lorempixel.com/400/380/nature'},
              {id: 'photo-14', name: 'Excellent photo', src: 'http://lorempixel.com/480/300/technics'},
              {id: 'photo-15', name: 'Gorgeous photo', src: 'http://lorempixel.com/400/300/sports'},
              {id: 'photo-16', name: 'Lovely photo', src: 'http://lorempixel.com/400/300/nightlife'},
              {id: 'photo-17', name: 'A "wow" photo', src: 'http://lorempixel.com/400/300/nature'},
              {id: 'photo-18', name: 'Bodacious photo', src: 'http://lorempixel.com/400/300/abstract'}
          ];
        }
    }

    // Add class to img element when source is loaded
    function imageloaded () {
        // Copyright(c) 2013 André König <akoenig@posteo.de>
        // MIT Licensed
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var cssClass = attrs.loadedclass;

          element.bind('load', function () {
              angular.element(element).addClass(cssClass);
          });
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
        .module('app.elements')
        .controller('AbnTestController', AbnTestController);

    AbnTestController.$inject = ['$timeout', '$resource'];
    function AbnTestController($timeout, $resource) {
        var vm = this;

        activate();

        ////////////////

        /*jshint -W106*/
        function activate() {
          vm.my_tree_handler = function(branch) {

            vm.output = 'You selected: ' + branch.label;

            if (branch.data && branch.data.description) {
              vm.output += '(' + branch.data.description + ')';
              return vm.output;
            }
          };

          // onSelect event handlers
          var apple_selected = function(branch) {
            vm.output = 'APPLE! : ' + branch.label;
            return vm.output;
          };

          var treedata_avm = [
            {
              label: 'Animal',
              children: [
                {
                  label: 'Dog',
                  data: {
                    description: 'man\'s best friend'
                  }
                }, {
                  label: 'Cat',
                  data: {
                    description: 'Felis catus'
                  }
                }, {
                  label: 'Hippopotamus',
                  data: {
                    description: 'hungry, hungry'
                  }
                }, {
                  label: 'Chicken',
                  children: ['White Leghorn', 'Rhode Island Red', 'Jersey Giant']
                }
              ]
            }, {
              label: 'Vegetable',
              data: {
                definition: 'A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.',
                data_can_contain_anything: true
              },
              onSelect: function(branch) {
                vm.output = 'Vegetable: ' + branch.data.definition;
                return vm.output;
              },
              children: [
                {
                  label: 'Oranges'
                }, {
                  label: 'Apples',
                  children: [
                    {
                      label: 'Granny Smith',
                      onSelect: apple_selected
                    }, {
                      label: 'Red Delicous',
                      onSelect: apple_selected
                    }, {
                      label: 'Fuji',
                      onSelect: apple_selected
                    }
                  ]
                }
              ]
            }, {
              label: 'Mineral',
              children: [
                {
                  label: 'Rock',
                  children: ['Igneous', 'Sedimentary', 'Metamorphic']
                }, {
                  label: 'Metal',
                  children: ['Aluminum', 'Steel', 'Copper']
                }, {
                  label: 'Plastic',
                  children: [
                    {
                      label: 'Thermoplastic',
                      children: ['polyethylene', 'polypropylene', 'polystyrene', ' polyvinyl chloride']
                    }, {
                      label: 'Thermosetting Polymer',
                      children: ['polyester', 'polyurethane', 'vulcanized rubber', 'bakelite', 'urea-formaldehyde']
                    }
                  ]
                }
              ]
            }
          ];

          var treedata_geography = [
            {
              label: 'North America',
              children: [
                {
                  label: 'Canada',
                  children: ['Toronto', 'Vancouver']
                }, {
                  label: 'USA',
                  children: ['New York', 'Los Angeles']
                }, {
                  label: 'Mexico',
                  children: ['Mexico City', 'Guadalajara']
                }
              ]
            }, {
              label: 'South America',
              children: [
                {
                  label: 'Venezuela',
                  children: ['Caracas', 'Maracaibo']
                }, {
                  label: 'Brazil',
                  children: ['Sao Paulo', 'Rio de Janeiro']
                }, {
                  label: 'Argentina',
                  children: ['Buenos Aires', 'Cordoba']
                }
              ]
            }
          ];

          vm.my_data = treedata_avm;
          vm.try_changing_the_tree_data = function() {
            if (vm.my_data === treedata_avm) {
              vm.my_data = treedata_geography;
            } else {
              vm.my_data = treedata_avm;
            }
            return vm.my_data;
          };

          var tree;
          // This is our API control variable
          vm.my_tree = tree = {};
          vm.try_async_load = function() {

            vm.my_data = [];
            vm.doing_async = true;

            // Request tree data via $resource
            var remoteTree = $resource('server/treedata.json');

            return remoteTree.get(function(res){

              vm.my_data = res.data;

              vm.doing_async = false;

              return tree.expand_all();

            // we must return a promise so the plugin
            // can watch when it's resolved
            }).$promise;
          };

          // Adds a new branch to the tree
          vm.try_adding_a_branch = function() {
            var b;
            b = tree.get_selected_branch();
            return tree.add_branch(b, {
              label: 'New Branch',
              data: {
                something: 42,
                'else': 43
              }
            });
          };

        }
    }
})();


/**=========================================================
 * Module: nestable.js
 * Nestable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('NestableController', NestableController);

    function NestableController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.items =  [
            {
              item: {text: 'a'},
              children: []
            },
            {
              item: {text: 'b'},
              children: [
                {
                  item: {text: 'c'},
                  children: []
                },
                {
                  item: {text: 'd'},
                  children: []
                }
              ]
            },
            {
              item: {text: 'e'},
              children: []
            },
            {
              item: {text: 'f'},
              children: []
            }
          ];

          vm.items2 =  [
            {
              item: {text: '1'},
              children: []
            },
            {
              item: {text: '2'},
              children: [
                {
                  item: {text: '3'},
                  children: []
                },
                {
                  item: {text: '4'},
                  children: []
                }
              ]
            },
            {
              item: {text: '5'},
              children: []
            },
            {
              item: {text: '6'},
              children: []
            }
          ];

        }
    }
})();

/**=========================================================
 * Module: scroll.js
 * Make a content box scrollable
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .directive('scrollable', scrollable);

    function scrollable () {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var defaultHeight = 250;
          element.slimScroll({
              height: (attrs.height || defaultHeight)
          });
        }
    }

})();

/**=========================================================
 * Module: sortable.js
 * Sortable controller
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SortableController', SortableController);

    SortableController.$inject = ['$scope'];

    function SortableController($scope) {

        activate();

        ////////////////

        function activate() {
            // Single List
            $scope.data1 = [{
                id: 1,
                name: 'Donald Hoffman'
            }, {
                id: 2,
                name: 'Wallace Barrett'
            }, {
                id: 3,
                name: 'Marsha Hicks'
            }, {
                id: 4,
                name: 'Roland Brown'
            }];

            $scope.add = function() {
                $scope.data1.push({
                    id: $scope.data1.length + 1,
                    name: 'Earl Knight'
                });
            };

            $scope.sortableOptions = {
                placeholder: 'box-placeholder m0'
            };
        }
    }

})();

/**=========================================================
 * Module: sweetalert.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('SweetAlertController', SweetAlertController);

    SweetAlertController.$inject = ['SweetAlert'];
    function SweetAlertController(SweetAlert) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.demo1 = function() {
            SweetAlert.swal('Here\'s a message');
          };

          vm.demo2 = function() {
            SweetAlert.swal('Here\'s a message!', 'It\'s pretty, isn\'t it?');
          };

          vm.demo3 = function() {
            SweetAlert.swal('Good job!', 'You clicked the button!', 'success');
          };

          vm.demo4 = function() {
            SweetAlert.swal({
              title: 'Are you sure?',
              text: 'Your will not be able to recover this imaginary file!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: 'Yes, delete it!',
              closeOnConfirm: false
            },  function(){
              SweetAlert.swal('Booyah!');
            });
          };

          vm.demo5 = function() {
            SweetAlert.swal({
              title: 'Are you sure?',
              text: 'Your will not be able to recover this imaginary file!',
              type: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#DD6B55',
              confirmButtonText: 'Yes, delete it!',
              cancelButtonText: 'No, cancel plx!',
              closeOnConfirm: false,
              closeOnCancel: false
            }, function(isConfirm){
              if (isConfirm) {
                SweetAlert.swal('Deleted!', 'Your imaginary file has been deleted.', 'success');
              } else {
                SweetAlert.swal('Cancelled', 'Your imaginary file is safe :)', 'error');
              }
            });
          };

          vm.demo6 = function() {
            SweetAlert.swal({
              title: 'Sweet!',
              text: 'Here\'s a custom image.',
              imageUrl: 'http://oitozero.com/img/avatar.jpg'
            });
          };
        }
    }
})();

/**=========================================================
 * Module: demo-toaster.js
 * Demos for toaster notifications
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('ToasterDemoCtrl', ToasterDemoCtrl);

    ToasterDemoCtrl.$inject = ['toaster'];
    function ToasterDemoCtrl(toaster) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.toaster = {
              type:  'success',
              title: 'Title',
              text:  'Message'
          };

          vm.pop = function() {
            toaster.pop(vm.toaster.type, vm.toaster.title, vm.toaster.text);
          };
        }
    }
})();

/**=========================================================
 * Module: tour.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.elements')
        .controller('TourCtrl', TourCtrl);

    TourCtrl.$inject = ['$scope'];
    function TourCtrl($scope) {

        activate();

        ////////////////

        function activate() {
          // BootstrapTour is not compatible with z-index based layout
          // so adding position:static for this case makes the browser
          // to ignore the property
          var section = angular.element('.wrapper > section');
          section.css({'position': 'static'});
          // finally restore on destroy and reuse the value declared in stylesheet
          $scope.$on('$destroy', function(){
            section.css({'position': ''});
          });
        }
    }
})();

/**=========================================================
 * Module: article.js
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('ArticleController', ArticleController);

    function ArticleController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.htmlContent = 'Article content...';

          vm.postDemo = {};
          vm.postDemo.tags = ['coding', 'less'];
          vm.availableTags = ['coding', 'less', 'sass', 'angularjs', 'node', 'expressJS'];
          vm.postDemo.categories = ['JAVASCRIPT','WEB'];
          vm.availableCategories = ['JAVASCRIPT','WEB', 'BOOTSTRAP', 'SERVER', 'HTML5', 'CSS'];

          vm.reviewers = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];


          vm.alerts = [
            { type: 'info', msg: 'There is an autosaved version of this article that is more recent than the version below. <a href="#" class="text-white">Restore</a>' }
          ];

          vm.closeAlert = function(index) {
            vm.alerts.splice(index, 1);
          };
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CalendarController', CalendarController);

    CalendarController.$inject = ['$scope', '$compile', 'uiCalendarConfig'];
    function CalendarController($scope, $compile, uiCalendarConfig) {
        var vm = this;
        vm.title = 'CalendarController';

        activate();

        ////////////////

        function activate() {

            var date = new Date();
            var d = date.getDate();
            var m = date.getMonth();
            var y = date.getFullYear();

            $scope.changeTo = 'Hungarian';
            /* event source that pulls from google.com */
            $scope.eventSource = {
                url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
                className: 'gcal-event', // an option!
                currentTimezone: 'America/Chicago' // an option!
            };
            /* event source that contains custom events on the scope */
            $scope.events = [{
                title: 'All Day Event',
                start: new Date(y, m, 1),
                backgroundColor: '#f56954', //red
                borderColor: '#f56954' //red
            }, {
                title: 'Long Event',
                start: new Date(y, m, d - 5),
                end: new Date(y, m, d - 2),
                backgroundColor: '#f39c12', //yellow
                borderColor: '#f39c12' //yellow
            }, {
                id: 999,
                title: 'Repeating Event',
                start: new Date(y, m, d + 4, 16, 0),
                allDay: false,
                backgroundColor: '#00c0ef', //Info (aqua)
                borderColor: '#00c0ef' //Info (aqua)
            }, {
                title: 'Birthday Party',
                start: new Date(y, m, d + 1, 19, 0),
                end: new Date(y, m, d + 1, 22, 30),
                allDay: false,
                backgroundColor: '#00a65a', //Success (green)
                borderColor: '#00a65a' //Success (green)
            }, {
                title: 'Click for Google',
                start: new Date(y, m, 28),
                end: new Date(y, m, 29),
                url: 'http://google.com/',
                backgroundColor: '#2f80e7', //Primary (light-blue)
                borderColor: '#2f80e7' //Primary (light-blue)
            }];
            /* event source that calls a function on every view switch */
            $scope.eventsF = function(start, end, timezone, callback) {
                var s = new Date(start).getTime() / 1000;
                var e = new Date(end).getTime() / 1000;
                var m = new Date(start).getMonth();
                var events = [{
                    title: 'Feed Me ' + m,
                    start: s + (50000),
                    end: s + (100000),
                    allDay: false,
                    className: ['customFeed']
                }];
                callback(events);
            };

            $scope.calEventsExt = {
                color: '#f00',
                textColor: 'white',
                events: [{
                    type: 'party',
                    title: 'Lunch',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink
                }, {
                    type: 'party',
                    title: 'Lunch 2',
                    start: new Date(y, m, d, 12, 0),
                    end: new Date(y, m, d, 14, 0),
                    allDay: false,
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink
                }, {
                    type: 'party',
                    title: 'Click for Google',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    url: 'http://google.com/',
                    backgroundColor: '#9289ca', //pink
                    borderColor: '#9289ca' //pink

                }]
            };
            /* alert on eventClick */
            $scope.alertOnEventClick = function(date, jsEvent, view) {
                $scope.alertMessage = (date.title + ' was clicked ');
            };
            /* alert on Drop */
            $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Droped');// to make dayDelta ' + delta);
            };
            /* alert on Resize */
            $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view) {
                $scope.alertMessage = ('Event Resized'); // to make dayDelta ' + delta);
            };
            /* add and removes an event source of choice */
            $scope.addRemoveEventSource = function(sources, source) {
                var canAdd = 0;
                angular.forEach(sources, function(value, key) {
                    if (sources[key] === source) {
                        sources.splice(key, 1);
                        canAdd = 1;
                    }
                });
                if (canAdd === 0) {
                    sources.push(source);
                }
            };
            /* add custom event*/
            $scope.addEvent = function() {
                $scope.events.push({
                    title: 'Open Sesame',
                    start: new Date(y, m, 28),
                    end: new Date(y, m, 29),
                    className: ['openSesame']
                });
            };
            /* remove event */
            $scope.remove = function(index) {
                $scope.events.splice(index, 1);
            };
            /* Change View */
            $scope.changeView = function(view, calendar) {
                uiCalendarConfig.calendars[calendar].fullCalendar('changeView', view);
            };
            /* Change View */
            $scope.renderCalender = function(calendar) {
                if (uiCalendarConfig.calendars[calendar]) {
                    uiCalendarConfig.calendars[calendar].fullCalendar('render');
                }
            };
            /* Render Tooltip */
            $scope.eventRender = function(event, element, view) {
                element.attr({
                    'tooltip': event.title,
                    'tooltip-append-to-body': true
                });
                $compile(element)($scope);
            };
            /* config object */
            $scope.uiConfig = {
                calendar: {
                    height: 450,
                    editable: true,
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                    },
                    buttonIcons: { // note the space at the beginning
                        prev: ' fa fa-caret-left',
                        next: ' fa fa-caret-right'
                    },
                    buttonText: {
                        today: 'today',
                        month: 'month',
                        week: 'week',
                        day: 'day'
                    },
                    eventClick: $scope.alertOnEventClick,
                    eventDrop: $scope.alertOnDrop,
                    eventResize: $scope.alertOnResize,
                    eventRender: $scope.eventRender
                }
            };

            $scope.changeLang = function() {
                if ($scope.changeTo === 'Hungarian') {
                    $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
                    $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
                    $scope.changeTo = 'English';
                } else {
                    $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    $scope.changeTo = 'Hungarian';
                }
            };
            /* event sources array*/
            // $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
            $scope.eventSources = [$scope.calEventsExt, $scope.eventsF, $scope.events];
        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.extras')
        .service('LoadTreeService', LoadTreeService);

    LoadTreeService.$inject = ['$resource'];
    function LoadTreeService($resource) {
        // Loads the list of files to populate the treeview
        return $resource('server/editor/filetree.json');
    }

})();
/**=========================================================
 * Module: code-editor.js
 * Codemirror code editor controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('CodeEditorController', CodeEditorController);

    CodeEditorController.$inject = ['$rootScope', '$scope', '$http', '$ocLazyLoad', 'filetree'];
    function CodeEditorController($rootScope, $scope, $http, $ocLazyLoad, filetree) {
        var vm = this;

        layout();
        activate();

        ////////////////
        /*jshint -W106*/
        function layout() {
          // Setup the layout mode
          $rootScope.app.useFullLayout = true;
          $rootScope.app.hiddenFooter = true;
          $rootScope.app.layout.isCollapsed = true;

          // Restore layout for demo
          $scope.$on('$destroy', function(){
              $rootScope.app.useFullLayout = false;
              $rootScope.app.hiddenFooter = false;
          });

        }

        function activate() {

          // Set the tree data into the scope
          vm.filetree_data = filetree;

          // Available themes
          vm.editorThemes = ['3024-day','3024-night','ambiance-mobile','ambiance','base16-dark','base16-light','blackboard','cobalt','eclipse','elegant','erlang-dark','lesser-dark','mbo','mdn-like','midnight','monokai','neat','neo','night','paraiso-dark','paraiso-light','pastel-on-dark','rubyblue','solarized','the-matrix','tomorrow-night-eighties','twilight','vibrant-ink','xq-dark','xq-light'];

          vm.editorOpts = {
            mode: 'javascript',
            lineNumbers: true,
            matchBrackets: true,
            theme: 'mbo',
            viewportMargin: Infinity
          };

          vm.refreshEditor = 0;

          // Load dinamically the stylesheet for the selected theme
          // You can use ozLazyLoad to load also the mode js based
          // on the file extension that is loaded (see handle_filetree)
          vm.loadTheme = function() {
            var BASE = 'vendor/codemirror/theme/';
            $ocLazyLoad.load(BASE + vm.editorOpts.theme + '.css');
            vm.refreshEditor = !vm.refreshEditor;
          };
          // load default theme
          vm.loadTheme(vm.editorOpts.theme);
          // Add some initial text
          vm.code = '// Open a file from the left menu \n' +
                        '// It will be requested to the server and loaded into the editor\n' +
                        '// Also try adding a New File from the toolbar\n';


          // Tree

          var selectedBranch;
          vm.handle_filetree = function(branch) {

            selectedBranch = branch;

            var basePath = 'server/editor/';
            var isFolder = !!branch.children.length;

            console.log('You selected: ' + branch.label + ' - isFolder? ' + isFolder);

            if ( ! isFolder ) {

              $http
                .get( basePath + branch.path )
                .then(function(response){

                  console.log('Loaded.. ' + branch.path);
                  // set the new code into the editor
                  vm.code = response.data;

                  vm.editorOpts.mode = detectMode(branch.path);
                  console.log( 'Mode is: ' + vm.editorOpts.mode);

                });
            }
          };

          function detectMode(file) {
            var ext = file.split('.');
            ext = ext ? ext[ext.length - 1] : '';
            switch (ext) {
              case 'html':  return 'htmlmixed';
              case 'css':   return 'css';
              default:      return 'javascript';
            }
          }

          var tree;
          tree = vm.filetree = {};

          // Adds a new branch to the tree
          vm.new_filetree = function() {
            var b;
            b = tree.get_selected_branch();

            // if we select a leaf -> select the parent folder
            if ( b && b.children.length === 0 ) {
              b = tree.get_parent_branch(b);
            }

            return tree.add_branch(b, {
              'label': 'another.html',
              'path': 'source/another.html'
            });
          };
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('TodoController', TodoController);

    TodoController.$inject = ['$filter'];
    function TodoController($filter) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.items = [
            {
              todo: {title: 'Meeting with Mark at 7am.', description: 'Pellentesque convallis mauris eu elit imperdiet quis eleifend quam aliquet. '},
              complete: true
            },
            {
              todo: {title: 'Call Sonya. Talk about the new project.', description: ''},
              complete: false
            },
            {
              todo: {title: 'Find a new place for vacations', description: ''},
              complete: false
            }
            ];

          vm.editingTodo = false;
          vm.todo = {};

          vm.addTodo = function() {

            if( vm.todo.title === '' ) return;
            if( !vm.todo.description ) vm.todo.description = '';

            if( vm.editingTodo ) {
              vm.todo = {};
              vm.editingTodo = false;
            }
            else {
              vm.items.push({todo: angular.copy(vm.todo), complete: false});
              vm.todo.title = '';
              vm.todo.description = '';
            }
          };

          vm.editTodo = function(index, $event) {
            $event.preventDefault();
            $event.stopPropagation();
            vm.todo = vm.items[index].todo;
            vm.editingTodo = true;
          };

          vm.removeTodo = function(index/*, $event*/) {
            vm.items.splice(index, 1);
          };

          vm.clearAll = function() {
            vm.items = [];
          };

          vm.totalCompleted = function() {
            return $filter('filter')(vm.items, function(item){
              return item.complete;
            }).length;
          };

          vm.totalPending = function() {
            return $filter('filter')(vm.items, function(item){
              return !item.complete;
            }).length;
          };

        }
    }
})();

/**=========================================================
 * Module: word-cloud.js
 * Controller for jqCloud
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.extras')
        .controller('WordCloudController', WordCloudController);

    function WordCloudController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.words = [
              {
                text: 'Lorem',
                weight: 13
                //link: 'http://themicon.co'
              }, {
                text: 'Ipsum',
                weight: 10.5
              }, {
                text: 'Dolor',
                weight: 9.4
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }, {
                text: 'Sit',
                weight: 8
              }, {
                text: 'Amet',
                weight: 6.2
              }, {
                text: 'Consectetur',
                weight: 5
              }, {
                text: 'Adipiscing',
                weight: 5
              }
          ];
        }
    }
})();

/**=========================================================
 * Module: flatdoc.js
 * Creates the flatdoc markup and initializes the plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.flatdoc')
        .directive('flatdoc', flatdoc);

    function flatdoc() {

        var directive = {
            template: '<div role="flatdoc"><div role="flatdoc-menu"></div><div role="flatdoc-content"></div></div>',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {

            Flatdoc.run({
                fetcher: Flatdoc.file(attrs.src)
            });

            var $root = $('html, body');
            var menuLinks;

            var $doc = $(document).on('flatdoc:ready', function() {

                var docMenu = $('[role="flatdoc-menu"]');

                menuLinks = docMenu.find('a').on('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();

                    var $this = $(this);

                    docMenu.find('a.active').removeClass('active');
                    $this.addClass('active');

                    $root.animate({
                        scrollTop: $(this.getAttribute('href')).offset().top - ($('.topnavbar').height() + 10)
                    }, 800);
                });

            });

            // dettach all events
            scope.$on('$destroy', function() {
                menuLinks && menuLinks.off();
                $doc.off('flatdoc:ready');
            });

        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ColorPickerController', ColorPickerController);

    function ColorPickerController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
           vm.hexPicker = {
              color: ''
            };

            vm.rgbPicker = {
              color: ''
            };

            vm.rgbaPicker = {
              color: ''
            };

            vm.nonInput = {
              color: ''
            };

            vm.resetColor = function() {
              vm.hexPicker = {
                color: '#ff0000'
              };
            };

            vm.resetRBGColor = function() {
              vm.rgbPicker = {
                color: 'rgb(255,255,255)'
              };
            };

            vm.resetRBGAColor = function() {
              vm.rgbaPicker = {
                color: 'rgb(255,255,255, 0.25)'
              };
            };

            vm.resetNonInputColor = function() {
              vm.nonInput = {
                color: '#ffffff'
              };
            };
        }
    }
})();
/**=========================================================
 * Module: filestyle.js
 * Initializes the fielstyle plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('filestyle', filestyle);

    function filestyle () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var options = element.data();

          // old usage support
          options.classInput = element.data('classinput') || options.classInput;

          element.filestyle(options);
        }
    }

})();

/**=========================================================
 * Module: form-imgcrop.js
 * Image crop controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('ImageCropController', ImageCropController);

    ImageCropController.$inject = ['$scope'];
    function ImageCropController($scope) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.reset = function() {
            vm.myImage        = '';
            vm.myCroppedImage = '';
            vm.imgcropType    = 'square';
          };

          vm.reset();

          var handleFileSelect=function(evt) {
            var file=evt.currentTarget.files[0];
            var reader = new FileReader();
            reader.onload = function (evt) {
              $scope.$apply(function(/*$scope*/){
                vm.myImage=evt.target.result;
              });
            };
            if(file)
              reader.readAsDataURL(file);
          };

          angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
        }
    }
})();

/**=========================================================
 * Module: FormValidationController
 * Input validation with UI Validate
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormValidationController', FormValidationController);

    function FormValidationController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.notBlackListed = function(value) {
            var blacklist = ['some@mail.com','another@email.com'];
            return blacklist.indexOf(value) === -1;
          };

          vm.words = function(value) {
            return value && value.split(' ').length;
          };

          vm.submitted = false;
          vm.validateInput = function(name, type) {
            var input = vm.formValidate[name];
            return (input.$dirty || vm.submitted) && input.$error[type];
          };

          // Submit form
          vm.submitForm = function() {
            vm.submitted = true;
            if (vm.formValidate.$valid) {
              console.log('Submitted!!');
            } else {
              console.log('Not valid!!');
              return false;
            }
          };
        }
    }
})();

/**=========================================================
 * Module: form-wizard.js
 * Handles form wizard plugin and validation
 =========================================================*/


(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('formWizard', formWizard);

    formWizard.$inject = ['$parse'];
    function formWizard ($parse) {
        var directive = {
            link: link,
            controller: ctrl,
            restrict: 'A',
            scope: true
        };
        return directive;

        function link(scope, element, attrs) {
          var validate = $parse(attrs.validateSteps)(scope),
              wiz = new Wizard(attrs.steps, !!validate, element);
          scope.wizard = wiz.init();
        }

        function Wizard (quantity, validate, element) {

          var self = this;
          self.quantity = parseInt(quantity,10);
          self.validate = validate;
          self.element = element;

          self.init = function() {
            self.createsteps(self.quantity);
            self.go(1); // always start at fist step
            return self;
          };

          self.go = function(step) {

            if ( angular.isDefined(self.steps[step]) ) {
                if(self.validate && step !== 1) { // no need to validate when move to first state
                    var scope = self.element.scope();
                    if(typeof scope.wizardValidate === 'function') {
                        var form = $(self.element).children().children('div').eq(step - 2).children('[ng-form]');
                        if ( ! scope.wizardValidate(form.attr('ng-form')))
                            return false;
                    }
                }

              self.cleanall();
              self.steps[step] = true;
            }
          };

          self.active = function(step) {
            return !!self.steps[step];
          };

          self.cleanall = function() {
            for(var i in self.steps){
              self.steps[i] = false;
            }
          };

          self.createsteps = function(q) {
            self.steps = [];
            for(var i = 1; i <= q; i++) self.steps[i] = false;
          };

        }

    }

    ctrl.$inject = ['$scope'];
    function ctrl($scope) {
        $scope.wizardValidate = function(formName) {
            if(angular.isDefined($scope[formName] )) {
                // Set submitted to perform validation
                $scope[formName].$setSubmitted(true);
                // return valid status of the subform
                return $scope[formName].$valid;
            }
        }
    }

})();

/**=========================================================
 * Module: form-xeditable.js
 * Form xEditable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormxEditableController', FormxEditableController);

    FormxEditableController.$inject = ['$scope', 'editableOptions', 'editableThemes', '$filter', '$http'];
    function FormxEditableController($scope, editableOptions, editableThemes, $filter, $http) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {

          editableOptions.theme = 'bs3';

          editableThemes.bs3.inputClass = 'input-sm';
          editableThemes.bs3.buttonsClass = 'btn-sm';
          editableThemes.bs3.submitTpl = '<button type="submit" class="btn btn-success"><span class="fa fa-check"></span></button>';
          editableThemes.bs3.cancelTpl = '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                                           '<span class="fa fa-times text-muted"></span>'+
                                         '</button>';

          vm.user = {
            email: 'email@example.com',
            tel: '123-45-67',
            number: 29,
            range: 10,
            url: 'http://example.com',
            search: 'blabla',
            color: '#6a4415',
            date: null,
            time: new Date(),
            datetime: null,
            month: null,
            week: null,
            desc: 'Sed pharetra euismod dolor, id feugiat ante volutpat eget. '
          };

          // Local select
          // -----------------------------------

          vm.user2 = {
            status: 2
          };

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.showStatus = function() {
            var selected = $filter('filter')(vm.statuses, {value: vm.user2.status});
            return (vm.user2.status && selected.length) ? selected[0].text : 'Not set';
          };

          // select remote
          // -----------------------------------

          vm.user3 = {
            id: 4,
            text: 'admin' // original value
          };

          vm.groups = [];

          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').then(function(data) {
              vm.groups = data.data;
            });
          };

          $scope.$watch('user3.id', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              var selected = $filter('filter')(vm.groups, {id: vm.user3.id});
              vm.user3.text = selected.length ? selected[0].text : null;
            }
          });

          // Typeahead
          // -----------------------------------

          vm.user4 = {
            state: 'Arizona'
          };

          vm.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FormDemoCtrl', FormDemoCtrl);

    FormDemoCtrl.$inject = ['$resource'];
    function FormDemoCtrl($resource) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          // the following allow to request array $resource instead of object (default)
          var actions = {'get': {method: 'GET', isArray: true}};

          // Tags inputs
          // -----------------------------------
          var Cities = $resource('server/cities.json', {}, actions);

          Cities.get(function(data){

              vm.cities = data;

          });
          // for non ajax form just fill the scope variable
          // vm.cities = ['Amsterdam','Washington','Sydney','Beijing','Cairo'];

          // Slider demo values
          vm.slider1 = 5;
          vm.slider2 = 10;
          vm.slider3 = 15;
          vm.slider4 = 20;
          vm.slider5 = 25;
          vm.slider6 = 30;
          vm.slider7 = 10;
          vm.slider8 = [250,750];

          // Chosen data
          // -----------------------------------

          var States = $resource('server/chosen-states.json', {},  {'query':    {method:'GET', isArray:true} });

          vm.states = States.query();


          vm.alertSubmit = function(){
            alert('Form submitted!');
            return false;
          };

          // Angular wysiwyg
          // -----------------------------------

          vm.wysiwygContent = '<p> Write something here.. </p>';

        }
    }
})();

/**=========================================================
 * Module: masked,js
 * Initializes the masked inputs
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mainCtrl')
        .directive('masked', masked);

    function masked () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          var $elem = $(element);
          if($.fn.inputmask)
            $elem.inputmask();
        }
    }

})();

/**
 * AngularJS default filter with the following expression:
 * "person in people | filter: {name: $select.search, age: $select.search}"
 * performs a AND between 'name: $select.search' and 'age: $select.search'.
 * We want to perform a OR.
 */

(function() {
    'use strict';

    angular
        .module('app.forms')
        .filter('propsFilter', propsFilter);

    function propsFilter() {
        return filterFilter;

        ////////////////
        function filterFilter(items, props) {
          var out = [];

          if (angular.isArray(items)) {
            items.forEach(function(item) {
              var itemMatches = false;

              var keys = Object.keys(props);
              for (var i = 0; i < keys.length; i++) {
                var prop = keys[i];
                var text = props[prop].toLowerCase();
                if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                  itemMatches = true;
                  break;
                }
              }

              if (itemMatches) {
                out.push(item);
              }
            });
          } else {
            // Let the output be the input untouched
            out = items;
          }

          return out;
        }
    }

})();
/**=========================================================
 * Module: tags-input.js
 * Initializes the tag inputs plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .directive('tagsinput', tagsinput);

    tagsinput.$inject = ['$timeout'];
    function tagsinput ($timeout) {
        var directive = {
            link: link,
            require: 'ngModel',
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs, ngModel) {
          element.on('itemAdded itemRemoved', function(){
            // check if view value is not empty and is a string
            // and update the view from string to an array of tags
            if(ngModel.$viewValue && ngModel.$viewValue.split) {
              ngModel.$setViewValue( ngModel.$viewValue.split(',') );
              ngModel.$render();
            }
          });

          $timeout(function(){
            element.tagsinput();
          });
        }
    }

})();

/**=========================================================
 * Module: uiselect.js
 * uiSelect controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('uiSelectController', uiSelectController);

    uiSelectController.$inject = ['$scope', '$http'];
    function uiSelectController($scope, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.disabled = undefined;

          vm.enable = function() {
            vm.disabled = false;
          };

          vm.disable = function() {
            vm.disabled = true;
          };

          vm.clear = function() {
            vm.person.selected = undefined;
            vm.address.selected = undefined;
            vm.country.selected = undefined;
          };

          vm.person = {};
          vm.people = [
            { name: 'Adam',      email: 'adam@email.com',      age: 10 },
            { name: 'Amalie',    email: 'amalie@email.com',    age: 12 },
            { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30 },
            { name: 'Samantha',  email: 'samantha@email.com',  age: 31 },
            { name: 'Estefanía', email: 'estefanía@email.com', age: 16 },
            { name: 'Natasha',   email: 'natasha@email.com',   age: 54 },
            { name: 'Nicole',    email: 'nicole@email.com',    age: 43 },
            { name: 'Adrian',    email: 'adrian@email.com',    age: 21 }
          ];

          vm.address = {};
          vm.refreshAddresses = function(address) {
            if(!address) return;
            var params = {address: address};
            return $http.get(
              '//maps.googleapis.com/maps/api/geocode/json',
              {params: params}
            ).then(function(response) {
              vm.addresses = response.data.results;
            });
          };

          vm.country = {};
          vm.countries = [ // Taken from https://gist.github.com/unceus/6501985
            {name: 'Afghanistan', code: 'AF'},
            {name: 'Åland Islands', code: 'AX'},
            {name: 'Albania', code: 'AL'},
            {name: 'Algeria', code: 'DZ'},
            {name: 'American Samoa', code: 'AS'},
            {name: 'Andorra', code: 'AD'},
            {name: 'Angola', code: 'AO'},
            {name: 'Anguilla', code: 'AI'},
            {name: 'Antarctica', code: 'AQ'},
            {name: 'Antigua and Barbuda', code: 'AG'},
            {name: 'Argentina', code: 'AR'},
            {name: 'Armenia', code: 'AM'},
            {name: 'Aruba', code: 'AW'},
            {name: 'Australia', code: 'AU'},
            {name: 'Austria', code: 'AT'},
            {name: 'Azerbaijan', code: 'AZ'},
            {name: 'Bahamas', code: 'BS'},
            {name: 'Bahrain', code: 'BH'},
            {name: 'Bangladesh', code: 'BD'},
            {name: 'Barbados', code: 'BB'},
            {name: 'Belarus', code: 'BY'},
            {name: 'Belgium', code: 'BE'},
            {name: 'Belize', code: 'BZ'},
            {name: 'Benin', code: 'BJ'},
            {name: 'Bermuda', code: 'BM'},
            {name: 'Bhutan', code: 'BT'},
            {name: 'Bolivia', code: 'BO'},
            {name: 'Bosnia and Herzegovina', code: 'BA'},
            {name: 'Botswana', code: 'BW'},
            {name: 'Bouvet Island', code: 'BV'},
            {name: 'Brazil', code: 'BR'},
            {name: 'British Indian Ocean Territory', code: 'IO'},
            {name: 'Brunei Darussalam', code: 'BN'},
            {name: 'Bulgaria', code: 'BG'},
            {name: 'Burkina Faso', code: 'BF'},
            {name: 'Burundi', code: 'BI'},
            {name: 'Cambodia', code: 'KH'},
            {name: 'Cameroon', code: 'CM'},
            {name: 'Canada', code: 'CA'},
            {name: 'Cape Verde', code: 'CV'},
            {name: 'Cayman Islands', code: 'KY'},
            {name: 'Central African Republic', code: 'CF'},
            {name: 'Chad', code: 'TD'},
            {name: 'Chile', code: 'CL'},
            {name: 'China', code: 'CN'},
            {name: 'Christmas Island', code: 'CX'},
            {name: 'Cocos (Keeling) Islands', code: 'CC'},
            {name: 'Colombia', code: 'CO'},
            {name: 'Comoros', code: 'KM'},
            {name: 'Congo', code: 'CG'},
            {name: 'Congo, The Democratic Republic of the', code: 'CD'},
            {name: 'Cook Islands', code: 'CK'},
            {name: 'Costa Rica', code: 'CR'},
            {name: 'Cote D\'Ivoire', code: 'CI'},
            {name: 'Croatia', code: 'HR'},
            {name: 'Cuba', code: 'CU'},
            {name: 'Cyprus', code: 'CY'},
            {name: 'Czech Republic', code: 'CZ'},
            {name: 'Denmark', code: 'DK'},
            {name: 'Djibouti', code: 'DJ'},
            {name: 'Dominica', code: 'DM'},
            {name: 'Dominican Republic', code: 'DO'},
            {name: 'Ecuador', code: 'EC'},
            {name: 'Egypt', code: 'EG'},
            {name: 'El Salvador', code: 'SV'},
            {name: 'Equatorial Guinea', code: 'GQ'},
            {name: 'Eritrea', code: 'ER'},
            {name: 'Estonia', code: 'EE'},
            {name: 'Ethiopia', code: 'ET'},
            {name: 'Falkland Islands (Malvinas)', code: 'FK'},
            {name: 'Faroe Islands', code: 'FO'},
            {name: 'Fiji', code: 'FJ'},
            {name: 'Finland', code: 'FI'},
            {name: 'France', code: 'FR'},
            {name: 'French Guiana', code: 'GF'},
            {name: 'French Polynesia', code: 'PF'},
            {name: 'French Southern Territories', code: 'TF'},
            {name: 'Gabon', code: 'GA'},
            {name: 'Gambia', code: 'GM'},
            {name: 'Georgia', code: 'GE'},
            {name: 'Germany', code: 'DE'},
            {name: 'Ghana', code: 'GH'},
            {name: 'Gibraltar', code: 'GI'},
            {name: 'Greece', code: 'GR'},
            {name: 'Greenland', code: 'GL'},
            {name: 'Grenada', code: 'GD'},
            {name: 'Guadeloupe', code: 'GP'},
            {name: 'Guam', code: 'GU'},
            {name: 'Guatemala', code: 'GT'},
            {name: 'Guernsey', code: 'GG'},
            {name: 'Guinea', code: 'GN'},
            {name: 'Guinea-Bissau', code: 'GW'},
            {name: 'Guyana', code: 'GY'},
            {name: 'Haiti', code: 'HT'},
            {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
            {name: 'Holy See (Vatican City State)', code: 'VA'},
            {name: 'Honduras', code: 'HN'},
            {name: 'Hong Kong', code: 'HK'},
            {name: 'Hungary', code: 'HU'},
            {name: 'Iceland', code: 'IS'},
            {name: 'India', code: 'IN'},
            {name: 'Indonesia', code: 'ID'},
            {name: 'Iran, Islamic Republic Of', code: 'IR'},
            {name: 'Iraq', code: 'IQ'},
            {name: 'Ireland', code: 'IE'},
            {name: 'Isle of Man', code: 'IM'},
            {name: 'Israel', code: 'IL'},
            {name: 'Italy', code: 'IT'},
            {name: 'Jamaica', code: 'JM'},
            {name: 'Japan', code: 'JP'},
            {name: 'Jersey', code: 'JE'},
            {name: 'Jordan', code: 'JO'},
            {name: 'Kazakhstan', code: 'KZ'},
            {name: 'Kenya', code: 'KE'},
            {name: 'Kiribati', code: 'KI'},
            {name: 'Korea, Democratic People\'s Republic of', code: 'KP'},
            {name: 'Korea, Republic of', code: 'KR'},
            {name: 'Kuwait', code: 'KW'},
            {name: 'Kyrgyzstan', code: 'KG'},
            {name: 'Lao People\'s Democratic Republic', code: 'LA'},
            {name: 'Latvia', code: 'LV'},
            {name: 'Lebanon', code: 'LB'},
            {name: 'Lesotho', code: 'LS'},
            {name: 'Liberia', code: 'LR'},
            {name: 'Libyan Arab Jamahiriya', code: 'LY'},
            {name: 'Liechtenstein', code: 'LI'},
            {name: 'Lithuania', code: 'LT'},
            {name: 'Luxembourg', code: 'LU'},
            {name: 'Macao', code: 'MO'},
            {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
            {name: 'Madagascar', code: 'MG'},
            {name: 'Malawi', code: 'MW'},
            {name: 'Malaysia', code: 'MY'},
            {name: 'Maldives', code: 'MV'},
            {name: 'Mali', code: 'ML'},
            {name: 'Malta', code: 'MT'},
            {name: 'Marshall Islands', code: 'MH'},
            {name: 'Martinique', code: 'MQ'},
            {name: 'Mauritania', code: 'MR'},
            {name: 'Mauritius', code: 'MU'},
            {name: 'Mayotte', code: 'YT'},
            {name: 'Mexico', code: 'MX'},
            {name: 'Micronesia, Federated States of', code: 'FM'},
            {name: 'Moldova, Republic of', code: 'MD'},
            {name: 'Monaco', code: 'MC'},
            {name: 'Mongolia', code: 'MN'},
            {name: 'Montserrat', code: 'MS'},
            {name: 'Morocco', code: 'MA'},
            {name: 'Mozambique', code: 'MZ'},
            {name: 'Myanmar', code: 'MM'},
            {name: 'Namibia', code: 'NA'},
            {name: 'Nauru', code: 'NR'},
            {name: 'Nepal', code: 'NP'},
            {name: 'Netherlands', code: 'NL'},
            {name: 'Netherlands Antilles', code: 'AN'},
            {name: 'New Caledonia', code: 'NC'},
            {name: 'New Zealand', code: 'NZ'},
            {name: 'Nicaragua', code: 'NI'},
            {name: 'Niger', code: 'NE'},
            {name: 'Nigeria', code: 'NG'},
            {name: 'Niue', code: 'NU'},
            {name: 'Norfolk Island', code: 'NF'},
            {name: 'Northern Mariana Islands', code: 'MP'},
            {name: 'Norway', code: 'NO'},
            {name: 'Oman', code: 'OM'},
            {name: 'Pakistan', code: 'PK'},
            {name: 'Palau', code: 'PW'},
            {name: 'Palestinian Territory, Occupied', code: 'PS'},
            {name: 'Panama', code: 'PA'},
            {name: 'Papua New Guinea', code: 'PG'},
            {name: 'Paraguay', code: 'PY'},
            {name: 'Peru', code: 'PE'},
            {name: 'Philippines', code: 'PH'},
            {name: 'Pitcairn', code: 'PN'},
            {name: 'Poland', code: 'PL'},
            {name: 'Portugal', code: 'PT'},
            {name: 'Puerto Rico', code: 'PR'},
            {name: 'Qatar', code: 'QA'},
            {name: 'Reunion', code: 'RE'},
            {name: 'Romania', code: 'RO'},
            {name: 'Russian Federation', code: 'RU'},
            {name: 'Rwanda', code: 'RW'},
            {name: 'Saint Helena', code: 'SH'},
            {name: 'Saint Kitts and Nevis', code: 'KN'},
            {name: 'Saint Lucia', code: 'LC'},
            {name: 'Saint Pierre and Miquelon', code: 'PM'},
            {name: 'Saint Vincent and the Grenadines', code: 'VC'},
            {name: 'Samoa', code: 'WS'},
            {name: 'San Marino', code: 'SM'},
            {name: 'Sao Tome and Principe', code: 'ST'},
            {name: 'Saudi Arabia', code: 'SA'},
            {name: 'Senegal', code: 'SN'},
            {name: 'Serbia and Montenegro', code: 'CS'},
            {name: 'Seychelles', code: 'SC'},
            {name: 'Sierra Leone', code: 'SL'},
            {name: 'Singapore', code: 'SG'},
            {name: 'Slovakia', code: 'SK'},
            {name: 'Slovenia', code: 'SI'},
            {name: 'Solomon Islands', code: 'SB'},
            {name: 'Somalia', code: 'SO'},
            {name: 'South Africa', code: 'ZA'},
            {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
            {name: 'Spain', code: 'ES'},
            {name: 'Sri Lanka', code: 'LK'},
            {name: 'Sudan', code: 'SD'},
            {name: 'Suriname', code: 'SR'},
            {name: 'Svalbard and Jan Mayen', code: 'SJ'},
            {name: 'Swaziland', code: 'SZ'},
            {name: 'Sweden', code: 'SE'},
            {name: 'Switzerland', code: 'CH'},
            {name: 'Syrian Arab Republic', code: 'SY'},
            {name: 'Taiwan, Province of China', code: 'TW'},
            {name: 'Tajikistan', code: 'TJ'},
            {name: 'Tanzania, United Republic of', code: 'TZ'},
            {name: 'Thailand', code: 'TH'},
            {name: 'Timor-Leste', code: 'TL'},
            {name: 'Togo', code: 'TG'},
            {name: 'Tokelau', code: 'TK'},
            {name: 'Tonga', code: 'TO'},
            {name: 'Trinidad and Tobago', code: 'TT'},
            {name: 'Tunisia', code: 'TN'},
            {name: 'Turkey', code: 'TR'},
            {name: 'Turkmenistan', code: 'TM'},
            {name: 'Turks and Caicos Islands', code: 'TC'},
            {name: 'Tuvalu', code: 'TV'},
            {name: 'Uganda', code: 'UG'},
            {name: 'Ukraine', code: 'UA'},
            {name: 'United Arab Emirates', code: 'AE'},
            {name: 'United Kingdom', code: 'GB'},
            {name: 'United States', code: 'US'},
            {name: 'United States Minor Outlying Islands', code: 'UM'},
            {name: 'Uruguay', code: 'UY'},
            {name: 'Uzbekistan', code: 'UZ'},
            {name: 'Vanuatu', code: 'VU'},
            {name: 'Venezuela', code: 'VE'},
            {name: 'Vietnam', code: 'VN'},
            {name: 'Virgin Islands, British', code: 'VG'},
            {name: 'Virgin Islands, U.S.', code: 'VI'},
            {name: 'Wallis and Futuna', code: 'WF'},
            {name: 'Western Sahara', code: 'EH'},
            {name: 'Yemen', code: 'YE'},
            {name: 'Zambia', code: 'ZM'},
            {name: 'Zimbabwe', code: 'ZW'}
          ];


          // Multiple
          vm.someGroupFn = function (item){

            if (item.name[0] >= 'A' && item.name[0] <= 'M')
                return 'From A - M';

            if (item.name[0] >= 'N' && item.name[0] <= 'Z')
                return 'From N - Z';

          };

          vm.counter = 0;
          vm.someFunction = function (item, model){
            vm.counter++;
            vm.eventResult = {item: item, model: model};
          };

          vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];

          vm.multipleDemo = {};
          vm.multipleDemo.colors = ['Blue','Red'];
          vm.multipleDemo.selectedPeople = [vm.people[5], vm.people[4]];
          vm.multipleDemo.selectedPeopleWithGroupBy = [vm.people[8], vm.people[6]];
          vm.multipleDemo.selectedPeopleSimple = ['samantha@email.com','wladimir@email.com'];
        }
    }

})();

/**=========================================================
 * Module: upload.js
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.forms')
        .controller('FileUploadController', FileUploadController);

    FileUploadController.$inject = ['FileUploader'];
    function FileUploadController(FileUploader) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var uploader = vm.uploader = new FileUploader({
              url: 'server/upload.php'
          });

          // FILTERS

          uploader.filters.push({
              name: 'customFilter',
              fn: function(/*item, options*/) {
                  return this.queue.length < 10;
              }
          });

          // CALLBACKS

          uploader.onWhenAddingFileFailed = function(item /*{File|FileLikeObject}*/, filter, options) {
              console.info('onWhenAddingFileFailed', item, filter, options);
          };
          uploader.onAfterAddingFile = function(fileItem) {
              console.info('onAfterAddingFile', fileItem);
          };
          uploader.onAfterAddingAll = function(addedFileItems) {
              console.info('onAfterAddingAll', addedFileItems);
          };
          uploader.onBeforeUploadItem = function(item) {
              console.info('onBeforeUploadItem', item);
          };
          uploader.onProgressItem = function(fileItem, progress) {
              console.info('onProgressItem', fileItem, progress);
          };
          uploader.onProgressAll = function(progress) {
              console.info('onProgressAll', progress);
          };
          uploader.onSuccessItem = function(fileItem, response, status, headers) {
              console.info('onSuccessItem', fileItem, response, status, headers);
          };
          uploader.onErrorItem = function(fileItem, response, status, headers) {
              console.info('onErrorItem', fileItem, response, status, headers);
          };
          uploader.onCancelItem = function(fileItem, response, status, headers) {
              console.info('onCancelItem', fileItem, response, status, headers);
          };
          uploader.onCompleteItem = function(fileItem, response, status, headers) {
              console.info('onCompleteItem', fileItem, response, status, headers);
          };
          uploader.onCompleteAll = function() {
              console.info('onCompleteAll');
          };

          console.info('uploader', uploader);
        }
    }
})();

/**=========================================================
 * Module: skycons.js
 * Include any animated weather icon from Skycons
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.icons')
        .directive('skycon', skycon);

    function skycon () {

        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          var skycons = new Skycons({'color': (attrs.color || 'white')});

          element.html('<canvas width="' + attrs.width + '" height="' + attrs.height + '"></canvas>');

          skycons.add(element.children()[0], attrs.skycon);

          skycons.play();
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .config(lazyloadConfig);

    lazyloadConfig.$inject = ['$ocLazyLoadProvider', 'APP_REQUIRES'];
    function lazyloadConfig($ocLazyLoadProvider, APP_REQUIRES){

      // Lazy Load modules configuration
      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: APP_REQUIRES.modules
      });

    }
})();
(function() {
    'use strict';

    angular
        .module('app.lazyload')
        .constant('APP_REQUIRES', {
          // jQuery based and standalone scripts
          scripts: {
            'whirl':              ['vendor/whirl/dist/whirl.css'],
            'animo':              ['vendor/animo.js/animo.js'],
            'fastclick':          ['vendor/fastclick/lib/fastclick.js'],
            'modernizr':          ['vendor/modernizr/modernizr.custom.js'],
            'animate':            ['vendor/animate.css/animate.min.css'],
            'skycons':            ['vendor/skycons/skycons.js'],
            'icons':              ['vendor/fontawesome/css/font-awesome.min.css',
                                   'vendor/simple-line-icons/css/simple-line-icons.css'],
            'weather-icons':      ['vendor/weather-icons/css/weather-icons.min.css',
                                   'vendor/weather-icons/css/weather-icons-wind.min.css'],
            'sparklines':         ['vendor/sparkline/index.js'],
            'wysiwyg':            ['vendor/bootstrap-wysiwyg/bootstrap-wysiwyg.js',
                                   'vendor/bootstrap-wysiwyg/external/jquery.hotkeys.js'],
            'slimscroll':         ['vendor/slimScroll/jquery.slimscroll.min.js'],
            'screenfull':         ['vendor/screenfull/dist/screenfull.js'],
            'vector-map':         ['vendor/ika.jvectormap/jquery-jvectormap-1.2.2.min.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-1.2.2.css'],
            'vector-map-maps':    ['vendor/ika.jvectormap/jquery-jvectormap-world-mill-en.js',
                                   'vendor/ika.jvectormap/jquery-jvectormap-us-mill-en.js'],
            'loadGoogleMapsJS':   ['vendor/load-google-maps/load-google-maps.js'],
            'flot-chart':         ['vendor/flot/jquery.flot.js'],
            'flot-chart-plugins': ['vendor/flot.tooltip/js/jquery.flot.tooltip.min.js',
                                   'vendor/flot/jquery.flot.resize.js',
                                   'vendor/flot/jquery.flot.pie.js',
                                   'vendor/flot/jquery.flot.time.js',
                                   'vendor/flot/jquery.flot.categories.js',
                                   'vendor/flot-spline/js/jquery.flot.spline.min.js'],
            'moment' :            ['vendor/moment/min/moment.min.js','vendor/moment/min/moment-with-locales.min.js'],
            'inputmask':          ['vendor/jquery.inputmask/dist/jquery.inputmask.bundle.js'],
            'flatdoc':            ['vendor/flatdoc/flatdoc.js'],
            'codemirror':         ['vendor/codemirror/lib/codemirror.js',
                                   'vendor/codemirror/lib/codemirror.css'],
            // modes for common web files
            'codemirror-modes-web': ['vendor/codemirror/mode/javascript/javascript.js',
                                     'vendor/codemirror/mode/xml/xml.js',
                                     'vendor/codemirror/mode/htmlmixed/htmlmixed.js',
                                     'vendor/codemirror/mode/css/css.js'],
            'taginput' :          ['vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
                                   'vendor/bootstrap-tagsinput/dist/bootstrap-tagsinput.min.js'],
            'filestyle':          ['vendor/bootstrap-filestyle/src/bootstrap-filestyle.js'],
            'morris':             ['vendor/raphael/raphael.js',
                                   'vendor/morris.js/morris.js',
                                   'vendor/morris.js/morris.css'],
            'loaders.css':          ['vendor/loaders.css/loaders.css'],
            'spinkit':              ['vendor/spinkit/css/spinkit.css']
          },
          // Angular based script (use the right module name)
          modules: [
            {name: 'toaster',                   files: ['vendor/angularjs-toaster/toaster.js',
                                                       'vendor/angularjs-toaster/toaster.css']},
            {name: 'localytics.directives',     files: ['vendor/chosen_v1.2.0/chosen.jquery.min.js',
                                                       'vendor/chosen_v1.2.0/chosen.min.css',
                                                       'vendor/angular-chosen-localytics/dist/angular-chosen.js'],
                                                        serie: true},
            {name: 'ngDialog',                  files: ['vendor/ngDialog/js/ngDialog.min.js',
                                                       'vendor/ngDialog/css/ngDialog.min.css',
                                                       'vendor/ngDialog/css/ngDialog-theme-default.min.css'] },
            {name: 'ngWig',                     files: ['vendor/ngWig/dist/ng-wig.min.js'] },
            {name: 'ngTable',                   files: ['vendor/ng-table/dist/ng-table.min.js',
                                                        'vendor/ng-table/dist/ng-table.min.css']},
            {name: 'ngTableExport',             files: ['vendor/ng-table-export/ng-table-export.js']},
            {name: 'angularBootstrapNavTree',   files: ['vendor/angular-bootstrap-nav-tree/dist/abn_tree_directive.js',
                                                        'vendor/angular-bootstrap-nav-tree/dist/abn_tree.css']},
            {name: 'xeditable',                 files: ['vendor/angular-xeditable/dist/js/xeditable.js',
                                                        'vendor/angular-xeditable/dist/css/xeditable.css']},
            {name: 'angularFileUpload',         files: ['vendor/angular-file-upload/dist/angular-file-upload.js']},
            {name: 'ngImgCrop',                 files: ['vendor/ng-img-crop/compile/unminified/ng-img-crop.js',
                                                        'vendor/ng-img-crop/compile/unminified/ng-img-crop.css']},
            {name: 'ui.select',                 files: ['vendor/angular-ui-select/dist/select.js',
                                                        'vendor/angular-ui-select/dist/select.css']},
            {name: 'ui.codemirror',             files: ['vendor/angular-ui-codemirror/ui-codemirror.js']},
            {name: 'angular-carousel',          files: ['vendor/angular-carousel/dist/angular-carousel.css',
                                                        'vendor/angular-carousel/dist/angular-carousel.js']},
            {name: 'infinite-scroll',           files: ['vendor/ngInfiniteScroll/build/ng-infinite-scroll.js']},
            {name: 'ui.bootstrap-slider',       files: ['vendor/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                                                        'vendor/seiyria-bootstrap-slider/dist/css/bootstrap-slider.min.css',
                                                        'vendor/angular-bootstrap-slider/slider.js'], serie: true},
            {name: 'ui.grid',                   files: ['vendor/angular-ui-grid/ui-grid.min.css',
                                                        'vendor/angular-ui-grid/ui-grid.min.js']},
            {name: 'summernote',                files: ['vendor/bootstrap/js/modal.js',
                                                        'vendor/bootstrap/js/dropdown.js',
                                                        'vendor/bootstrap/js/tooltip.js',
                                                        'vendor/summernote/dist/summernote.css',
                                                        'vendor/summernote/dist/summernote.js',
                                                        'vendor/angular-summernote/dist/angular-summernote.js'
                                                        ], serie: true},
            {name: 'angular-rickshaw',          files: ['vendor/d3/d3.min.js',
                                                        'vendor/rickshaw/rickshaw.js',
                                                        'vendor/rickshaw/rickshaw.min.css',
                                                        'vendor/angular-rickshaw/rickshaw.js'], serie: true},
            {name: 'angular-chartist',          files: ['vendor/chartist/dist/chartist.min.css',
                                                        'vendor/chartist/dist/chartist.js',
                                                        'vendor/angular-chartist.js/dist/angular-chartist.js'], serie: true},
            {name: 'ui.map',                    files: ['vendor/angular-ui-map/ui-map.js']},
            {name: 'datatables',                files: ['vendor/datatables/media/css/jquery.dataTables.css',
                                                        'vendor/datatables/media/js/jquery.dataTables.js',
                                                        'vendor/datatables-buttons/js/dataTables.buttons.js',
                                                        //'vendor/datatables-buttons/css/buttons.bootstrap.css',
                                                        'vendor/datatables-buttons/js/buttons.bootstrap.js',
                                                        'vendor/datatables-buttons/js/buttons.colVis.js',
                                                        'vendor/datatables-buttons/js/buttons.flash.js',
                                                        'vendor/datatables-buttons/js/buttons.html5.js',
                                                        'vendor/datatables-buttons/js/buttons.print.js',
                                                        'vendor/angular-datatables/dist/angular-datatables.js',
                                                        'vendor/angular-datatables/dist/plugins/buttons/angular-datatables.buttons.js'],
                                                        serie: true},
            {name: 'angular-jqcloud',           files: ['vendor/jqcloud2/dist/jqcloud.css',
                                                        'vendor/jqcloud2/dist/jqcloud.js',
                                                        'vendor/angular-jqcloud/angular-jqcloud.js']},
            {name: 'angularGrid',               files: ['vendor/ag-grid/dist/styles/ag-grid.css',
                                                        'vendor/ag-grid/dist/ag-grid.js',
                                                        'vendor/ag-grid/dist/styles/theme-dark.css',
                                                        'vendor/ag-grid/dist/styles/theme-fresh.css']},
            {name: 'ng-nestable',               files: ['vendor/ng-nestable/src/angular-nestable.js',
                                                        'vendor/nestable/jquery.nestable.js']},
            {name: 'akoenig.deckgrid',          files: ['vendor/angular-deckgrid/angular-deckgrid.js']},
            {name: 'oitozero.ngSweetAlert',     files: ['vendor/sweetalert/dist/sweetalert.css',
                                                        'vendor/sweetalert/dist/sweetalert.min.js',
                                                        'vendor/angular-sweetalert/SweetAlert.js'], serie: true},
            {name: 'bm.bsTour',                 files: ['vendor/bootstrap-tour/build/css/bootstrap-tour.css',
                                                        'vendor/bootstrap-tour/build/js/bootstrap-tour-standalone.js',
                                                        'vendor/angular-bootstrap-tour/dist/angular-bootstrap-tour.js'], serie: true},
            {name: 'ui.knob',                   files: ['vendor/angular-knob/src/angular-knob.js',
                                                        'vendor/jquery-knob/dist/jquery.knob.min.js']},
            {name: 'easypiechart',              files: ['vendor/jquery.easy-pie-chart/dist/angular.easypiechart.min.js']},
            {name: 'colorpicker.module',        files: ['vendor/angular-bootstrap-colorpicker/css/colorpicker.css',
                                                        'vendor/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js']},
            {name: 'ui.sortable',               files: ['vendor/jquery-ui/jquery-ui.min.js',
                                                        'vendor/angular-ui-sortable/sortable.js'], serie: true},
            {name: 'ui.calendar',               files: ['vendor/jquery-ui/jquery-ui.min.js',
                                                        'vendor/jqueryui-touch-punch/jquery.ui.touch-punch.min.js',
                                                        'vendor/fullcalendar/dist/fullcalendar.min.js',
                                                        'vendor/fullcalendar/dist/gcal.js',
                                                        'vendor/fullcalendar/dist/fullcalendar.css',
                                                        'vendor/angular-ui-calendar/src/calendar.js'], serie: true},
            {name: 'chart.js',                   files: ['vendor/chart.js/dist/Chart.js',
                                                         'vendor/angular-chart.js/dist/angular-chart.js'], serie: true},
          ]
        })
        ;

})();

(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .config(loadingbarConfig)
        ;
    loadingbarConfig.$inject = ['cfpLoadingBarProvider'];
    function loadingbarConfig(cfpLoadingBarProvider){
      cfpLoadingBarProvider.includeBar = true;
      cfpLoadingBarProvider.includeSpinner = false;
      cfpLoadingBarProvider.latencyThreshold = 500;
      cfpLoadingBarProvider.parentSelector = '.wrapper > section';
    }
})();
(function() {
    'use strict';

    angular
        .module('app.loadingbar')
        .run(loadingbarRun)
        ;
    loadingbarRun.$inject = ['$rootScope', '$timeout', 'cfpLoadingBar'];
    function loadingbarRun($rootScope, $timeout, cfpLoadingBar){

      // Loading bar transition
      // -----------------------------------
      var thBar;
      $rootScope.$on('$stateChangeStart', function() {
          if($('.wrapper > section').length) // check if bar container exists
            thBar = $timeout(function() {
              cfpLoadingBar.start();
            }, 0); // sets a latency Threshold
      });
      $rootScope.$on('$stateChangeSuccess', function(event) {
          event.targetScope.$watch('$viewContentLoaded', function () {
            $timeout.cancel(thBar);
            cfpLoadingBar.complete();
          });
      });

    }

})();
(function() {
    'use strict';

    angular
        .module('app.locale')
        .config(localeConfig)
        ;
    localeConfig.$inject = ['tmhDynamicLocaleProvider'];
    function localeConfig(tmhDynamicLocaleProvider){

      tmhDynamicLocaleProvider.localeLocationPattern('vendor/angular-i18n/angular-locale_{{locale}}.js');
      // tmhDynamicLocaleProvider.useStorage('$cookieStore');

    }
})();
/**=========================================================
 * Module: locale.js
 * Demo for locale settings
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.locale')
        .controller('LocalizationController', LocalizationController);

    LocalizationController.$inject = ['$rootScope', 'tmhDynamicLocale', '$locale'];
    function LocalizationController($rootScope, tmhDynamicLocale, $locale) {

        activate();

        ////////////////

        function activate() {
          $rootScope.availableLocales = {
            'en': 'English',
            'es': 'Spanish',
            'de': 'German',
            'fr': 'French',
            'ar': 'Arabic',
            'ja': 'Japanese',
            'ko': 'Korean',
            'zh': 'Chinese'};

          $rootScope.model = {selectedLocale: 'en'};

          $rootScope.$locale = $locale;

          $rootScope.changeLocale = tmhDynamicLocale.set;
        }
    }
})();

/**=========================================================
 * Module: demo-pagination.js
 * Provides a simple demo for pagination
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailboxController', MailboxController);

    function MailboxController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.folders = [
            {name: 'Inbox',   folder: 'inbox',   alert: 42, icon: 'fa-inbox' },
            {name: 'Starred', folder: 'starred', alert: 10, icon: 'fa-star' },
            {name: 'Sent',    folder: 'sent',    alert: 0,  icon: 'fa-paper-plane-o' },
            {name: 'Draft',   folder: 'draft',   alert: 5,  icon: 'fa-edit' },
            {name: 'Trash',   folder: 'trash',   alert: 0,  icon: 'fa-trash'}
          ];

          vm.labels = [
            {name: 'Red',     color: 'danger'},
            {name: 'Pink',    color: 'pink'},
            {name: 'Blue',    color: 'info'},
            {name: 'Yellow',  color: 'warning'}
          ];

          vm.mail = {
            cc: false,
            bcc: false
          };
          // Mailbox editr initial content
          vm.content = '<p>Type something..</p>';
        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailFolderController', MailFolderController);

    MailFolderController.$inject = ['mails', '$stateParams'];
    function MailFolderController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.folder = {};
          // no filter for inbox
          vm.folder.folder = $stateParams.folder === 'inbox' ? '' : $stateParams.folder;

          mails.all().then(function(mails){
            vm.mails = mails;
          });
        }
    }
})();

// A RESTful factory for retrieving mails from json file

(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .factory('mails', mails);

    mails.$inject = ['$http'];
    function mails($http) {
        var service = {
            all: all,
            get: get
        };
        return service;

        ////////////////

        function readMails() {
          var path = 'server/mails.json';
          return $http.get(path).then(function (resp) {
            return resp.data.mails;
          });
        }

        function all() {
          return readMails();
        }

        function get(id) {
          return readMails().then(function(mails){
            for (var i = 0; i < mails.length; i++) {
              if (+mails[i].id === +id) return mails[i];
            }
            return null;
          });
        }
    }
})();


(function() {
    'use strict';

    angular
        .module('app.mailbox')
        .controller('MailViewController', MailViewController);

    MailViewController.$inject = ['mails', '$stateParams'];
    function MailViewController(mails, $stateParams) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          mails.get($stateParams.mid).then(function(mail){
            vm.mail = mail;
          });
        }
    }
})();

/**=========================================================
 * Module: modals.js
 * Provides a simple way to implement bootstrap modals from templates
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('ModalGmapController', ModalGmapController);

    ModalGmapController.$inject = ['$uibModal'];
    function ModalGmapController($uibModal) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          vm.open = function (size) {

            //var modalInstance =
            $uibModal.open({
              templateUrl: '/myModalContent.html',
              controller: ModalInstanceCtrl,
              size: size
            });
          };

          // Please note that $uibModalInstance represents a modal window (instance) dependency.
          // It is not the same as the $uibModal service used above.

          ModalInstanceCtrl.$inject = ['$scope', '$uibModalInstance', '$timeout'];
          function ModalInstanceCtrl($scope, $uibModalInstance, $timeout) {

            $uibModalInstance.opened.then(function () {
              var position = new google.maps.LatLng(33.790807, -117.835734);

              $scope.mapOptionsModal = {
                zoom: 14,
                center: position,
                mapTypeId: google.maps.MapTypeId.ROADMAP
              };

              // we use timeout to wait maps to be ready before add a markers
              $timeout(function(){
                // 1. Add a marker at the position it was initialized
                new google.maps.Marker({
                  map: $scope.myMapModal,
                  position: position
                });
                // 2. Trigger a resize so the map is redrawed
                google.maps.event.trigger($scope.myMapModal, 'resize');
                // 3. Move to the center if it is misaligned
                $scope.myMapModal.panTo(position);
              });

            });

            $scope.ok = function () {
              $uibModalInstance.close('closed');
            };

            $scope.cancel = function () {
              $uibModalInstance.dismiss('cancel');
            };

          }

        }
    }

})();


(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('GMapController', GMapController);

    GMapController.$inject = ['$timeout'];
    function GMapController($timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          var position = [
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.790807, -117.835734),
              new google.maps.LatLng(33.787453, -117.835858)
            ];

          vm.addMarker = addMarker;
          // we use timeout to wait maps to be ready before add a markers
          $timeout(function(){
            addMarker(vm.myMap1, position[0]);
            addMarker(vm.myMap2, position[1]);
            addMarker(vm.myMap3, position[2]);
            addMarker(vm.myMap5, position[3]);
          });

          vm.mapOptions1 = {
            zoom: 14,
            center: position[0],
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          vm.mapOptions2 = {
            zoom: 19,
            center: position[1],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          vm.mapOptions3 = {
            zoom: 14,
            center: position[2],
            mapTypeId: google.maps.MapTypeId.SATELLITE
          };

          vm.mapOptions4 = {
            zoom: 14,
            center: position[3],
            mapTypeId: google.maps.MapTypeId.ROADMAP
          };

          // for multiple markers
          $timeout(function(){
            addMarker(vm.myMap4, position[3]);
            addMarker(vm.myMap4, position[4]);
          });

          // custom map style
          var MapStyles = [{'featureType':'water','stylers':[{'visibility':'on'},{'color':'#bdd1f9'}]},{'featureType':'all','elementType':'labels.text.fill','stylers':[{'color':'#334165'}]},{featureType:'landscape',stylers:[{color:'#e9ebf1'}]},{featureType:'road.highway',elementType:'geometry',stylers:[{color:'#c5c6c6'}]},{featureType:'road.arterial',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'road.local',elementType:'geometry',stylers:[{color:'#fff'}]},{featureType:'transit',elementType:'geometry',stylers:[{color:'#d8dbe0'}]},{featureType:'poi',elementType:'geometry',stylers:[{color:'#cfd5e0'}]},{featureType:'administrative',stylers:[{visibility:'on'},{lightness:33}]},{featureType:'poi.park',elementType:'labels',stylers:[{visibility:'on'},{lightness:20}]},{featureType:'road',stylers:[{color:'#d8dbe0',lightness:20}]}];
          vm.mapOptions5 = {
            zoom: 14,
            center: position[3],
            styles: MapStyles,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
          };

          ///////////////

          function addMarker(map, position) {
            return new google.maps.Marker({
              map: map,
              position: position
            });
          }

        }
    }
})();

/**=========================================================
 * Module: vector-map.js.js
 * Init jQuery Vector Map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .directive('vectorMap', vectorMap);

    vectorMap.$inject = ['VectorMap'];
    function vectorMap (VectorMap) {
        var directive = {
            link: link,
            restrict: 'EA',
            scope: {
              seriesData: '=',
              markersData: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {

          var defaultColors = {
              markerColor:  '#23b7e5',      // the marker points
              bgColor:      'transparent',      // the background
              scaleColors:  ['#878c9a'],    // the color of the region in the serie
              regionFill:   '#bbbec6'       // the base region color
          };

          var mapHeight   = attrs.height || '300',
              options     = {
                markerColor:  attrs.markerColor  || defaultColors.markerColor,
                bgColor:      attrs.bgColor      || defaultColors.bgColor,
                scale:        attrs.scale        || 1,
                scaleColors:  attrs.scaleColors  || defaultColors.scaleColors,
                regionFill:   attrs.regionFill   || defaultColors.regionFill,
                mapName:      attrs.mapName      || 'world_mill_en'
              };

          element.css('height', mapHeight);

          VectorMap.init( element , options, scope.seriesData, scope.markersData);
        }
    }

})();

/**=========================================================
 * Module: vector-map.js
 * Services to initialize vector map plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .service('VectorMap', VectorMap);

    function VectorMap() {
        this.init = init;

        ////////////////

        function init($element, opts, series, markers) {
          $element.vectorMap({
            map:             opts.mapName,
            backgroundColor: opts.bgColor,
            zoomMin:         1,
            zoomMax:         8,
            zoomOnScroll:    false,
            regionStyle: {
              initial: {
                'fill':           opts.regionFill,
                'fill-opacity':   1,
                'stroke':         'none',
                'stroke-width':   1.5,
                'stroke-opacity': 1
              },
              hover: {
                'fill-opacity': 0.8
              },
              selected: {
                fill: 'blue'
              },
              selectedHover: {
              }
            },
            focusOn:{ x:0.4, y:0.6, scale: opts.scale},
            markerStyle: {
              initial: {
                fill: opts.markerColor,
                stroke: opts.markerColor
              }
            },
            onRegionLabelShow: function(e, el, code) {
              if ( series && series[code] )
                el.html(el.html() + ': ' + series[code] + ' visitors');
            },
            markers: markers,
            series: {
                regions: [{
                    values: series,
                    scale: opts.scaleColors,
                    normalizeFunction: 'polynomial'
                }]
            },
          });
        }
    }
})();

/**=========================================================
 * Module: vmaps,js
 * jVector Maps support
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.maps')
        .controller('VectorMapController', VectorMapController);

    function VectorMapController() {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.seriesData = {
            'CA': 11100,   // Canada
            'DE': 2510,    // Germany
            'FR': 3710,    // France
            'AU': 5710,    // Australia
            'GB': 8310,    // Great Britain
            'RU': 9310,    // Russia
            'BR': 6610,    // Brazil
            'IN': 7810,    // India
            'CN': 4310,    // China
            'US': 839,     // USA
            'SA': 410      // Saudi Arabia
          };

          vm.markersData = [
            { latLng:[41.90, 12.45],  name:'Vatican City'          },
            { latLng:[43.73, 7.41],   name:'Monaco'                },
            { latLng:[-0.52, 166.93], name:'Nauru'                 },
            { latLng:[-8.51, 179.21], name:'Tuvalu'                },
            { latLng:[7.11,171.06],   name:'Marshall Islands'      },
            { latLng:[17.3,-62.73],   name:'Saint Kitts and Nevis' },
            { latLng:[3.2,73.22],     name:'Maldives'              },
            { latLng:[35.88,14.5],    name:'Malta'                 },
            { latLng:[41.0,-71.06],   name:'New England'           },
            { latLng:[12.05,-61.75],  name:'Grenada'               },
            { latLng:[13.16,-59.55],  name:'Barbados'              },
            { latLng:[17.11,-61.85],  name:'Antigua and Barbuda'   },
            { latLng:[-4.61,55.45],   name:'Seychelles'            },
            { latLng:[7.35,134.46],   name:'Palau'                 },
            { latLng:[42.5,1.51],     name:'Andorra'               }
          ];
        }
    }
})();

/**=========================================================
 * Module: navbar-search.js
 * Navbar search toggler * Auto dismiss on ESC key
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .directive('searchOpen', searchOpen)
        .directive('searchDismiss', searchDismiss);

    //
    // directives definition
    //

    function searchOpen () {
        var directive = {
            controller: searchOpenController,
            restrict: 'A'
        };
        return directive;

    }

    function searchDismiss () {
        var directive = {
            controller: searchDismissController,
            restrict: 'A'
        };
        return directive;

    }

    //
    // Contrller definition
    //

    searchOpenController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchOpenController ($scope, $element, NavSearch) {
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.toggle);
    }

    searchDismissController.$inject = ['$scope', '$element', 'NavSearch'];
    function searchDismissController ($scope, $element, NavSearch) {

      var inputSelector = '.navbar-form input[type="text"]';

      $(inputSelector)
        .on('click', function (e) { e.stopPropagation(); })
        .on('keyup', function(e) {
          if (e.keyCode === 27) // ESC
            NavSearch.dismiss();
        });

      // click anywhere closes the search
      $(document).on('click', NavSearch.dismiss);
      // dismissable options
      $element
        .on('click', function (e) { e.stopPropagation(); })
        .on('click', NavSearch.dismiss);
    }

})();


/**=========================================================
 * Module: nav-search.js
 * Services to share navbar search functions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.navsearch')
        .service('NavSearch', NavSearch);

    function NavSearch() {
        this.toggle = toggle;
        this.dismiss = dismiss;

        ////////////////

        var navbarFormSelector = 'form.navbar-form';

        function toggle() {
          var navbarForm = $(navbarFormSelector);

          navbarForm.toggleClass('open');

          var isOpen = navbarForm.hasClass('open');

          navbarForm.find('input')[isOpen ? 'focus' : 'blur']();
        }

        function dismiss() {
          $(navbarFormSelector)
            .removeClass('open') // Close control
            .find('input[type="text"]').blur() // remove focus
            // .val('') // Empty input
            ;
        }
    }
})();

/**=========================================================
 * Module: demo-notify.js
 * Provides a simple demo for notify
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.notify')
        .controller('NotifyDemoCtrl', NotifyDemoCtrl);

    NotifyDemoCtrl.$inject = ['Notify', '$timeout'];
    function NotifyDemoCtrl(Notify, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
          vm.msgHtml = '<em class="fa fa-check"></em> Message with icon..';

          vm.notifyMsg = 'Some messages here..';
          vm.notifyOpts = {
            status: 'danger',
            pos: 'bottom-center'
          };

          // Service usage example
          $timeout(function(){

            Notify.alert(
                'This is a custom message from notify..',
                {status: 'success'}
            );

          }, 500);
        }
    }
})();

/**=========================================================
 * Module: notify.js
 * Directive for notify plugin
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.notify')
        .directive('notify', notify);

    notify.$inject = ['$window', 'Notify'];
    function notify ($window, Notify) {

        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              options: '=',
              message: '='
            }
        };
        return directive;

        function link(scope, element) {

          element.on('click', function (e) {
            e.preventDefault();
            Notify.alert(scope.message, scope.options);
          });
        }

    }

})();


/**=========================================================
 * Module: notify.js
 * Create a notifications that fade out automatically.
 * Based on Notify addon from UIKit (http://getuikit.com/docs/addons_notify.html)
 =========================================================*/

(function() {
    'use strict';
    angular
        .module('app.notify')
        .service('Notify', Notify);

    Notify.$inject = ['$timeout'];
    function Notify($timeout) {

        this.alert = notifyAlert;

        ////////////////

        function notifyAlert(msg, opts) {
            if ( msg ) {
                $timeout(function(){
                    $.notify(msg, opts || {});
                });
            }
        }
    }

})();

/**
 * Notify Addon definition as jQuery plugin
 * Adapted version to work with Bootstrap classes
 * More information http://getuikit.com/docs/addons_notify.html
 */
(function($){
    'use strict';
    var containers = {},
        messages   = {},
        notify     =  function(options){
            if ($.type(options) === 'string') {
                options = { message: options };
            }
            if (arguments[1]) {
                options = $.extend(options, $.type(arguments[1]) === 'string' ? {status:arguments[1]} : arguments[1]);
            }
            return (new Message(options)).show();
        },
        closeAll  = function(group, instantly){
            var id;
            if(group) {
                for(id in messages) { if(group===messages[id].group) messages[id].close(instantly); }
            } else {
                for(id in messages) { messages[id].close(instantly); }
            }
        };
    var Message = function(options){
        // var $this = this;
        this.options = $.extend({}, Message.defaults, options);
        this.uuid    = 'ID'+(new Date().getTime())+'RAND'+(Math.ceil(Math.random() * 100000));
        this.element = $([
            // @geedmo: alert-dismissable enables bs close icon
            '<div class="uk-notify-message alert-dismissable">',
                '<a class="close">&times;</a>',
                '<div>'+this.options.message+'</div>',
            '</div>'
        ].join('')).data('notifyMessage', this);
        // status
        if (this.options.status) {
            this.element.addClass('alert alert-'+this.options.status);
            this.currentstatus = this.options.status;
        }
        this.group = this.options.group;
        messages[this.uuid] = this;
        if(!containers[this.options.pos]) {
            containers[this.options.pos] = $('<div class="uk-notify uk-notify-'+this.options.pos+'"></div>').appendTo('body').on('click', '.uk-notify-message', function(){
                $(this).data('notifyMessage').close();
            });
        }
    };
    $.extend(Message.prototype, {
        uuid: false,
        element: false,
        timout: false,
        currentstatus: '',
        group: false,
        show: function() {
            if (this.element.is(':visible')) return;
            var $this = this;
            containers[this.options.pos].show().prepend(this.element);
            var marginbottom = parseInt(this.element.css('margin-bottom'), 10);
            this.element.css({'opacity':0, 'margin-top': -1*this.element.outerHeight(), 'margin-bottom':0}).animate({'opacity':1, 'margin-top': 0, 'margin-bottom':marginbottom}, function(){
                if ($this.options.timeout) {
                    var closefn = function(){ $this.close(); };
                    $this.timeout = setTimeout(closefn, $this.options.timeout);
                    $this.element.hover(
                        function() { clearTimeout($this.timeout); },
                        function() { $this.timeout = setTimeout(closefn, $this.options.timeout);  }
                    );
                }
            });
            return this;
        },
        close: function(instantly) {
            var $this    = this,
                finalize = function(){
                    $this.element.remove();
                    if(!containers[$this.options.pos].children().length) {
                        containers[$this.options.pos].hide();
                    }
                    delete messages[$this.uuid];
                };
            if(this.timeout) clearTimeout(this.timeout);
            if(instantly) {
                finalize();
            } else {
                this.element.animate({'opacity':0, 'margin-top': -1* this.element.outerHeight(), 'margin-bottom':0}, function(){
                    finalize();
                });
            }
        },
        content: function(html){
            var container = this.element.find('>div');
            if(!html) {
                return container.html();
            }
            container.html(html);
            return this;
        },
        status: function(status) {
            if(!status) {
                return this.currentstatus;
            }
            this.element.removeClass('alert alert-'+this.currentstatus).addClass('alert alert-'+status);
            this.currentstatus = status;
            return this;
        }
    });
    Message.defaults = {
        message: '',
        status: 'normal',
        timeout: 5000,
        group: null,
        pos: 'top-center'
    };

    $.notify          = notify;
    $.notify.message  = Message;
    $.notify.closeAll = closeAll;

    return notify;
}(jQuery));


/**=========================================================
 * Collapse panels * [panel-collapse]
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelCollapse', panelCollapse);

    function panelCollapse () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;
    }

    Controller.$inject = ['$scope', '$element', '$timeout', '$localStorage'];
    function Controller ($scope, $element, $timeout, $localStorage) {
      var storageKeyName = 'panelState';

      // Prepare the panel to be collapsible
      var $elem   = $($element),
          parent  = $elem.closest('.panel'), // find the first parent panel
          panelId = parent.attr('id');

      // Load the saved state if exists
      var currentState = loadPanelState( panelId );
      if ( typeof currentState !== 'undefined') {
        $timeout(function(){
            $scope[panelId] = currentState; },
          10);
      }

      // bind events to switch icons
      $element.bind('click', function(e) {
        e.preventDefault();
        savePanelState( panelId, !$scope[panelId] );

      });

      // Controller helpers
      function savePanelState(id, state) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(!data) { data = {}; }
        data[id] = state;
        $localStorage[storageKeyName] = angular.toJson(data);
      }
      function loadPanelState(id) {
        if(!id) return false;
        var data = angular.fromJson($localStorage[storageKeyName]);
        if(data) {
          return data[id];
        }
      }
    }

})();

/**=========================================================
 * Dismiss panels * [panel-dismiss]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelDismiss', panelDismiss);

    function panelDismiss () {

        var directive = {
            controller: Controller,
            restrict: 'A'
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element', '$q', 'Utils'];
    function Controller ($scope, $element, $q, Utils) {
      var removeEvent   = 'panel-remove',
          removedEvent  = 'panel-removed';

      $element.on('click', function (e) {
        e.preventDefault();

        // find the first parent panel
        var parent = $(this).closest('.panel');

        removeElement();

        function removeElement() {
          var deferred = $q.defer();
          var promise = deferred.promise;

          // Communicate event destroying panel
          $scope.$emit(removeEvent, parent.attr('id'), deferred);
          promise.then(destroyMiddleware);
        }

        // Run the animation before destroy the panel
        function destroyMiddleware() {
          if(Utils.support.animation) {
            parent.animo({animation: 'bounceOut'}, destroyPanel);
          }
          else destroyPanel();
        }

        function destroyPanel() {

          var col = parent.parent();
          parent.remove();
          // remove the parent if it is a row and is empty and not a sortable (portlet)
          col
            .filter(function() {
            var el = $(this);
            return (el.is('[class*="col-"]:not(.sortable)') && el.children('*').length === 0);
          }).remove();

          // Communicate event destroyed panel
          $scope.$emit(removedEvent, parent.attr('id'));

        }

      });
    }
})();



/**=========================================================
 * Refresh panels
 * [panel-refresh] * [data-spinner="standard"]
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('panelRefresh', panelRefresh);

    function panelRefresh () {
        var directive = {
            controller: Controller,
            restrict: 'A',
            scope: false
        };
        return directive;

    }

    Controller.$inject = ['$scope', '$element'];
    function Controller ($scope, $element) {
      var refreshEvent   = 'panel-refresh',
          whirlClass     = 'whirl',
          defaultSpinner = 'standard';

      // catch clicks to toggle panel refresh
      $element.on('click', function (e) {
        e.preventDefault();

        var $this   = $(this),
            panel   = $this.parents('.panel').eq(0),
            spinner = $this.data('spinner') || defaultSpinner
            ;

        // start showing the spinner
        panel.addClass(whirlClass + ' ' + spinner);

        // Emit event when refresh clicked
        $scope.$emit(refreshEvent, panel.attr('id'));

      });

      // listen to remove spinner
      $scope.$on('removeSpinner', removeSpinner);

      // method to clear the spinner when done
      function removeSpinner (ev, id) {
        if (!id) return;
        var newid = id.charAt(0) === '#' ? id : ('#'+id);
        angular
          .element(newid)
          .removeClass(whirlClass);
      }
    }
})();



/**=========================================================
 * Module panel-tools.js
 * Directive tools to control panels.
 * Allows collapse, refresh and dismiss (remove)
 * Saves panel state in browser storage
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .directive('paneltool', paneltool);

    paneltool.$inject = ['$compile', '$timeout'];
    function paneltool ($compile, $timeout) {
        var directive = {
            link: link,
            restrict: 'E',
            scope: false
        };
        return directive;

        function link(scope, element, attrs) {

          var templates = {
            /* jshint multistr: true */
            collapse:'<a href="#" panel-collapse="" uib-tooltip="Collapse Panel" ng-click="{{panelId}} = !{{panelId}}"> \
                        <em ng-show="{{panelId}}" class="fa fa-plus ng-no-animation"></em> \
                        <em ng-show="!{{panelId}}" class="fa fa-minus ng-no-animation"></em> \
                      </a>',
            dismiss: '<a href="#" panel-dismiss="" uib-tooltip="Close Panel">\
                       <em class="fa fa-times"></em>\
                     </a>',
            refresh: '<a href="#" panel-refresh="" data-spinner="{{spinner}}" uib-tooltip="Refresh Panel">\
                       <em class="fa fa-refresh"></em>\
                     </a>'
          };

          var tools = scope.panelTools || attrs;

          $timeout(function() {
            element.html(getTemplate(element, tools )).show();
            $compile(element.contents())(scope);

            element.addClass('pull-right');
          });

          function getTemplate( elem, attrs ){
            var temp = '';
            attrs = attrs || {};
            if(attrs.toolCollapse)
              temp += templates.collapse.replace(/{{panelId}}/g, (elem.parent().parent().attr('id')) );
            if(attrs.toolDismiss)
              temp += templates.dismiss;
            if(attrs.toolRefresh)
              temp += templates.refresh.replace(/{{spinner}}/g, attrs.toolRefresh);
            return temp;
          }
        }// link
    }

})();

/**=========================================================
 * Module: demo-panels.js
 * Provides a simple demo for panel actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('PanelsCtrl', PanelsCtrl);

    PanelsCtrl.$inject = ['$scope', '$timeout'];
    function PanelsCtrl($scope, $timeout) {

        activate();

        ////////////////

        function activate() {

          // PANEL COLLAPSE EVENTS
          // -----------------------------------

          // We can use panel id name for the boolean flag to [un]collapse the panel
          $scope.$watch('panelDemo1',function(newVal){

              console.log('panelDemo1 collapsed: ' + newVal);

          });


          // PANEL DISMISS EVENTS
          // -----------------------------------

          // Before remove panel
          $scope.$on('panel-remove', function(event, id, deferred){

            console.log('Panel #' + id + ' removing');

            // Here is obligatory to call the resolve() if we pretend to remove the panel finally
            // Not calling resolve() will NOT remove the panel
            // It's up to your app to decide if panel should be removed or not
            deferred.resolve();

          });

          // Panel removed ( only if above was resolved() )
          $scope.$on('panel-removed', function(event, id){

            console.log('Panel #' + id + ' removed');

          });


          // PANEL REFRESH EVENTS
          // -----------------------------------

          $scope.$on('panel-refresh', function(event, id) {
            var secs = 3;

            console.log('Refreshing during ' + secs +'s #'+id);

            $timeout(function(){
              // directive listen for to remove the spinner
              // after we end up to perform own operations
              $scope.$broadcast('removeSpinner', id);

              console.log('Refreshed #' + id);

            }, 3000);

          });

          // PANELS VIA NG-REPEAT
          // -----------------------------------

          $scope.panels = [
            {
              id: 'panelRepeat1',
              title: 'Panel Title 1',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat2',
              title: 'Panel Title 2',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            },
            {
              id: 'panelRepeat3',
              title: 'Panel Title 3',
              body: 'Nulla eget lorem leo, sit amet elementum lorem. '
            }
          ];
        }

    } //PanelsCtrl

})();


(function() {
    'use strict';

    angular
        .module('app.panels')
        .controller('DraggablePanelController', DraggablePanelController);

    DraggablePanelController.$inject = ['$timeout', '$localStorage'];

    function DraggablePanelController($timeout, $localStorage) {
        var vm = this;
        var storageKeyName = 'portletState';

        activate();

        ////////////////

        function activate() {

            vm.panels = [
                [{
                    id: 'panelPortlet1',
                    type: 'default',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet2',
                    type: 'primary',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet3',
                    type: 'success',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet4',
                    type: 'info',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet5',
                    type: 'warning',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet6',
                    type: 'danger',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }],
                [{
                    id: 'panelPortlet7',
                    type: 'inverse',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet8',
                    type: 'purple',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }, {
                    id: 'panelPortlet9',
                    type: 'green',
                    heading: 'Panel heading',
                    content: 'Aenean pellentesque augue non eros commodo tempus. Etiam odio ante, placerat eu accumsan ut, consectetur vel mi. Praesent ac lorem justo.',
                    footer: 'Panale footer'
                }]
            ];

            vm.panelList1 = vm.panels[0];
            vm.panelList2 = vm.panels[1];
            vm.panelList3 = vm.panels[2];

            // https://github.com/angular-ui/ui-sortable
            vm.sortablePortletOptions = {
                connectWith: '.portlet-connect',
                handle: '.panel-heading',
                opacity: 0.7,
                placeholder: 'portlet box-placeholder',
                cancel: '.portlet-cancel',
                forcePlaceholderSize: true,
                iframeFix: false,
                tolerance: 'pointer',
                helper: 'original',
                revert: 200,
                forceHelperSize: true,
                update: savePortletOrder,
                create: loadPortletOrder
            };

            function savePortletOrder(event) {
                $timeout(function() {
                    $localStorage[storageKeyName] = angular.toJson(vm.panels);
                });
            }

            function loadPortletOrder(event) {
                var data = angular.fromJson($localStorage[storageKeyName]);
                if (data) {
                    $timeout(function() {
                        vm.panels = data;
                        vm.panelList1 = vm.panels[0];
                        vm.panelList2 = vm.panels[1];
                        vm.panelList3 = vm.panels[2];
                    });
                }
            }

        }
    }
})();
(function() {
    'use strict';

    angular
        .module('app.preloader')
        .directive('preloader', preloader);

    preloader.$inject = ['$animate', '$timeout', '$q'];
    function preloader ($animate, $timeout, $q) {

        var directive = {
            restrict: 'EAC',
            template:
              '<div class="preloader-progress">' +
                  '<div class="preloader-progress-bar" ' +
                       'ng-style="{width: loadCounter + \'%\'}"></div>' +
              '</div>'
            ,
            link: link
        };
        return directive;

        ///////

        function link(scope, el) {

          scope.loadCounter = 0;

          var counter  = 0,
              timeout;

          // disables scrollbar
          angular.element('body').css('overflow', 'hidden');
          // ensure class is present for styling
          el.addClass('preloader');

          appReady().then(endCounter);

          timeout = $timeout(startCounter);

          ///////

          function startCounter() {

            var remaining = 100 - counter;
            counter = counter + (0.015 * Math.pow(1 - Math.sqrt(remaining), 2));
            // counter = counter + 10;

            scope.loadCounter = parseInt(counter, 10);
            // if(scope.loadCounter == 100) endCounter;
            timeout = $timeout(startCounter, 20);
          }

          function endCounter() {
            scope.loadCounter = 100
            $timeout.cancel(timeout);

            scope.loadCounter = 100;

            $timeout(function(){
              // animate preloader hiding
              $animate.addClass(el, 'preloader-hidden');
              // retore scrollbar
              angular.element('body').css('overflow', '');
            }, 300);
          }

          function appReady() {
            var deferred = $q.defer();
            var viewsLoaded = 0;
            // if this doesn't sync with the real app ready
            // a custom event must be used instead
            var off = scope.$on('$viewContentLoaded', function () {
              viewsLoaded ++;
              // we know there are at least two views to be loaded
              // before the app is ready (1-index.html 2-app*.html)
              if ( viewsLoaded === 2) {
                // with resolve this fires only once
                $timeout(function(){
                  deferred.resolve();
                }, 3000);

                off();
              }

            });

            return deferred.promise;
          }

        } //link
    }

})();

/**=========================================================
 * Module: sidebar-menu.js
 * Handle sidebar collapsible elements
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.sidebar')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$rootScope', '$scope', '$state', 'SidebarLoader', 'Utils'];
    function SidebarController($rootScope, $scope, $state, SidebarLoader,  Utils) {

        activate();

        ////////////////

        function activate() {
          var collapseList = [];

          // demo: when switch from collapse to hover, close all items
          var watchOff1 = $rootScope.$watch('app.layout.asideHover', function(oldVal, newVal){
            if ( newVal === false && oldVal === true) {
              closeAllBut(-1);
            }
          });


          // Load menu from json file
          // -----------------------------------

          SidebarLoader.getMenu(sidebarReady);

          function sidebarReady(items) {
            $scope.menuItems = items.data;
          }

          // Handle sidebar and collapse items
          // ----------------------------------

          $scope.getMenuItemPropClasses = function(item) {
            return (item.heading ? 'nav-heading' : '') +
                   (isActive(item) ? ' active' : '') ;
          };

          $scope.addCollapse = function($index, item) {
            collapseList[$index] = $rootScope.app.layout.asideHover ? true : !isActive(item);
          };

          $scope.isCollapse = function($index) {
            return (collapseList[$index]);
          };

          $scope.toggleCollapse = function($index, isParentItem) {

            // collapsed sidebar doesn't toggle drodopwn
            if( Utils.isSidebarCollapsed() || $rootScope.app.layout.asideHover ) return true;

            // make sure the item index exists
            if( angular.isDefined( collapseList[$index] ) ) {
              if ( ! $scope.lastEventFromChild ) {
                collapseList[$index] = !collapseList[$index];
                closeAllBut($index);
              }
            }
            else if ( isParentItem ) {
              closeAllBut(-1);
            }

            $scope.lastEventFromChild = isChild($index);

            return true;

          };

          // Controller helpers
          // -----------------------------------

            // Check item and children active state
            function isActive(item) {

              if(!item) return;

              if( !item.sref || item.sref === '#') {
                var foundActive = false;
                angular.forEach(item.submenu, function(value) {
                  if(isActive(value)) foundActive = true;
                });
                return foundActive;
              }
              else
                return $state.is(item.sref) || $state.includes(item.sref);
            }

            function closeAllBut(index) {
              index += '';
              for(var i in collapseList) {
                if(index < 0 || index.indexOf(i) < 0)
                  collapseList[i] = true;
              }
            }

            function isChild($index) {
              /*jshint -W018*/
              return (typeof $index === 'string') && !($index.indexOf('-') < 0);
            }

            $scope.$on('$destroy', function() {
                watchOff1();
            });

        } // activate
    }

})();

/**=========================================================
 * Module: UIGridController
  =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['uiGridConstants', '$http'];

    function UIGridController(uiGridConstants, $http) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

            // Basic example
            // -----------------------------------

            vm.gridOptions = {
                rowHeight: 34,
                data: [{
                    'name': 'Wilder Gonzales',
                    'gender': 'male',
                    'company': 'Geekko'
                }, {
                    'name': 'Georgina Schultz',
                    'gender': 'female',
                    'company': 'Suretech'
                }, {
                    'name': 'Carroll Buchanan',
                    'gender': 'male',
                    'company': 'Ecosys'
                }, {
                    'name': 'Valarie Atkinson',
                    'gender': 'female',
                    'company': 'Hopeli'
                }, {
                    'name': 'Schroeder Mathews',
                    'gender': 'male',
                    'company': 'Polarium'
                }, {
                    'name': 'Ethel Price',
                    'gender': 'female',
                    'company': 'Enersol'
                }, {
                    'name': 'Claudine Neal',
                    'gender': 'female',
                    'company': 'Sealoud'
                }, {
                    'name': 'Beryl Rice',
                    'gender': 'female',
                    'company': 'Velity'
                }, {
                    'name': 'Lynda Mendoza',
                    'gender': 'female',
                    'company': 'Dogspa'
                }, {
                    'name': 'Sarah Massey',
                    'gender': 'female',
                    'company': 'Bisba'
                }, {
                    'name': 'Robles Boyle',
                    'gender': 'male',
                    'company': 'Comtract'
                }, {
                    'name': 'Evans Hickman',
                    'gender': 'male',
                    'company': 'Parleynet'
                }, {
                    'name': 'Dawson Barber',
                    'gender': 'male',
                    'company': 'Dymi'
                }, {
                    'name': 'Bruce Strong',
                    'gender': 'male',
                    'company': 'Xyqag'
                }, {
                    'name': 'Nellie Whitfield',
                    'gender': 'female',
                    'company': 'Exospace'
                }, {
                    'name': 'Jackson Macias',
                    'gender': 'male',
                    'company': 'Aquamate'
                }, {
                    'name': 'Pena Pena',
                    'gender': 'male',
                    'company': 'Quarx'
                }, {
                    'name': 'Lelia Gates',
                    'gender': 'female',
                    'company': 'Proxsoft'
                }, {
                    'name': 'Letitia Vasquez',
                    'gender': 'female',
                    'company': 'Slumberia'
                }, {
                    'name': 'Trevino Moreno',
                    'gender': 'male',
                    'company': 'Conjurica'
                }]
            };

            // Complex example
            // -----------------------------------

            var data = [];

            vm.gridOptionsComplex = {
                showGridFooter: true,
                showColumnFooter: true,
                enableFiltering: true,
                columnDefs: [{
                    field: 'name',
                    width: '13%'
                }, {
                    field: 'address.street',
                    aggregationType: uiGridConstants.aggregationTypes.sum,
                    width: '13%'
                }, {
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.avg,
                    aggregationHideLabel: true,
                    width: '13%'
                }, {
                    name: 'ageMin',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.min,
                    width: '13%',
                    displayName: 'Age for min'
                }, {
                    name: 'ageMax',
                    field: 'age',
                    aggregationType: uiGridConstants.aggregationTypes.max,
                    width: '13%',
                    displayName: 'Age for max'
                }, {
                    name: 'customCellTemplate',
                    field: 'age',
                    width: '14%',
                    footerCellTemplate: '<div class="ui-grid-cell-contents bg-info text-center">Custom HTML</div>'
                }, {
                    name: 'registered',
                    field: 'registered',
                    width: '20%',
                    cellFilter: 'date',
                    footerCellFilter: 'date',
                    aggregationType: uiGridConstants.aggregationTypes.max
                }],
                data: data,
                onRegisterApi: function(gridApi) {
                    vm.gridApi = gridApi;
                }
            };

            $http.get('server/uigrid-complex.json')
                .then(function(data) {
                    data.data.forEach(function(row) {
                        row.registered = Date.parse(row.registered);
                    });
                    vm.gridOptionsComplex.data = data.data;
                });

            // Demo for pagination
            vm.gridOptions1 = {
                paginationPageSizes: [25, 50, 75],
                paginationPageSize: 25,
                columnDefs: [{
                    name: 'name'
                }, {
                    name: 'gender'
                }, {
                    name: 'company'
                }]
            };

            $http.get('server/uigrid-100.json')
                .then(function(data) {
                    vm.gridOptions1.data = data.data;
                });

            // Demo for menu selection
            vm.gridOptions2 = {
                columnDefs: [{
                    field: 'name'
                }, {
                    field: 'gender',
                    visible: false
                }, {
                    field: 'company'
                }],
                enableGridMenu: true,
                enableSelectAll: true
            };

            $http.get('server/uigrid-100.json')
            .then(function (data) {
              vm.gridOptions2.data = data.data;
            });

        }
    }
})();


/**=========================================================
 * Module: load-css.js
 * Request and load into the current page a css file
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('loadCss', loadCss);

    function loadCss () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          element.on('click', function (e) {
              if(element.is('a')) e.preventDefault();
              var uri = attrs.loadCss,
                  link;

              if(uri) {
                link = createLink(uri);
                if ( !link ) {
                  $.error('Error creating stylesheet link element.');
                }
              }
              else {
                $.error('No stylesheet location defined.');
              }

          });
        }

        function createLink(uri) {
          var linkId = 'autoloaded-stylesheet',
              oldLink = $('#'+linkId).attr('id', linkId + '-old');

          $('head').append($('<link/>').attr({
            'id':   linkId,
            'rel':  'stylesheet',
            'href': uri
          }));

          if( oldLink.length ) {
            oldLink.remove();
          }

          return $('#'+linkId);
        }
    }

})();

/**=========================================================
 * Module: now.js
 * Provides a simple way to display the current time formatted
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('now', now);

    now.$inject = ['dateFilter', '$interval'];
    function now (dateFilter, $interval) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
          var format = attrs.format;

          function updateTime() {
            var dt = dateFilter(new Date(), format);
            element.text(dt);
          }

          updateTime();
          var intervalPromise = $interval(updateTime, 1000);

          scope.$on('$destroy', function(){
            $interval.cancel(intervalPromise);
          });

        }
    }

})();



/**=========================================================
 * Module: utils.js
 * Utility library to use across the theme
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Utils', Utils);

    Utils.$inject = ['$window', 'APP_MEDIAQUERY'];
    function Utils($window, APP_MEDIAQUERY) {

        var $html = angular.element('html'),
            $win  = angular.element($window),
            $body = angular.element('body');

        return {
          // DETECTION
          support: {
            transition: (function() {
                    var transitionEnd = (function() {

                        var element = document.body || document.documentElement,
                            transEndEventNames = {
                                WebkitTransition: 'webkitTransitionEnd',
                                MozTransition: 'transitionend',
                                OTransition: 'oTransitionEnd otransitionend',
                                transition: 'transitionend'
                            }, name;

                        for (name in transEndEventNames) {
                            if (element.style[name] !== undefined) return transEndEventNames[name];
                        }
                    }());

                    return transitionEnd && { end: transitionEnd };
                })(),
            animation: (function() {

                var animationEnd = (function() {

                    var element = document.body || document.documentElement,
                        animEndEventNames = {
                            WebkitAnimation: 'webkitAnimationEnd',
                            MozAnimation: 'animationend',
                            OAnimation: 'oAnimationEnd oanimationend',
                            animation: 'animationend'
                        }, name;

                    for (name in animEndEventNames) {
                        if (element.style[name] !== undefined) return animEndEventNames[name];
                    }
                }());

                return animationEnd && { end: animationEnd };
            })(),
            requestAnimationFrame: window.requestAnimationFrame ||
                                   window.webkitRequestAnimationFrame ||
                                   window.mozRequestAnimationFrame ||
                                   window.msRequestAnimationFrame ||
                                   window.oRequestAnimationFrame ||
                                   function(callback){ window.setTimeout(callback, 1000/60); },
            /*jshint -W069*/
            touch: (
                ('ontouchstart' in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/)) ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)  ||
                (window.navigator['msPointerEnabled'] && window.navigator['msMaxTouchPoints'] > 0) || //IE 10
                (window.navigator['pointerEnabled'] && window.navigator['maxTouchPoints'] > 0) || //IE >=11
                false
            ),
            mutationobserver: (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null)
          },
          // UTILITIES
          isInView: function(element, options) {
              /*jshint -W106*/
              var $element = $(element);

              if (!$element.is(':visible')) {
                  return false;
              }

              var window_left = $win.scrollLeft(),
                  window_top  = $win.scrollTop(),
                  offset      = $element.offset(),
                  left        = offset.left,
                  top         = offset.top;

              options = $.extend({topoffset:0, leftoffset:0}, options);

              if (top + $element.height() >= window_top && top - options.topoffset <= window_top + $win.height() &&
                  left + $element.width() >= window_left && left - options.leftoffset <= window_left + $win.width()) {
                return true;
              } else {
                return false;
              }
          },

          langdirection: $html.attr('dir') === 'rtl' ? 'right' : 'left',

          isTouch: function () {
            return $html.hasClass('touch');
          },

          isSidebarCollapsed: function () {
            return $body.hasClass('aside-collapsed') || $body.hasClass('aside-collapsed-text');
          },

          isSidebarToggled: function () {
            return $body.hasClass('aside-toggled');
          },

          isMobile: function () {
            return $win.width() < APP_MEDIAQUERY.tablet;
          }

        };
    }
})();

(function() {
    'use strict';

    angular
        .module('custom', [
            // request the the entire framework
            'adminPanel',
            // or just modules
            'app.core',
            'app.sidebar'
            /*...*/
        ]);
})();

// To run this code, edit file index.html or index.jade and change
// html data-ng-app attribute from angle to myAppName
// ----------------------------------------------------------------------

(function() {
    'use strict';

    angular
        .module('custom')
        .controller('Controller', Controller);

    Controller.$inject = ['$log','toaster'];
    function Controller($log,toaster) {
        // for controllerAs syntax
        // var vm = this;

        activate();

        ////////////////

        function activate() {
          $log.log('I\'m a line from custom.js');
        }
    }
})();
