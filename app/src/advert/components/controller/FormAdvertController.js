/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope, $sideNavService, $advertService, $mdpTimePicker) {
    var self = this;

    let fnInitAdvert = function(advert) {
        let ret = angular.copy(advert);
        
        if (!ret.birthday) {
            ret.birthday = new Date();
        }
        if (!ret.contract) {
            ret.contract = {};
        }

        return ret;
    };
    self.data = fnInitAdvert($advertService.advertSelected);
    self.selectedFormIndex = 2;
    self.selectedContractTimeIndex = 0;

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

    self.showTimePicker = function(ev, contract, field) {
        $mdpTimePicker($scope.currentTime, {
            targetEvent: ev
        }).then(function(selectedDate) {
            // contract[field] = selectedDate;
            self.data.contract[field] = selectedDate;
        });
    }  
}

export default [ '$mdSidenav', '$scope', 'SideNavService', 'AdvertService', '$mdpTimePicker', FormAdvertController ];