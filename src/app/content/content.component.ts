import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit ,OnDestroy{
  constructor(private service: ApiService) { }

  getTotalDataCountSubscription$ = new Subscription();
  
  // 第幾頁
  page = 1;
  // 一頁幾筆資料
  articleCount = 4;
  // 存放要第幾筆到第幾筆
  articleArray = [];
  // 總頁數
  totalPage;
  // 總共幾筆
  totalDataCount;

  ngOnInit(): void {
    this.getTotalDataCountSubscription$ = this.service.getTotalDataCount().subscribe((data: any) => {
      this.totalDataCount = Number(data);
      this.totalPage = Math.ceil(data / this.articleCount);
      for (let i = 0; i < this.articleCount; i++) {
        this.articleArray.push(i);
      }
    });
  }

  ngOnDestroy(): void {
    this.getTotalDataCountSubscription$.unsubscribe();
  }

  changePage(status) {
    // 換頁
    window.scrollTo(0, 0);
    this.articleArray = [];
    switch (status) {
      case '+':
        for (let i = 0; i < this.articleCount; i++) {
          if (this.page * this.articleCount + i < this.totalDataCount) {
            this.articleArray.push(this.page * this.articleCount + i);
          }
        }
        this.page = this.page === this.totalPage ? this.page : (this.page + 1);
        break;

      case '-':
        this.page = this.page === 1 ? this.page : (this.page - 1);
        for (let i = 0; i < this.articleCount; i++) {
          this.articleArray.push((this.page - 1) * this.articleCount + i);
        }
        break;
    }
  }

}
