import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'devplan-page',
    templateUrl: 'page.component.html',
    styleUrls: ['page.component.css']
})
export class PageComponent {


    @Input() currentPage: number;
    @Input() totalPages: number;


    getPageSize() {

        if(this.currentPage == 0 && this.totalPages< 6 ){
            return this.generatePageSize(this.currentPage+1,this.totalPages);
        }

        if(this.currentPage == 0 && this.totalPages>5){
            return this.generatePageSize(this.currentPage + 1,5);
        }

        if(this.currentPage >0 && this.totalPages <= 5){
            return this.generatePageSize(1,this.totalPages);
        }

        if (this.currentPage<3 && this.totalPages>5){
            return this.generatePageSize(1,5);
        }

        if (this.totalPages - this.currentPage <= 3 && this.totalPages <= 5 ){
            return this.generatePageSize(1,this.totalPages);
        }

        if (this.totalPages - this.currentPage <= 3 && this.totalPages >= 5){
            return this.generatePageSize(this.currentPage-1,this.totalPages);
        }

        if (this.totalPages - this.currentPage > 2 && this.totalPages >= 5){
            return this.generatePageSize(this.currentPage-2,this.currentPage+2);
        }

        // if(this.currentPage > 0 && this.totalPages>5){
        //
        // }

    }

    generatePageSize(startPage:number,endPage:number ){
        let pageSize = [];
        while ( startPage <= endPage) {
            pageSize.push(startPage);
            startPage++;
        }
        return pageSize;
    }

    setPageNumber(pageNumber: number) {
        this.currentPage = pageNumber;

    }

    nextPage() {
        if (this.currentPage + 1 < this.totalPages) {
            this.currentPage++;
        }
    }

    previousPage() {
        if (this.currentPage > 0) {
            this.currentPage--;
        }
    }


}
