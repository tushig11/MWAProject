import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalculationService } from '../../../services/calculation.service';


@Component({
  selector: 'app-dashboard',
  template: `
    <p>
      My Dashboard works!
    </p>
    <button (click)="testService()">User Profile</button>
   
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

    <hr/>
    <!-- Top Tags -->
    <button (click)="fetchTags()">Top Tags</button>
    <ul *ngIf="(tags$ | async)?.length; else loading">
      <li *ngFor="let tag of (tags$ | async)">{{tag.name}} {{tag.count}}</li> 
    </ul>
    
    <!-- Top Users -->
    <button (click)="fetchUsers()">Users</button>
    <ul *ngIf="(users$ | async)?.length; else loading">
      <li *ngFor="let user of (users$ | async)">{{user.name}} {{user.reputation}}</li> 
    </ul>
    


    <ng-template #loading>
    <div>Waiting ... (Click Any Button)</div>
    </ng-template>
  


  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  userinfo;
  tags$;
  users$;

  constructor(private calcService: CalculationService){}

  testService() {
    this.calcService.getUserAnalytics(2)
      .subscribe(userinfo => this.userinfo = userinfo);
  }

  fetchTags() {
    this.tags$ = this.calcService.getTopTags();
  }
  
  fetchUsers() {
    this.users$ = this.calcService.getTopUsers();
    
    //this.calcService.getOnlineData();
    //this.users$ = this.calcService.getCachedData();

  }

  ngOnInit() {
  }

}