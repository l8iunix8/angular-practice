import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  @Input() page = 1;

  @Output() changePage = new EventEmitter<string>();

  ngOnInit(): void {}

  switchPage(status:string){
    this.changePage.emit(status);
  }
}
