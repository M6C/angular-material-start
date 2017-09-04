/**
 * Search Form Controller
 * @param $timeout
 * @param $q
 * @param $log
 * @constructor
 */
function FormController($timeout, $q, $log, $SideNavService, $advertService, $scope) {
    var self = this;

    self.navigationService = $SideNavService;
    self.advertService = $advertService;

    self.advertSelected = $advertService.advertSelected;
    self.advertList = $advertService.data;
    // Pagination
    self.advertPageFiltred = [];
    self.currentPage = 1;
    self.numPerPage = 10;
    self.maxSizePage = 5;

    self.simulateQuery = false;
    self.isDisabled    = false;

    // list of `state` value/display objects
    self.states        = loadAll();
    self.querySearch   = querySearch;
    self.selectedItemChange = selectedItemChange;
    self.searchText     = '';//'magna';//searchText;

    self.newState = newState;

    self.numPages = function () {
        return Math.ceil(self.todos.length / self.numPerPage);
    };

    self.selectAdvert = function (advert) {
        self.advertService.advertSelected = advert;
        self.advertSelected = advert;
        self.navigationService.addAdvert();
    }

    $scope.$watch('currentPage + numPerPage', function() {
        var begin = ((self.currentPage - 1) * self.numPerPage);
        var end = begin + self.numPerPage;
        
        self.advertPageFiltred = self.advertList.slice(begin, end);
    });

    function newState(state) {
      alert("Sorry! You'll need to create a Constitution for " + state + " first!");
    }

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : self.states,
          deferred;
      if (self.simulateQuery) {
        deferred = $q.defer();
        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
        return deferred.promise;
      } else {
        return results;
      }
    }

    function searchTextChange(text) {
      $log.info('Text changed to ' + text);
    }

    function selectedItemChange(item) {
      $log.info('Item changed to ' + JSON.stringify(item));
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) >= 0);
      };

    }
}


export default [ '$timeout', '$q', '$log', 'SideNavService', 'AdvertService', '$scope', FormController ];