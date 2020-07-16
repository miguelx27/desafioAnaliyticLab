import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  collapsed = true;
  //función para el click event del toolbar
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }

  constructor() {}

  ngOnInit(): void {}
  //función para el posicionamiento del scroll
  scrollPosition(id) {
        let move = document.getElementById(id).offsetTop
        document.documentElement.scrollTop = move - 90
  }
}
