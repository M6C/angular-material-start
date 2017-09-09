let component = {
    name : 'childIcon',
    config : {
        bindings         : { age: '<', size: '<' },
        templateUrl      : 'src/advert/components/icon/ChildIcon.html',
        controllerAs: '$ctrlIcon',
        controller: function() {
            let self = this;
            let random = Math.random();

            self.iconId = function() {
                return component.replaceData('child_#age_1_#size', self.age, self.size);
            };

            self.image = function() {
                // If age is not defined initiaze with a random number
                let age = (self.age === undefined) ? Math.floor(random * 3) : self.age;
                let icons = component.iconChildList.icons_by_age[age].icons;
                let length = icons.length;
                let icon = icons[Math.floor(random * length)];
                let filename = icon.filename; //'Babycare_Pregnancy-01-#size'
                let path = component.iconChildList.path; //'assets/svg/child/#age/'
                return component.formatFile(path, filename, age, self.size, 'png');

            };

            self.iconClass = function() {
                return 'md-' + self.size;
            };
        }
    }
    ,
    regexAge: /#age/gi,
    regexSize: /#size/gi
    ,
    replaceData: function(str, age, size) {
        return str.replace(component.regexAge, age).replace(component.regexSize, size);
    }
    ,
    formatFile: function (filename, age, size) {
        return component.formatFile(component.iconChildList.path, filename, age, size, 'svg');
    }
    ,
    formatFile: function (path, filename, age, size, ext) {
        return component.replaceData(path + filename, age, size) + '.' + ext;
    }
    ,
    initialize: function($mdIconProvider) {
        // let iconChildList = component.iconChildList;
        // let iconSize = iconChildList.size;
        // let path = iconChildList.path;
        // let replaceData = component.replaceData;
        // let formatFile = component.formatFile;
    
        // iconChildList.icons_by_age.forEach((iconsByAge) => {
        //     let age = iconsByAge.age;
        //     iconsByAge.icons.forEach((icon) => {
        //         iconSize.forEach((size) => {
        //             let id = replaceData(icon.id, age, size);
        //             let file = formatFile(icon.filename, age, size);
        //             console.log('Register icons - age:' + age + ',size:' + size + ' - id:' + id + ',file:' + file);
        //             // Register icons
        //             $mdIconProvider.icon(id, file, size);
        //         });
        //     });
        // });
    }
    ,
    // https://www.iconfinder.com/search/?q=baby
    iconChildList: {
        path: './assets/svg/child/#age/',
        size: [24, 32, 48, 64, 128],
        icons_by_age: [
            {
                age: 0,
                icons: [
                    {id: 'child_#age_1_#size', filename: 'Babycare_Pregnancy-01-#size'},
                    {id: 'child_#age_2_#size', filename: 'Babycare_Pregnancy-02-#size'},
                    {id: 'child_#age_3_#size', filename: 'Babycare_Pregnancy-06-#size'},
                    {id: 'child_#age_4_#size', filename: 'Babycare_Pregnancy-12-#size'},
                    {id: 'child_#age_5_#size', filename: 'Babycare_Pregnancy-14-#size'},
                    {id: 'child_#age_6_#size', filename: 'Babycare_Pregnancy-23-#size'},
                ]
            },
            {
                age: 1,
                icons: [
                    {id: 'child_#age_1_#size', filename: '_baby_mobile-#size'},
                    {id: 'child_#age_2_#size', filename: '_baby_smile-#size'},
                    {id: 'child_#age_3_#size', filename: '_baby-#size'},
                    {id: 'child_#age_4_#size', filename: '_bottle-#size'},
                    {id: 'child_#age_4_#size', filename: '_lady_bug-#size'},
                    {id: 'child_#age_4_#size', filename: '_teddy_bear-#size'},
                    {id: 'child_#age_4_#size', filename: 'Baby_bottle-#size'},
                    {id: 'child_#age_4_#size', filename: 'Baby-#size'},
                ]
            },
            {
                age: 2,
                icons: [
                    {id: 'child_#age_1_#size', filename: 'Boy_01-#size'},
                    {id: 'child_#age_2_#size', filename: 'Boy_03-#size'},
                    {id: 'child_#age_3_#size', filename: 'Boy_05-#size'},
                    {id: 'child_#age_4_#size', filename: 'Boy_06-#size'},
                    {id: 'child_#age_5_#size', filename: 'Boy_07-#size'},
                    {id: 'child_#age_6_#size', filename: 'Boy_09-#size'},
                    {id: 'child_#age_7_#size', filename: 'Boy_10-#size'},
                    {id: 'child_#age_8_#size', filename: 'Boy_11-#size'},
                ]
            }
        ]
    }
};
export default component;