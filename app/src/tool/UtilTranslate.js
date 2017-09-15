let component = {
    fnTranslate: function(key, $filter) {
        //return $filter("translate")(key, {interpolations_params});
        return $filter("translate")(key);
    },
    fnTranslateAsync: function(key, $translate) {
        let ret = '';
        $translate(key).then(function (text) {
          ret = text;
        });
        return ret;
    }
};
export default component;