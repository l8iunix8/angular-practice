import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArticleComment } from 'src/app/type/comment.type';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://127.0.0.1:4999/';

  constructor(private http: HttpClient) {}

  getArticleDataById(articleId) {
    return this.http.get(this.url + 'api/' + articleId, {
      responseType: 'json',
    });
  }

  getTotalDataCount() {
    return this.http.get(this.url + 'api/totalDataCount', {
      responseType: 'text',
    });
  }

  getCommentByArticleId(articleId) {
    return this.http.get(this.url + 'api/comment/' + articleId, {
      responseType: 'json',
    });
  }

  postCommentByArticleId(comment: ArticleComment) {
    console.log('postCommentByArticleId', comment);
    return this.http.post(this.url + 'api/comment', comment, {
      headers: {
        'Content-Type': 'application/json',
      },
      responseType: 'text',
    });
  }

  getCommentResponseByCommentId(commentId) {
    return this.http.get(this.url + 'api/commentResponse/' + commentId, {
      responseType: 'json',
    });
  }

  getProfile(token) {
    const sendToken = { accessToken: token };
    return this.http.post(this.url + 'api/getProfile/', sendToken, {
      responseType: 'json',
    });
  }
}
