import CollectionPaginationController from 'src/pagination/components/controller';

export default {
    name: 'pagination',
    config: {
        controller: CollectionPaginationController,
        controllerAs: 'vm',
        templateUrl : 'src/pagination/components/template.html',
        bindings: {
            collection: '<',
            paginatedCollection: '=',
            perPage: '<',
            navigationLength: '<',
            searchText : '<'
        }
    }
};