import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  constructor(private service: ApiService) { }

  getArticleDataByIdSubscription$ = new Subscription();

  @Input() articleDataID: string;
  data = {};

  ngOnInit(): void {
    this.getArticleDataByIdSubscription$ = this.service.getArticleDataById(this.articleDataID).subscribe((data) => {
      this.data = data;
    });
  }
  ngOnDestroy(): void {
    this.getArticleDataByIdSubscription$.unsubscribe();
  }

  pageToTop() {
    window.scrollTo(0, 0);
  }
}
