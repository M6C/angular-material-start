/**
 * Form Advert Controller for the Angular Material Starter App
 * @constructor
 */
function FormAdvertController($mdSidenav, $scope) {
    var self = this;
    self.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Montpellier, FR',
      description: ''
    };
    
    self.submitAdvert = function(event) {
        $scope.$parent.app.searchAvert();
    }
}

export default [ '$mdSidenav', '$scope', FormAdvertController ];