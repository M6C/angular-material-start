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

// Translate i80 - https://cdnjs.com/libraries/angular-translate
import Translate from 'https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.15.2/angular-translate.js';
// import TranslateHandlerLog from 'https://cdnjs.cloudflare.com/ajax/libs/angular-translate/2.15.2/angular-translate-handler-log/angular-translate-handler-log.js';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

var myApp = angular.module('SideNav', [
    'ngMaterial'
    , Translate
    /*, 'pascalprecht.translate'*/
    /*, 'cl.paging'*/
    /*, 'ui.bootstrap'*/
]);

myApp.config(($mdIconProvider, $mdThemingProvider, $translateProvider) => {
    $mdThemingProvider.theme('default')
        // .primaryPalette('pink')
        // .accentPalette('orange')
    ;

    // Register icons
    $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("blank", "./assets/svg/blank.svg", 24)
    ;

    $translateProvider.translations('en', {
        ADVERT_FORM_SEARCH_INPUT: 'What is your favorite US state?'
    });
    $translateProvider.translations('fr', {
        ADVERT_FORM_SEARCH_INPUT: 'Rechercher une annonce'
    });
    $translateProvider.preferredLanguage('fr');
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