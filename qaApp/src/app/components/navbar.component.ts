import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <nav>
    <ul nz-menu nzMode="horizontal" class="p16">
        <li nz-menu-item>
          Q&A application
        </li>
        <li nz-menu-item nzSelected>
          <a [routerLink]="['']"><i nz-icon nzType="home"></i>Home</a>
        </li>
        <li nz-menu-item>
          <a [routerLink]="['statistics']"><i nz-icon nzType="form"></i>Statistics</a>
        </li>
        <li nz-menu-item class="fRight">
          <button nz-button nzType="primary" *ngIf="user; else addElse" [nzSize]="size" (click)="showModal()">Add Question</button>
        </li>
        <li nz-menu-item class="fRight" *ngIf="!user">
          <a [routerLink]="['signup']">Signup</a>
        </li>
        <li nz-menu-item class="fRight">
          <nz-avatar *ngIf="user; else elseBlock" nzIcon="user" nz-popover [nzContent]="contentTemplate" nzPlacement="bottom" [routerLink]="['user']"></nz-avatar>
          <ng-template #elseBlock><a [routerLink]="['login']">Login</a></ng-template>
        </li>
        <ng-template #contentTemplate>
          <a (click)="logout()">Logout</a>
        </ng-template>
    </ul>

    <nz-modal
      [(nzVisible)]="isVisible"
      nzTitle="Ask Question"
      (nzOnCancel)="handleCancel()"
      (nzOnOk)="handleOk()"
      [nzOkLoading]="isOkLoading"
    >
      <label>Question </label>
      <input nz-input [(ngModel)]="title" />    
      <br />
      <br />
      <label>Topic </label>
        <nz-select
          style="width: 200px; display:block;"
          nzShowSearch
          nzAllowClear
          nzPlaceHolder="Select a person"
          [(ngModel)]="topic"
          
          >
          <nz-option *ngFor="let top of topics" [nzLabel]="top" [nzValue]="top" ></nz-option>
        </nz-select>      
      <br />
      <label>Tags</label>
        <nz-select
        style="width: 100%"
        nzMode="multiple"
        nzPlaceHolder="Inserted are removed"
        [(ngModel)]="tags"
        >
        <ng-container *ngFor="let option of topics">
          <nz-option [nzLabel]="option" [nzValue]="option" *ngIf="isNotSelected(option)"></nz-option>
        </ng-container>
      </nz-select>
      <br />
    </nz-modal>    
  </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  private size: string = "medium";
  private user = null;

  //modal
  isVisible = false;
  isOkLoading = false;

  topics: [String]
  //question Modal
  title: String = " ";
  topic: String = " ";
  tags: string[] = [];

  constructor(private dataService: DataService) {}

  show: boolean = false;

  ngOnInit(){
    this.user = this.dataService.isLoggedIn();
    this.dataService.getTopics();
    this.topics = JSON.parse(localStorage.getItem("topics"));
  }

  ngDoCheck(){
    if(localStorage.getItem("access_token"))
      this.user = true;
    else
      this.user = false;
  }

  logout(){
    this.dataService.logout();
  }

  showModal(): void {
    this.isVisible = true;
  }

  isNotSelected(value: string): boolean {
    return this.tags.indexOf(value) === -1;
  }

  handleOk(): void {
    this.isVisible = false;
    let question = { question: this.title, topic: this.topic, tags: this.tags }
    this.dataService.addQuestion(question)
    this.title = "";
    this.topic = "";
    this.tags = [];
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
