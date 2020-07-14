import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute, private service: ApiService, private fb: FormBuilder) { }
  getArticleDataByIdSubscription$ = new Subscription();
  data;
  id;
  messageForm = this.fb.group({
    name: [''],
    email: [''],
    message: ['']
  });
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getArticleDataByIdSubscription$ = this.service.getArticleDataById(this.id - 1).subscribe((data) => {
      this.data = data;
    });
  }

  ngOnDestroy(): void {
    this.getArticleDataByIdSubscription$.unsubscribe();
  }
  onSubmit(){
  }

}
