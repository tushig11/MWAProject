import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  template: `

  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="12">
      <h2>&nbsp;Tags</h2>
    </div>  
    <div nz-col [nzSpan]="12">
      <nz-button-group class="fRight">
        <button nz-button nzType="primary" >Popular</button>
        <button nz-button nzType="default" >New</button>
        <button nz-button nzType="default">Name</button>
      </nz-button-group>
    </div>
  </div>
  <br/>
  <div style="background: #ECECEC;padding:30px;">
  <div nz-row [nzGutter]="8">
    <div nz-col [nzSpan]="8">
      <nz-card nzTitle="angular"  [nzExtra]="extraTemplate">
        <p>The web framework from Google.</p>
      </nz-card>
      <ng-template #extraTemplate>
      <a>100</a>
    </ng-template>
    </div>
    <div nz-col [nzSpan]="8">
      <nz-card nzTitle="mongodb">
        <p>Card content</p>
      </nz-card>
    </div>
    <div nz-col [nzSpan]="8">
      <nz-card nzTitle="nodejs">
        <p>Card content</p>
      </nz-card>
    </div>
  </div>
</div>

  `,
  styles: []
})
export class TagsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
