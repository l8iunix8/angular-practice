import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { SidebarString } from './string/sidebar.string';
import { LogStatusService } from '../service/log-status/log-status.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('login') login: ElementRef;

  constructor(private logStatus: LogStatusService, private changeDetectorRef: ChangeDetectorRef) { }

  sidebarString = SidebarString;
  showMask = false;
  showLoginButton = true;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // 先判斷localstorage是否有資料
    this.showLoginButton = this.logStatus.loadLocalStorage();
  }

  // 遮罩顯示
  openMask() {
    this.showMask = true;
    this.showMask = this.logStatus.loadLocalStorage();
  }

  // 遮罩關閉
  closeMask() {
    this.showMask = false;
  }

  // 按下GOOGLE登入鈕
  googleLogin() {
    this.logStatus.onSignIn(this.login.nativeElement).subscribe(() => {
      this.showMask = false;
      this.showLoginButton = false;
    });
  }

  // 登出
  clickLogout() {
    this.showLoginButton = false;
  }

}
