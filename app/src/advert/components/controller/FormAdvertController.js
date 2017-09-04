/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope, $sideNavService, $advertService) {
    var self = this;

    self.data = $advertService.advertSelected;
    
    self.submitAdvert = function(event) {
        $advertService.addAdvert(this.data);
        $sideNavService.seachAdvert();
    }
}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', FormAdvertController ];