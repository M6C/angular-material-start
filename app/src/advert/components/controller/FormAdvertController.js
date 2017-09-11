/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope, $sideNavService, $advertService) {
    var self = this;

    self.data = angular.copy($advertService.advertSelected);
    self.data.birthday = new Date();

    self.init = function(form) {
        if (!form.$valid) {
            // ToDo : Set Focus on 1st field not valid each time component is displayed

            // angular.element("[name='" + form.$name + "']").find('.ng-invalid:visible:first').focus();
            // angular.element().find('.ng-invalid:visible:first').focus();
            // angular.element().find(':visible:first').focus();
            // return false;
        }
    }

    self.submitAdvert = function(event) {
        $advertService.addAdvert(this.data);
        $sideNavService.seachAdvert();
    }
}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', FormAdvertController ];