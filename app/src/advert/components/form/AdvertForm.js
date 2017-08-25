// Notice that we do not have a controller since this component does not
// have any specialized logic.
export default {
  name : 'advertForm',
  config : {
    bindings         : { searchText : '=', searchTextChange : '&searchTextChange', querySearch : '&querySearch', selectedItemChange : '&selectedItemChange' },
    templateUrl      : 'src/advert/components/form/AdvertForm.html'
  }
};