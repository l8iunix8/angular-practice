import { Subscription, Observable } from 'rxjs';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  AfterViewInit,
  ChangeDetectorRef,
  DoCheck,
  OnDestroy, Renderer2
} from '@angular/core';
import { SidebarString } from './string/sidebar.string';
import { LogStatusService } from '../service/log-status/log-status.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  isLoggedIn: Observable<any>;
  sidebarString = SidebarString;
  showMask = false;
  showLoginButton = true;

  @ViewChild('loginButton') loginButton: ElementRef;
  @ViewChild('logoutButton') logoutButton: ElementRef;
  @ViewChild('mask') mask: ElementRef;

  constructor(
    private logStatus: LogStatusService,
    private changeDetectorRef: ChangeDetectorRef,
    private renderer: Renderer2
  ) {
    this.isLoggedIn = this.logStatus.logStatus as Observable<any>;
  }

  ngOnInit() { }

  ngAfterViewInit() {

    this.setMaskAndButton(this.mask, false);
    // 先判斷localstorage是否有資料
    this.isLoggedIn.subscribe((boo) => {
      this.showLoginButton = !boo;
      this.setMaskAndButton(this.loginButton, !boo);
      this.setMaskAndButton(this.logoutButton, boo);
    });
  }


  // 遮罩顯示
  openMask() {
    // this.showMask = true;
    this.setMaskAndButton(this.mask,true);
  }
  
  // 遮罩關閉
  closeMask() {
    // this.showMask = false;
    this.setMaskAndButton(this.mask,false);
  }

  // 按下GOOGLE登入鈕
  googleLogin() {
    this.logStatus.onSignIn().subscribe(
      () => {
        // this.showMask = false;
        // this.showLoginButton = false;
        this.setMaskAndButton(this.mask,false);
        this.setMaskAndButton(this.loginButton,false);
        this.setMaskAndButton(this.logoutButton,true);
        this.logStatus.setLogStatus(true);
      },
      (error) => {
        this.logStatus.setLogStatus(false);
        console.error(JSON.stringify(error));
      }
    );
  }

  // 登出
  clickLogout() {
    this.logStatus.onLogout();
  }

  // 因為在經過google授權登入之後 ngIf的顯示遮罩會有問題 所以改用renderer處理遮罩及按鈕顯示
  setMaskAndButton(obj: ElementRef, boo: boolean) {
    if (!boo) {
      this.renderer.setAttribute(obj.nativeElement, 'hidden', `${!boo}`);
    } else {
      this.renderer.removeAttribute(obj.nativeElement, 'hidden')
    }
  }
}
