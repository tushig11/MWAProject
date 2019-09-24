import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  data:any=[]
  question:string = "Why my question not displaying";

  constructor(private dataService : DataService) {}

  ngOnInit(){
    this.loadData(1);
  }

  loadData(pi: number): void {
    this.data.push(this.dataService.showQAs(0));
    console.log(this.data)
  }

}
