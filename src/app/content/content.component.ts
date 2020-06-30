import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  constructor(private service: ApiService) {}
  page = 1;
  articleCount = 7;
  articleArray = [];

  ngOnInit(): void {
    for (let i = 0; i < this.articleCount; i++) {
      this.articleArray.push(i);
    }
  }
  changePage(status){
    switch (status) {
      case '+':
        this.page ++;
        break;

      case '-':
        this.page --;
        break;
    }
  }

}
