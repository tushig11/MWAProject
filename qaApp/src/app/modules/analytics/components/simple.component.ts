import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
  <div nz-row [nzAlign]="middle" [nzGutter]="24">
  <div nz-col nzSpan="14">
  </div>
  <div nz-col nzSpan="5">
 
    <nz-button-group>
    <button nz-button nzType="primary" disabled>L</button>
    <button nz-button nzType="default" disabled>M</button>
    <button nz-button nzType="default">M</button>
    <button nz-button nzType="dashed" disabled>R</button>
     </nz-button-group>
  
  </div>

</div>
<div nz-row [nzAlign]="middle" [nzGutter]="24">
  <div nz-col nzSpan="12">
    <!-- Top Users -->
    <ul *ngIf="(users$ | async)?.length; else loading">
      <li *ngFor="let user of (users$ | async)">{{user.name}} {{user.reputation}}</li> 
    </ul>
  </div>
  <div nz-col nzSpan="12">  
    <!-- Top Tags -->
    <ul *ngIf="(tags$ | async)?.length; else loading">
      <li *ngFor="let tag of (tags$ | async)">{{tag.name}} {{tag.count}}</li> 
    </ul>
  </div>
</div>

<div nz-row [nzAlign]="middle" [nzGutter]="24">
  <div nz-col nzSpan="12">  
    <!-- Reserved -->

    <nz-avatar [nzSize]="130" nzIcon="user"></nz-avatar>
    <h6>Summary Statistics</h6>
     <!-- <button (click)="testService()">User Profile</button> -->
     <ng-template #loading>
     <div>Waiting ... (Click Any Button)</div>
   </ng-template>
  </div>
  <div nz-col nzSpan="12">
      <!-- Selected User Statistics -->
      <div *ngIf="userinfo">
        <h2> {{userinfo.name}}</h2>
        <ul>
          <li><b>Reputation</b>: {{userinfo.reputation}}</li> 
          <li><b>Questions</b>: {{userinfo.questionCount}}</li>
          <li><b>Answers</b>: {{userinfo.answerCount}}</li>
        </ul>
        <ul *ngIf="(userinfo.mostVotedQuestions)?.length"> <b>Most Voted Questions:</b> 
          <li *ngFor="let question of userinfo.mostVotedQuestions">{{question.vote}} - {{question.title}}</li> 
        </ul> 
        <ul *ngIf="(userinfo.mostVotedAnswers)?.length"> <b>Most Voted Answers:</b> 
          <li *ngFor="let answer of userinfo.mostVotedAnswers">{{answer.vote}} - {{answer.title}}</li> 
        </ul> 
        <ul *ngIf="(userinfo.mostUsedTags)?.length"> <b>Most Used Tags:</b> 
          <li *ngFor="let tag of userinfo.mostUsedTags">{{tag.vote}} - {{tag.title}}</li> 
        </ul> 
      </div>
  </div>
</div>

  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
