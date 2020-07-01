import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ApiService) { }

  data;
  id;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getArticleDataById(this.id - 1).subscribe((data) => {
      this.data = data;
    });

  }

}
