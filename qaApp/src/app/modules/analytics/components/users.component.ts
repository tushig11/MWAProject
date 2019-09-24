import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <h2>&nbsp;Tags</h2>
    </div>  
  </div>
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <p></p>
    </div>  
  </div>
  <div nz-row [nzGutter]="gutterSize">
  <div nz-col [nzSpan]="12">
    
  </div>  
  <div nz-col [nzSpan]="12">
    <nz-button-group class="fRight">
      <button nz-button nzType="primary" >Popular</button>
      <button nz-button nzType="default" >New</button>
      <button nz-button nzType="default">Name</button>
    </nz-button-group>
  </div>
  </div>
  <div class="gutter-example">
    <div nz-row [nzGutter]="gutter">
      <div nz-col class="gutter-row" [nzSpan]="24 / count" *ngFor="let i of generateArray(count)">
        <div class="grid-config">
          <div>
            <nz-avatar [nzShape]="'square'" [nzSize]="64" [nzIcon]="'user'"></nz-avatar>
          </div>

        
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
    `
    .grid-config {
      border: 1px solid gray;
      height: 120px;
      line-height: 120px;
      font-size: 13px;
    }
    `
  ]
})
export class UsersComponent implements OnInit {
  gutter = 16;
  count = 3;
  marksGutter = {
    8: 8,
    16: 16,
    24: 24,
    32: 32,
    40: 40,
    48: 48
  };
  marksCount = {
    2: 2,
    3: 3,
    4: 4,
    6: 6,
    8: 8,
    12: 12
  };
 
  constructor() { }

  ngOnInit() {
  }

  generateArray(value: number): number[] {
    return new Array(value);
  }
}
