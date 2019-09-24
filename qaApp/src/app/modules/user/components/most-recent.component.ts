import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-recent',
  template: `
    <h6 class="inline">Profile</h6>
    <span class="fRight">
      <a class="subLink"><strong>Most Recent</strong></a> /
      <a [routerLink]="['/user/all-time']" class="subLink">All-Time View</a>
    </span>
    <hr>
  `,
  styles: []
})
export class MostRecentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
