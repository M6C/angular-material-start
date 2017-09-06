/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope, $sideNavService, $advertService) {
    var self = this;

    self.data = angular.copy($advertService.advertSelected);

    self.submitAdvert = function(event) {
        $advertService.addAdvert(this.data);
        $sideNavService.seachAdvert();
    }

    self.back = function(event) {
        $sideNavService.seachAdvert();
    }
}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', FormAdvertController ];