/**
 * Side Nav Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function SideNavController($mdSidenav) {
  var self = this;

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
  }
}

export default [ '$mdSidenav', SideNavController ];