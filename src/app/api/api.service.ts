import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'http://127.0.0.1:4999/';

  constructor(private http: HttpClient) { }

  getArticleDataById(id) {
    return this.http.get(this.url + 'api/' + id, { responseType: 'json' });
  }

  getTotalDataCount() {
    return this.http.get(this.url + 'api/totalDataCount', { responseType: 'text' });
  }

  getCommentByArticleId(id) {
    return this.http.get(this.url + 'api/comment/' + id, { responseType: 'json' });
  }
}
