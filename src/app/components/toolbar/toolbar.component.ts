import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor() {}

  ngOnInit(): void {}
  scrollPosition(id) {
        let move = document.getElementById(id).offsetTop
        document.documentElement.scrollTop = move - 90
  }
}
