/**
 * Side Nav Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function SideNavController($mdSidenav, $scope, $SideNavService) {
    var self = this;

    self.navigationService = $SideNavService;

    self.toggleList = function() {
        $mdSidenav('left').toggle();
    };

    self.next = function() {
        this.navigationService.next();
    };

    self.previous = function() {
        this.navigationService.previous();
    };

    self.addAdvert = function(event) {
        this.navigationService.addAdvert();
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

export default [ '$mdSidenav', '$scope', 'SideNavService', SideNavController ];