import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utils',
  templateUrl: './time.component.html',
})
export class UtilsComponent implements OnInit {
  private numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
  }
}
