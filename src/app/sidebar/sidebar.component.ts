import { Subscription } from 'rxjs';
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
  OnDestroy,
} from '@angular/core';
import { SidebarString } from './string/sidebar.string';
import { LogStatusService } from '../service/log-status/log-status.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  showArray = {
    showMask: false,
    showLoginButton: false,
  };
  sidebarString = SidebarString;
  showMask = false;
  showLoginButton = true;

  constructor(
    private logStatus: LogStatusService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // 先判斷localstorage是否有資料
    this.showArray.showLoginButton = this.logStatus.loadLocalStorage();
  }

  // 遮罩顯示
  openMask() {
    this.showArray.showMask = true;
  }

  // 遮罩關閉
  closeMask() {
    this.showArray.showMask = false;
  }

  // 按下GOOGLE登入鈕
  googleLogin() {
    this.logStatus.onSignIn().subscribe(
      (token: string) => {
        localStorage.setItem('token', token);
        this.showArray.showMask = false;
        this.showArray.showLoginButton = false;
      },
      (error) => {
        console.error(JSON.stringify(error));
      }
    );
  }

  // 登出
  clickLogout() {
    this.logStatus.onLogout();
    this.showArray.showLoginButton = true;
  }
}
