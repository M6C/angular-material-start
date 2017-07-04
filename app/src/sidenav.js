// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import SideNav from 'src/SideNavController';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
export default angular.module('SideNav', ['ngMaterial'])
          .controller('SideNavController', SideNavCtrl);

function SideNavCtrl ( $scope ) {
    $scope.data = {
      selectedIndex: 0,
      secondLocked:  true,
      secondLabel:   "Item Two",
      bottom:        false
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
}