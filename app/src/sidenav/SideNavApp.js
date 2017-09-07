// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import Pagination from 'src/pagination/components/index';

import SideNavService from 'src/sidenav/services/SideNavService';
import AdvertService from 'src/advert/services/AdvertService';

import SideNavController from 'src/sidenav/components/controller/SideNavController';
import FormController from 'src/search/components/controller/FormController';
import FormAdvertController from 'src/advert/components/controller/FormAdvertController';

import HomeButtonToolbar from 'src/advert/components/toolbar/HomeButtonToolbar';
import AdvertList from 'src/advert/components/list/AdvertList';
import AdvertForm from 'src/advert/components/form/AdvertForm';

import UserCardDirective from 'src/user/components/directive/UserCardDirective';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

var myApp = angular.module('SideNav', ['ngMaterial'/*, 'cl.paging'*//*, 'ui.bootstrap'*/]);

myApp.config(($mdIconProvider, $mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        // .primaryPalette('pink')
        // .accentPalette('orange')
    ;

    // Register icons
    $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("blank", "./assets/svg/blank.svg", 24)
    ;
});

myApp.service('SideNavService', SideNavService);
myApp.service('AdvertService', AdvertService);

myApp.controller('SideNavController', SideNavController);
myApp.controller('FormController', FormController);
myApp.controller('FormAdvertController', FormAdvertController);

myApp.component(HomeButtonToolbar.name, HomeButtonToolbar.config)
myApp.component(AdvertList.name, AdvertList.config);
myApp.component(AdvertForm.name, AdvertForm.config);
myApp.component(Pagination.name, Pagination.config)

myApp.directive('userCard', UserCardDirective);

FormAdvertController.submitAdvert = function(event) {
    SideNavController.searchAvert();
}