/**=========================================================
 * Module: table-checkall.js
 * Tables check all checkbox
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('checkAll', checkAll);

    function checkAll () {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          element.on('change', function() {
            var $this = $(this),
                index= $this.index() + 1,
                checkbox = $this.find('input[type="checkbox"]'),
                table = $this.parents('table');
            // Make sure to affect only the correct checkbox column
            table.find('tbody > tr > td:nth-child('+index+') input[type="checkbox"]')
              .prop('checked', checkbox[0].checked);

          });
        }
    }

})();

/**=========================================================
 * Module: trigger-resize.js
 * Triggers a window resize event from any element
 =========================================================*/
(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('triggerResize', triggerResize);

    triggerResize.$inject = ['$window', '$timeout'];
    function triggerResize ($window, $timeout) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attributes) {
          element.on('click', function(){
            $timeout(function(){
              // all IE friendly dispatchEvent
              var evt = document.createEvent('UIEvents');
              evt.initUIEvent('resize', true, false, $window, 0);
              $window.dispatchEvent(evt);
              // modern dispatchEvent way
              // $window.dispatchEvent(new Event('resize'));
            }, attributes.triggerResize || 300);
          });
        }
    }

})();


/**=========================================================
 * Module: clear-storage.js
 * Removes a key from the browser storage via element click
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('resetKey', resetKey);

    resetKey.$inject = ['$state', '$localStorage'];
    function resetKey ($state, $localStorage) {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
              resetKey: '@'
            }
        };
        return directive;

        function link(scope, element) {
          element.on('click', function (e) {
              e.preventDefault();

              if(scope.resetKey) {
                delete $localStorage[scope.resetKey];
                $state.go($state.current, {}, {reload: true});
              }
              else {
                $.error('No storage key specified for reset.');
              }
          });
        }
    }

})();

/**=========================================================
 * Module: fullscreen.js
 * Toggle the fullscreen mode on/off
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('toggleFullscreen', toggleFullscreen);

    toggleFullscreen.$inject = ['Browser'];
    function toggleFullscreen (Browser) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element) {
          // Not supported under IE
          if( Browser.msie ) {
            element.addClass('hide');
          }
          else {
            element.on('click', function (e) {
                e.preventDefault();

                if (screenfull.enabled) {

                  screenfull.toggle();

                  // Switch icon indicator
                  if(screenfull.isFullscreen)
                    $(this).children('em').removeClass('fa-expand').addClass('fa-compress');
                  else
                    $(this).children('em').removeClass('fa-compress').addClass('fa-expand');

                } else {
                  $.error('Fullscreen not enabled');
                }

            });
          }
        }
    }


})();

/**=========================================================
 * Module: browser.js
 * Browser detection
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .service('Browser', Browser);

    Browser.$inject = ['$window'];
    function Browser($window) {
      return $window.jQBrowser;
    }

})();

/**=========================================================
 * Module: animate-enabled.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.utils')
        .directive('animateEnabled', animateEnabled);

    animateEnabled.$inject = ['$animate'];
    function animateEnabled ($animate) {
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
          scope.$watch(function () {
            return scope.$eval(attrs.animateEnabled, scope);
          }, function (newValue) {
            $animate.enabled(!!newValue, element);
          });
        }
    }

})();


/**=========================================================
 * Module: translate.js
 * Enable or disables ngAnimate for element with directive
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.translate')
        .config(translateConfig)
        ;
    translateConfig.$inject = ['$translateProvider'];
    function translateConfig($translateProvider){

      $translateProvider.useStaticFilesLoader({
          prefix : 'app/i18n/',
          suffix : '.json'
      });

      $translateProvider.preferredLanguage('en');
      $translateProvider.useLocalStorage();
      $translateProvider.usePostCompiling(true);
      $translateProvider.useSanitizeValueStrategy('sanitizeParameters');

    }
})();
(function() {
    'use strict';

    angular
        .module('app.translate')
        .run(translateRun)
        ;
    translateRun.$inject = ['$rootScope', '$translate'];

    function translateRun($rootScope, $translate){

      // Internationalization
      // ----------------------

      $rootScope.language = {
        // Handles language dropdown
        listIsOpen: false,
        // list of available languages
        available: {
          'en':       'English',
          'es_AR':    'Español'
        },
        // display always the current ui language
        init: function () {
          var proposedLanguage = $translate.proposedLanguage() || $translate.use();
          var preferredLanguage = $translate.preferredLanguage(); // we know we have set a preferred one in app.config
          $rootScope.language.selected = $rootScope.language.available[ (proposedLanguage || preferredLanguage) ];
        },
        set: function (localeId) {
          // Set the new idiom
          $translate.use(localeId);
          // save a reference for the current language
          $rootScope.language.selected = $rootScope.language.available[localeId];
          // finally toggle dropdown
          $rootScope.language.listIsOpen = ! $rootScope.language.listIsOpen;
        }
      };

      $rootScope.language.init();

    }
})();


/**=========================================================
 * Module: angular-grid.js
 * Example for Angular Grid
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('AngularGridController', AngularGridController);

    AngularGridController.$inject = ['$scope', '$http', '$window', '$timeout'];

    function AngularGridController($scope, $http, $window, $timeout) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            var resizeEvent = 'resize.ag-grid';
            var $win = $($window); // cache reference for resize

            // Basic
            var columnDefs = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100
            }];

            vm.gridOptions = {
                columnDefs: columnDefs,
                rowData: null,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            // Filter Example
            var irishAthletes = ['John Joe Nevin', 'Katie Taylor', 'Paddy Barnes', 'Kenny Egan', 'Darren Sutherland', 'Margaret Thatcher', 'Tony Blair', 'Ronald Regan', 'Barack Obama'];

            var columnDefsFilter = [{
                headerName: 'Athlete',
                field: 'athlete',
                width: 150,
                filter: 'set',
                filterParams: {
                    cellHeight: 20,
                    values: irishAthletes
                }
            }, {
                headerName: 'Age',
                field: 'age',
                width: 90,
                filter: 'number'
            }, {
                headerName: 'Country',
                field: 'country',
                width: 120
            }, {
                headerName: 'Year',
                field: 'year',
                width: 90
            }, {
                headerName: 'Date',
                field: 'date',
                width: 110
            }, {
                headerName: 'Sport',
                field: 'sport',
                width: 110
            }, {
                headerName: 'Gold',
                field: 'gold',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Silver',
                field: 'silver',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Bronze',
                field: 'bronze',
                width: 100,
                filter: 'number'
            }, {
                headerName: 'Total',
                field: 'total',
                width: 100,
                filter: 'number'
            }];

            vm.gridOptions1 = {
                columnDefs: columnDefsFilter,
                rowData: null,
                enableFilter: true,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }

            };

            // Pinning Example

            // https://www.ag-grid.com/javascript-grid-pinning/index.php
            var columnDefsPinned = angular.copy(columnDefs);
            columnDefsPinned[0].pinned = 'left';

            vm.gridOptions2 = {
                columnDefs: columnDefsPinned,
                rowData: null,
                pinnedColumnCount: 2,
                onGridReady: function(params) {
                    params.api.sizeColumnsToFit();
                    $win.on(resizeEvent, function() {
                        $timeout(function(){
                            params.api.sizeColumnsToFit();
                        });
                    })
                }
            };

            //-----------------------------
            // Get the data from SERVER
            //-----------------------------

            $http.get('server/ag-owinners.json')
                .then(function(res) {
                    // basic
                    vm.gridOptions.api.setRowData(res.data);
                    vm.gridOptions.api.sizeColumnsToFit();
                    // filter
                    vm.gridOptions1.api.setRowData(res.data);
                    vm.gridOptions1.api.sizeColumnsToFit();

                    // pinning
                    vm.gridOptions2.api.setRowData(res.data);
                    vm.gridOptions2.api.sizeColumnsToFit();
                });

            // turn off event
            $scope.$on('$destroy', function(){
                $win.off(resizeEvent);
            })

        }
    }
})();
/**=========================================================
 * Module: datatable,js
 * Angular Datatable controller
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('DataTableController', DataTableController);

    DataTableController.$inject = ['$resource', 'DTOptionsBuilder', 'DTColumnDefBuilder'];
    function DataTableController($resource, DTOptionsBuilder, DTColumnDefBuilder) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // Ajax

          $resource('server/datatable.json').query().$promise.then(function(persons) {
             vm.persons = persons;
          });

          // Changing data

          vm.heroes = [{
              'id': 860,
              'firstName': 'Superman',
              'lastName': 'Yoda'
            }, {
              'id': 870,
              'firstName': 'Ace',
              'lastName': 'Ventura'
            }, {
              'id': 590,
              'firstName': 'Flash',
              'lastName': 'Gordon'
            }, {
              'id': 803,
              'firstName': 'Luke',
              'lastName': 'Skywalker'
            }
          ];

          vm.dtOptions = DTOptionsBuilder.newOptions()
            .withPaginationType('full_numbers')
            .withDOM('<"html5buttons"B>lTfgitp')
            .withButtons([
                {extend: 'copy',  className: 'btn-sm' },
                {extend: 'csv',   className: 'btn-sm' },
                {extend: 'excel', className: 'btn-sm', title: 'XLS-File'},
                {extend: 'pdf',   className: 'btn-sm', title: $('title').text() },
                {extend: 'print', className: 'btn-sm' }
            ]);

          vm.dtColumnDefs = [
              DTColumnDefBuilder.newColumnDef(0),
              DTColumnDefBuilder.newColumnDef(1),
              DTColumnDefBuilder.newColumnDef(2),
              DTColumnDefBuilder.newColumnDef(3).notSortable()
          ];
          vm.person2Add = _buildPerson2Add(1);
          vm.addPerson = addPerson;
          vm.modifyPerson = modifyPerson;
          vm.removePerson = removePerson;

          function _buildPerson2Add(id) {
              return {
                  id: id,
                  firstName: 'Foo' + id,
                  lastName: 'Bar' + id
              };
          }
          function addPerson() {
              vm.heroes.push(angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function modifyPerson(index) {
              vm.heroes.splice(index, 1, angular.copy(vm.person2Add));
              vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
          }
          function removePerson(index) {
              vm.heroes.splice(index, 1);
          }

        }
    }
})();

(function() {
    'use strict';

    angular
        .module('app.tables')
        .service('ngTableDataService', ngTableDataService);

    function ngTableDataService() {
        /* jshint validthis:true */
        var self = this;
        this.cache = null;
        this.getData = getData;

        ////////////////

        function getData($defer, params, api) {
          // if no cache, request data and filter
          if ( ! self.cache ) {
            if ( api ) {
              api.get(function(data){
                self.cache = data;
                filterdata($defer, params);
              });
            }
          }
          else {
            filterdata($defer, params);
          }

          function filterdata($defer, params) {
            var from = (params.page() - 1) * params.count();
            var to = params.page() * params.count();
            var filteredData = self.cache.result.slice(from, to);

            params.total(self.cache.total);
            $defer.resolve(filteredData);
          }

        }
    }
})();

/**=========================================================
 * Module: NGTableCtrl.js
 * Controller for ngTables
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('NGTableCtrl', NGTableCtrl);
    /*jshint -W055 */
    NGTableCtrl.$inject = ['$filter', 'ngTableParams', '$resource', '$timeout', 'ngTableDataService'];
    function NGTableCtrl($filter, ngTableParams, $resource, $timeout, ngTableDataService) {
        var vm = this;
        vm.title = 'Controller';

        activate();

        ////////////////

        function activate() {
          var data = [
              {name: 'Moroni',  age: 50, money: -10   },
              {name: 'Tiancum', age: 43, money: 120   },
              {name: 'Jacob',   age: 27, money: 5.5   },
              {name: 'Nephi',   age: 29, money: -54   },
              {name: 'Enos',    age: 34, money: 110   },
              {name: 'Tiancum', age: 43, money: 1000  },
              {name: 'Jacob',   age: 27, money: -201  },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -52.5 },
              {name: 'Tiancum', age: 43, money: 52.1  },
              {name: 'Jacob',   age: 27, money: 110   },
              {name: 'Nephi',   age: 29, money: -55   },
              {name: 'Enos',    age: 34, money: 551   },
              {name: 'Tiancum', age: 43, money: -1410 },
              {name: 'Jacob',   age: 27, money: 410   },
              {name: 'Nephi',   age: 29, money: 100   },
              {name: 'Enos',    age: 34, money: -100  }
          ];

          // SELECT ROWS
          // -----------------------------------

          vm.data = data;

          vm.tableParams3 = new ngTableParams({
              page: 1,            // show first page
              count: 10          // count per page
          }, {
              total: data.length, // length of data
              getData: function ($defer, params) {
                  // use build-in angular filter
                  var filteredData = params.filter() ?
                          $filter('filter')(data, params.filter()) :
                          data;
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(filteredData, params.orderBy()) :
                          data;

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          vm.changeSelection = function(user) {
            console.info(user);
          };

          // EXPORT CSV
          // -----------------------------------

          var data4 = [{name: 'Moroni', age: 50},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34},
              {name: 'Tiancum', age: 43},
              {name: 'Jacob', age: 27},
              {name: 'Nephi', age: 29},
              {name: 'Enos', age: 34}];

          vm.tableParams4 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: data4.length, // length of data4
              getData: function($defer, params) {
                  $defer.resolve(data4.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });


          // SORTING
          // -----------------------------------



          vm.tableParams = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              sorting: {
                  name: 'asc'     // initial sorting
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.sorting() ?
                          $filter('orderBy')(data, params.orderBy()) :
                          data;

                  $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
              }
          });

          // FILTERS
          // -----------------------------------

          vm.tableParams2 = new ngTableParams({
              page: 1,            // show first page
              count: 10,          // count per page
              filter: {
                  name: '',
                  age: ''
                  // name: 'M'       // initial filter
              }
          }, {
              total: data.length, // length of data
              getData: function($defer, params) {
                  // use build-in angular filter
                  var orderedData = params.filter() ?
                         $filter('filter')(data, params.filter()) :
                         data;

                  vm.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

                  params.total(orderedData.length); // set total for recalc pagination
                  $defer.resolve(vm.users);
              }
          });

          // AJAX

          var Api = $resource('server/table-data.json');

          vm.tableParams5 = new ngTableParams({
              page: 1,            // show first page
              count: 10           // count per page
          }, {
              total: 0,           // length of data
              counts: [],         // hide page counts control
              getData: function($defer, params) {

                  // Service using cache to avoid mutiple requests
                  ngTableDataService.getData( $defer, params, Api);

                  /* direct ajax request to api (perform result pagination on the server)
                  Api.get(params.url(), function(data) {
                      $timeout(function() {
                          // update table params
                          params.total(data.total);
                          // set new data
                          $defer.resolve(data.result);
                      }, 500);
                  });
                  */
              }
          });
        }
    }
})();



/**=========================================================
 * Module: demo-buttons.js
 * Provides a simple demo for buttons actions
 =========================================================*/

(function() {
    'use strict';

    angular
        .module('app.tables')
        .controller('TablexEditableController', TablexEditableController);

    TablexEditableController.$inject = ['$filter', '$http', 'editableOptions', 'editableThemes','$q'];
    function TablexEditableController($filter, $http, editableOptions, editableThemes, $q) {
        var vm = this;

        activate();

        ////////////////

        function activate() {

          // editable row
          // -----------------------------------
          vm.users = [
            {id: 1, name: 'awesome user1', status: 2, group: 4, groupName: 'admin'},
            {id: 2, name: 'awesome user2', status: undefined, group: 3, groupName: 'vip'},
            {id: 3, name: 'awesome user3', status: 2, group: null}
          ];

          vm.statuses = [
            {value: 1, text: 'status1'},
            {value: 2, text: 'status2'},
            {value: 3, text: 'status3'},
            {value: 4, text: 'status4'}
          ];

          vm.groups = [];
          vm.loadGroups = function() {
            return vm.groups.length ? null : $http.get('server/xeditable-groups.json').then(function(data) {
              vm.groups = data.data;
            });
          };

          vm.showGroup = function(user) {
            if(user.group && vm.groups.length) {
              var selected = $filter('filter')(vm.groups, {id: user.group});
              return selected.length ? selected[0].text : 'Not set';
            } else {
              return user.groupName || 'Not set';
            }
          };

          vm.showStatus = function(user) {
            var selected = [];
            if(user.status) {
              selected = $filter('filter')(vm.statuses, {value: user.status});
            }
            return selected.length ? selected[0].text : 'Not set';
          };

          vm.checkName = function(data, id) {
            if (id === 2 && data !== 'awesome') {
              return 'Username 2 should be `awesome`';
            }
          };

          vm.saveUser = function(data, id) {
            //vm.user not updated yet
            angular.extend(data, {id: id});
            console.log('Saving user: ' + id);
            // return $http.post('/saveUser', data);
          };

          // remove user
          vm.removeUser = function(index) {
            vm.users.splice(index, 1);
          };

          // add user
          vm.addUser = function() {
            vm.inserted = {
              id: vm.users.length+1,
              name: '',
              status: null,
              group: null,
              isNew: true
            };
            vm.users.push(vm.inserted);
          };

          // editable column
          // -----------------------------------


          vm.saveColumn = function(column) {
            var results = [];
            angular.forEach(vm.users, function(/*user*/) {
              // results.push($http.post('/saveColumn', {column: column, value: user[column], id: user.id}));
              console.log('Saving column: ' + column);
            });
            return $q.all(results);
          };

          // editable table
          // -----------------------------------

          // filter users to show
          vm.filterUser = function(user) {
            return user.isDeleted !== true;
          };

          // mark user as deleted
          vm.deleteUser = function(id) {
            var filtered = $filter('filter')(vm.users, {id: id});
            if (filtered.length) {
              filtered[0].isDeleted = true;
            }
          };

          // cancel all changes
          vm.cancel = function() {
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // undelete
              if (user.isDeleted) {
                delete user.isDeleted;
              }
              // remove new
              if (user.isNew) {
                vm.users.splice(i, 1);
              }
            }
          };

          // save edits
          vm.saveTable = function() {
            var results = [];
            for (var i = vm.users.length; i--;) {
              var user = vm.users[i];
              // actually delete user
              if (user.isDeleted) {
                vm.users.splice(i, 1);
              }
              // mark as not new
              if (user.isNew) {
                user.isNew = false;
              }

              // send on server
              // results.push($http.post('/saveUser', user));
              console.log('Saving Table...');
            }

            return $q.all(results);
          };

        }
    }
})();
