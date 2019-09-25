import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-most-recent',
  template: `
    <h6 class="inline">Profile</h6>
    <span class="fRight">
      <a class="subLink"><strong>Most Recent</strong></a> /
      <a [routerLink]="['/user/all-time']" class="subLink">All-Time View</a>
    </span>
    <hr>
    <div *ngFor="let q of questions" class="pb20">
      <h6 class="inline">{{ q.question }} </h6>
      <nz-tag [nzColor]="'#f50'" *ngFor="let tag of q.tags">{{ tag }}</nz-tag>
    </div>
  `,
  styles: []
})
export class MostRecentComponent implements OnInit {

  constructor(private dataService: DataService) {}

  private questions;

  ngOnInit(){
    this.dataService.getQuestions();
    this.questions = JSON.parse(localStorage.getItem("questions"));
  }

}
