import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-bootstrap',
  templateUrl: './layout-bootstrap.component.html',
  styleUrls: ['./layout-bootstrap.component.css'],
})
export class LayoutBootstrapComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  test(event: Event) {
    console.log('--------------');
  }
}
