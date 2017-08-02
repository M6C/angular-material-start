// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import SearchForm from 'src/search/components/form/FormController';

var myApp = angular.module('SideNav', ['ngMaterial']);

myApp.controller('FormController', FormCtrl);

function FormCtrl ( $scope ) {
}
