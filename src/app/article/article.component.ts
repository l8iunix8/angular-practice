import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  constructor(private service: ApiService) {}

  @Input() articleDataID: string;
  data = {};

  ngOnInit(): void {
    this.service.getArticleDataById(this.articleDataID).subscribe((data) => {
      this.data = data;
    });
  }
}
