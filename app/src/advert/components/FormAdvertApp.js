// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import FormAdvertController from 'src/advert/components/controller/FormAdvertController';

var myApp = angular.module('FormAdvert', ['ngMaterial' /*, 'ngMessages'*/]);

myApp.controller('FormAdvertController', FormAdvertController);