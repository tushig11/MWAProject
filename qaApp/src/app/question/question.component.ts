import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  data:any[]=[]

  constructor(private dataService : DataService) {}

  ngOnInit(){
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data = this.dataService.getQuestions();
  }
  

}

