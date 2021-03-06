function CollectionPaginationController(filterFilter) {
    var self = this;

    self.$onChanges = function() {
        this.perPage = parseInt(this.perPage) || 5;
        this.shownIndexesCount = parseInt(this.navigationLength) || 5;

        // Filter data to searchText field
        this.collectionFiltered = filterFilter(this.collection, this.searchText);

        this.lastIndex = Math.ceil(this.collectionFiltered.length / this.perPage) - 1;
        this.allIndexes = [];
        for(let i = 0; i <= this.lastIndex; this.allIndexes.push(i++)) {}
        this.beginning();
    }
    
    self.beginning = function() {
        this.selectedIndex = 0;
        this.indexesOffset = 0;
        this.update();
    }
    
    self.end = function() {
        this.selectedIndex = this.lastIndex;
        while(this.indexesOffset + this.shownIndexesCount <= this.lastIndex) this.indexesOffset += this.shownIndexesCount;
        this.update();
    }
    
    self.select = function(index) {
        this.selectedIndex = index;
        this.update();
    }
    
    self.previousIndexes = function() {
        this.selectedIndex = this.indexesOffset - 1;
        this.indexesOffset -= this.shownIndexesCount;
        this.update();
    }
    
    self.nextIndexes = function() {
        this.indexesOffset += this.shownIndexesCount;
        this.selectedIndex = this.indexesOffset;
        this.update();
    }
    
    self.update = function() {
        let offset = this.selectedIndex * this.perPage;

        // Paginated data from filterd data updated in onChange function
        this.paginatedCollection = this.collectionFiltered.slice(offset, offset + this.perPage);
    }
}

export default [ 'filterFilter', CollectionPaginationController ];