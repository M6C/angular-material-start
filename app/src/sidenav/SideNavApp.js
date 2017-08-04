// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import SideNavController from 'src/sidenav/components/controller/SideNavController';
import FormController from 'src/search/components/controller/FormController';
import FormAdvertController from 'src/advert/components/controller/FormAdvertController';

var myApp = angular.module('SideNav', ['ngMaterial']);

myApp.config(($mdIconProvider, $mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        // .primaryPalette('pink')
        // .accentPalette('orange')
    ;

    // Register icons
    $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
    ;
});

myApp.controller('SideNavController', SideNavController);
myApp.controller('FormController', FormController);
myApp.controller('FormAdvertController', FormAdvertController);