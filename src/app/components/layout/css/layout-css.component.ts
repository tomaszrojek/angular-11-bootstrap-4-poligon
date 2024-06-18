import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-css',
  templateUrl: './layout-css.component.html',
  styleUrls: ['./layout-css.component.css'],
})
export class LayoutCssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
  }
}
