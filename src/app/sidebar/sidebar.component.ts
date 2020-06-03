import { Component, OnInit } from '@angular/core';
import { SidebarString } from './string/sidebar.string';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  sidebarString = SidebarString;

  ngOnInit(): void {
  }

}
