import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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
  commentArray = [];
  messageForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    message: ['', Validators.required]
  });

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getArticleDataByIdSubscription$ = this.service.getArticleDataById(this.id - 1).subscribe((data) => {
      this.data = data;
    });
    this.service.getCommentByArticleId(this.id).subscribe((commentArray: any[]) => {
      this.commentArray = commentArray;
    });
  }

  ngOnDestroy(): void {
    this.getArticleDataByIdSubscription$.unsubscribe();
  }
  onSubmit() {
    if (this.messageForm.valid) {
      this.messageForm.reset();
    } else {
      alert("請填寫全部內容")
    }
  }

}
