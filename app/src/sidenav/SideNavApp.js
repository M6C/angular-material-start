// Load libraries
import angular from 'angular';

// jspm install
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
// jspm install angular-cookies
import 'angular-cookies';

// import * as moment from 'npm:moment@2.18.1/moment';
// import moment from 'moment';
import 'github:dpoetzsch/md-pickers@1.1.0';
import 'npm:angular-sanitize@1.6.6/angular-sanitize';

// Translate i80 - https://cdnjs.com/libraries/angular-translate
// jspm install angular-translate angular-translate-storage-cookie angular-translate-loader-static-files angular-translate-storage-local
import 'angular-translate';
import 'angular-translate-storage-cookie';
import 'angular-translate-loader-static-files';
import 'angular-translate-storage-local';

import Pagination from 'src/pagination/components/index';

import SideNavService from 'src/sidenav/services/SideNavService';
import AdvertService from 'src/advert/services/AdvertService';

import SideNavController from 'src/sidenav/components/controller/SideNavController';
import FormController from 'src/search/components/controller/FormController';
import FormAdvertController from 'src/advert/components/controller/FormAdvertController';

import HomeButtonToolbar from 'src/advert/components/toolbar/HomeButtonToolbar';
import AdvertList from 'src/advert/components/list/AdvertList';
import AdvertForm from 'src/advert/components/form/AdvertForm';
import ChildIcon from 'src/advert/components/icon/ChildIcon';
import Citation from 'src/advert/components/citation/Citation';

import UserCardDirective from 'src/user/components/directive/UserCardDirective';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

var myApp = angular.module('SideNav', [
    'ngMaterial'
    , 'ngCookies'
    , 'pascalprecht.translate'
    , 'mdPickers'
    , 'ngSanitize'
    /*, 'cl.paging'*/
    /*, 'ui.bootstrap'*/
]);

// myApp.constant('LOCALES', {
//     'locales': {
//         'fr_FR': 'Fran�ais',
//         'en_US': 'English'
//     },
//     'preferredLocale': 'fr_FR'
// });

myApp.config(($mdThemingProvider) => {
    $mdThemingProvider.theme('default')
        // .primaryPalette('pink')
        // .accentPalette('orange')
    ;
});

myApp.config(($mdIconProvider) => {

    // Register icons
    $mdIconProvider
        .icon("menu", "./assets/svg/menu.svg", 24)
        .icon("blank", "./assets/svg/blank.svg", 24)
    ;
});

myApp.config(($translateProvider) => {
    $translateProvider.useMissingTranslationHandlerLog();

    $translateProvider.useStaticFilesLoader({
        prefix: 'assets/i80/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    // $translateProvider.preferredLanguage('fr_FR');// is applied on first load
    $translateProvider.preferredLanguage('fr');// is applied on first load
    $translateProvider.useLocalStorage();// saves selected language to localStorage

    // https://angular-translate.github.io/docs/#/api/pascalprecht.translate.$translateSanitizationProvider
    // $translateProvider.useSanitizeValueStrategy('sanitize');
    // here the html tag works
    // $translateProvider.useSanitizeValueStrategy('sanitizeParameters');
    // $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.useSanitizeValueStrategy('escapeParameters');
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
myApp.component(ChildIcon.name, ChildIcon.config)
myApp.component(Citation.name, Citation.config)

myApp.directive('userCard', UserCardDirective);

myApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});

FormAdvertController.submitAdvert = function(event) {
    SideNavController.searchAvert();
}