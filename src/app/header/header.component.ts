import { Component, OnInit } from '@angular/core';
import { HeaderString } from './string/header_string';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  headerString =  HeaderString;

  ngOnInit(): void {
  }

}
