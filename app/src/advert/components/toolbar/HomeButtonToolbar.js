// Notice that we do not have a controller since this component does not
// have any specialized logic.
export default {
  name : 'homeButtonToolbar',
  config : {
    bindings         : { selectedIndex: '<' },
    templateUrl      : 'src/advert/components/toolbar/HomeButtonToolbar.html',
    controller: function($mdSidenav, SideNavService) {
        let self = this;

        self.toggleList = function() {
            $mdSidenav('left').toggle();
        };
    
        self.back = function(event) {
            SideNavService.seachAdvert();
        }
    }
  }
};