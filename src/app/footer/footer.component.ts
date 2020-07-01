import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private service: ApiService) { }
  // 第幾頁
  @Input() page = 1;
  @Input() totalPage;
  @Output() changePage = new EventEmitter<string>();

  ngOnInit(): void {
  }

  switchPage(status: string) {
    this.changePage.emit(status);
  }
}
