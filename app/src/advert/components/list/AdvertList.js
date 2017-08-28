// Notice that we do not have a controller since this component does not
// have any specialized logic.
export default {
  name : 'advertList',
  config : {
    bindings         : { advertList: '<', advertSelected : '<', onSelectAdvert : '&onSelected' },
    templateUrl      : 'src/advert/components/list/AdvertList.html'
  }
};