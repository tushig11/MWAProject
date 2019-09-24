import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-time',
  template: `
  <h6 class="inline">Profile</h6>
  <span class="fRight">
    <a [routerLink]="['/user/most']" class="subLink">Most Recent</a> /
    <a class="subLink"><strong>All-Time View</strong></a>
  </span>
  <hr>
  `,
  styles: []
})
export class AllTimeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
