import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  inputValue:String;
  gutter:number = 40;
  panels: any;
  ans:string;
  question: any;
  constructor(private dataService : DataService, private route: ActivatedRoute) {}
  

  ngOnInit(){
    this.panels = this.dataService.getPanels();
    this.loadData(this.route.snapshot.params.id);
  }

  loadData(pi: number): void {
    this.question = this.dataService.getQuestion(pi);
    console.log(this.question);
  }

  go(){
     let mem = {
      ans:this.inputValue,
      vote:[]
    }
    this.dataService.addAnswer(mem, this.route.snapshot.params.id);
    this.question.answer.push(mem);
    this.inputValue = null;
  }

  addvote(vote:any){
      vote.push(1);
  }

}
