/**
 * Side Nav Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function SideNavController($mdSidenav, $scope, $SideNavService, $advertService) {
    var self = this;

    self.navigationService = $SideNavService;
    self.advertService = $advertService;

    self.toggleList = function() {
        $mdSidenav('left').toggle();
    };

    self.next = function() {
        self.navigationService.next();
    };

    self.previous = function() {
        self.navigationService.previous();
    };

    self.onSelectTabAdd = function(tab) {
        self.advertService.advertSelected = self.advertService.createAdvertEmpty();
    }

    self.addAdvert = function(event) {
        self.advertService.advertSelected = self.advertService.createAdvertEmpty();
        self.navigationService.addAdvert();
    }

    /**
    * Hide or Show the 'left' sideNav area
    */
    function toggleLeft() {
        $mdSidenav('left').toggle();
    }
    
    /**
    * Select the current avatars
    * @param menuId
    */
    function selectUser ( user ) {
    }

}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', SideNavController ];