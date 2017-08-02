// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import SideNavController from 'src/sidenav/components/controller/SideNavController';
import FormController from 'src/search/components/controller/FormController';

var myApp = angular.module('SideNav', ['ngMaterial']);

myApp.controller('SideNavController', SideNavCtrl);
myApp.controller('FormController', FormController);

function SideNavCtrl ( $scope ) {
    $scope.data = {
      selectedIndex: 1
    };
    $scope.next = function() {
      $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;
    };
    $scope.previous = function() {
      $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
    };
}