import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  gutter: number = 40;
  data:any[]=[]
  panels: any;

  constructor(private dataService : DataService, private router: Router) {
    this.dataService.getQuestions();
    this.data = JSON.parse(localStorage.getItem('questions'));
  }

  ngOnInit(){
    this.panels = this.dataService.getPanels();
  }

}

