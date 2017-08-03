/**
 * Side Nav Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function SideNavController($mdSidenav) {
    var self = this;

    self.data = {
        selectedIndex: 1
    };

    self.toggleList = function() {
        $mdSidenav('left').toggle();
    };

    self.next = function() {
        $mdSidenav.data.selectedIndex = Math.min($mdSidenav.data.selectedIndex + 1, 2) ;
    };

    self.previous = function() {
        $mdSidenav.data.selectedIndex = Math.max($mdSidenav.data.selectedIndex - 1, 0);
    };

    self.add = function(event) {
        self.data = {
            selectedIndex: 2
        };
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

export default [ '$mdSidenav', SideNavController ];