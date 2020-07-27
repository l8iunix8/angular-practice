import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api/api.service';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ArticleComment } from 'src/app/type/comment.type';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit, OnDestroy {

  data;
  id;
  errorMessage = {
    nameError: '',
    emailError: '',
    commentError: ''
  };
  commentArray = [];
  comment: ArticleComment;

  getArticleDataByIdSubscription$ = new Subscription();

  messageForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    comment: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private service: ApiService, private fb: FormBuilder) { }

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

  /*
   * 送出表單
   */

  onSubmit() {
    if (this.messageForm.valid) {
      this.sendComment(this.messageForm.value).subscribe(result => {

        this.messageForm.reset();
        window.scrollTo(0, 0);
      });
    } else {
      this.checkErrorMessage();
    }
  }

  /*
   * 送出留言訊息
   */
  sendComment(comment: ArticleComment): Observable<any> {
    const sendComment = {
      ...{ articleId: this.id },
      ...comment
    } as ArticleComment;
    return this.service.postCommentByArticleId(sendComment);
  }

  checkErrorMessage() {
    console.log('checkErrorMessage');
    if (!this.messageForm.controls.name.valid) {
      this.setErrorMessage('nameError', '姓名格式錯誤');
    } else if (!this.messageForm.controls.email.valid) {
      this.setErrorMessage('emailError', 'MAIL格式錯誤');
    } else if (!this.messageForm.controls.comment.valid) {
      this.setErrorMessage('commentError', '留言格式錯誤');
    }
  }

  setErrorMessage(id: string, msg: string) {
    // tslint:disable-next-line: no-string-literal
    this.errorMessage['id'] = msg;
  }

}
