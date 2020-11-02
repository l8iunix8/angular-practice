import { Injectable, Inject } from '@angular/core';
import { from, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { tap, map } from 'rxjs/operators';
declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class LogStatusService {

  _loginStatus ;

  TOKEN = 'accessToken';
  auth2;
  userProfile = {};
  getProfileSubscription$ = new Subscription();

  get logStatus() {
    return this._loginStatus;
  }

  constructor(private service: ApiService) {
    this._loginStatus = new BehaviorSubject<boolean>(this.loadLocalStorage());
    this.googleInit();
    const token = localStorage.getItem(this.TOKEN);
    this.getProfileSubscription$ = service.getProfile(token).subscribe({
      next: (result) => {
        this.userProfile = result;
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
        localStorage.clear();
      },
    });
  }

  // 判斷localStorage裡面是否存在token (token是否可用 另外再說)
  // 如果有token則回傳true表示不用顯示登入鈕
  loadLocalStorage() {
    return !!localStorage.getItem(this.TOKEN);
  }

  //設定有無資料
  setLogStatus(boo: boolean) {
    this._loginStatus.next(boo);
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id:
          '548588976225-9vn6rb0sv6u2p1d7fk19rr57r9mh4lmu.apps.googleusercontent.com',
        cookie_policy: 'none',
        scope: 'profile email',
      });
    });
  }

  onSignIn(element?): Observable<any> {
    return from(this.auth2.signIn()).pipe(
      map((googleUser: any) => {
        const token = googleUser.getAuthResponse().id_token;
        localStorage.setItem(this.TOKEN, token);
      })
    );
    // return from(this.auth2.signIn()).pipe(
    //   tap((googleUser: any) => {
    //     const token = googleUser.getAuthResponse().id_token;
    //     localStorage.setItem(this.TOKEN, token);
    //     console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //     const profile = googleUser.getBasicProfile();
    //     console.log('ID: ' + profile.getId());
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());
    //   })
    // );

    // 另一種寫法
    // this.auth2.attachClickHandler(element /*傳進來的HTML元素*/ , {},
    //   (googleUser) => {
    //     const profile = googleUser.getBasicProfile();
    //     console.log('Token || ' + googleUser.getAuthResponse().id_token);
    //     console.log('ID: ' + profile.getId());
    //     console.log('Name: ' + profile.getName());
    //     console.log('Image URL: ' + profile.getImageUrl());
    //     console.log('Email: ' + profile.getEmail());
    //     // YOUR CODE HERE
    //     this.logStatus = this.login;
    //     console.log('this.logStatus',this.logStatus)
    //     console.log('this.LOGIN',this._LOGINSTATUS)
    //   }, (error) => {
    //     alert(JSON.stringify(error, undefined, 2));
    //   });
    // });
  }

  onLogout() {
    localStorage.clear();
    this.setLogStatus(false);
  }
}
