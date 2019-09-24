import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>
      simple works!
    </p>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
