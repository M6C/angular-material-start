/**
 * Users SideNavService
 * Uses embedded, Side Nav Data
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
*/
function SideNavService() {
var self = this;

    self.data = {
        selectedIndex: 2
    };

    self.next = function() {
        self.data.selectedIndex = Math.min(self.data.selectedIndex + 1, 2) ;
    };

    self.previous = function() {
        self.data.selectedIndex = Math.max(self.data.selectedIndex - 1, 0);
    };

    self.addAdvert = function(event) {
        self.data = {
            selectedIndex: 2
        };
    }

    self.seachAdvert = function() {
        self.data = {
            selectedIndex: 1
        };
    }

    self.link = function() {
        self.data = {
            selectedIndex: 0
        };
    }

  // Promise-based API
  return self;
}

export default [ SideNavService ];