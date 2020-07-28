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
    Object.keys(this.errorMessage).forEach(element => {
      this.errorMessage[element] = '';
    });
    if (this.messageForm.valid) {
      this.sendComment(this.messageForm.value).subscribe(result => {
        const data = JSON.parse(result);
        this.commentArray.push(data);
        this.messageForm.reset();
        window.scrollTo(0, 0);
      });
    } else {
      const obj = Object.keys(this.messageForm.controls);
      const array = [];
      obj.forEach(element => {
        if (this.messageForm.controls[element].value === '') {
          array.push(element);
        }
      });
      this.checkErrorMessage(array);
    }
  }

  /*
   * 送出留言訊息
   */
  sendComment(comment: ArticleComment): Observable<any> {
    const sendComment = {
      ...{ articleId: Number(this.id) },
      ...comment
    } as ArticleComment;
    return this.service.postCommentByArticleId(sendComment);
  }

  checkErrorMessage(array?: string[]) {
    if (array.length > 0) {
      array.forEach(element => {
        switch (element) {
          case 'name':
            this.setErrorMessage('nameError', '每個欄位皆為必填');
            break;
          case 'email':
            this.setErrorMessage('emailError', '每個欄位皆為必填');
            break;
          case 'comment':
            this.setErrorMessage('commentError', '每個欄位皆為必填');
            break;
        }
      });
    }
    if (!this.messageForm.controls.name.valid && !this.errorMessage.nameError) {
      this.setErrorMessage('nameError', '姓名格式錯誤');
    }
    if (!this.messageForm.controls.email.valid && !this.errorMessage.emailError) {
      this.setErrorMessage('emailError', 'MAIL格式錯誤');
    }
    if (!this.messageForm.controls.comment.valid && !this.errorMessage.commentError) {
      this.setErrorMessage('commentError', '留言格式錯誤');
    }
  }

  setErrorMessage(id: string, msg: string) {
    this.errorMessage[id] = msg;
  }

}
