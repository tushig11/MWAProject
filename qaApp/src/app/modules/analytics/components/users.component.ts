import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../../../services/calculation.service';

@Component({
  selector: 'app-users',
  template: `
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="24">
      <h2>Users</h2>
    </div>  
  </div>
  <div nz-row [nzGutter]="gutterSize">
    <div nz-col [nzSpan]="6">
      <nz-input-group [nzSuffix]="suffixIconSearch">
        <input type="text" nz-input placeholder="input search text" />
      </nz-input-group>
      <ng-template #suffixIconSearch>
        <i nz-icon nzType="search"></i>
      </ng-template>
    </div>  
    <div nz-col [nzSpan]="18">
      <nz-button-group class="fRight">
        <button nz-button nzType="primary">Reputation</button>
        <button nz-button nzType="default">New</button>
        <button nz-button nzType="default">Answers</button>
        <button nz-button nzType="default">Questions</button>
      </nz-button-group>
    </div>
  </div>
  <br/>
  <nz-list [nzDataSource]="topusers" [nzRenderItem]="item" [nzGrid]="{ gutter: 16, xs: 24, sm: 12, md: 8, lg: 8, xl: 8 }">
  <ng-template #item let-item>
    <nz-list-item [nzContent]="nzContent">
      <ng-template #nzContent>
       
        <nz-card [nzTitle]="item.name"  [nzExtra]="extraTemplate">
     

        <ul>
          <li><b>Reputation</b>: {{item.reputation}}</li> 
          <li><b>Questions</b>: {{item.questionCount}}</li>
          <li><b>Answers</b>: {{item.answerCount}}</li>
        </ul>
        </nz-card>
        <ng-template #extraTemplate>
        <nz-avatar [nzSize]="small" nzIcon="user"></nz-avatar>
        </ng-template>

      </ng-template>
    </nz-list-item>
  </ng-template>
</nz-list>
  `,
  styles: []
})
export class UsersComponent implements OnInit {
  topusers;
 
  constructor(private calcService:CalculationService) { }

  ngOnInit() {
    //this.users$ = this.calcService.getTopUsers();
    this.calcService.getTopUsers()
    .subscribe(res => { this.topusers = res; 
      console.log(this.topusers);
    });
  }


}
