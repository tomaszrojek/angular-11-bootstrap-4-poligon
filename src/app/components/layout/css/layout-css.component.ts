import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-css',
  templateUrl: './layout-css.component.html',
  styleUrls: ['./layout-css.component.scss'],
})
export class LayoutCssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
  }
}
