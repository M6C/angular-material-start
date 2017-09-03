//https://material.angularjs.org/1.1.0/demo/colors
function UserCardDirectrive() {
    return {
        restrict: 'E',
        templateUrl: 'src/user/components/directive/UserCard.tmpl.html',
        scope: {
            name: '@',
            theme: '@'
        },
        controller: function ($scope) {
            $scope.theme = $scope.theme || 'default';
        }
    };
}

export default [ UserCardDirectrive ];