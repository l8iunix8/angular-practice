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
  isLoggedIn: Observable<any>;
  sidebarString = SidebarString;
  showMask = false;
  showLoginButton = true;

  constructor(
    private logStatus: LogStatusService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.isLoggedIn = this.logStatus.logStatus as Observable<any>;
  }

  ngOnInit(): void {
    // 先判斷localstorage是否有資料
    this.isLoggedIn.subscribe((boo) => {
      console.log('boo', boo);
      this.showLoginButton = !boo;
    });
  }

  // 遮罩顯示
  openMask() {
    this.showMask = true;
  }

  // 遮罩關閉
  closeMask() {
    this.showMask = false;
  }

  // 按下GOOGLE登入鈕
  googleLogin() {
    this.logStatus.onSignIn().subscribe(
      () => {
        this.showMask = false;
        // this.showLoginButton = false;
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
}
