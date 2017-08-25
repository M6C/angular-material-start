/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope, $sideNavService, $advertService) {
    var self = this;

    self.data =
        {
            "isActive": true,
            "picture": "http://placehold.it/32x32",
            "birthday": "",
            "name": {
                "first": "",
                "last": ""
            },
            "email": "",
            "phone": "",
            "address": {
                "street": "",
                "city": "",
                "state": "France"
            },
            "description": ""
        }
    ;
    
    self.submitAdvert = function(event) {
        $advertService.addAdvert(this.data);
        $sideNavService.seachAdvert();
    }
}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', FormAdvertController ];