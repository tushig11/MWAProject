import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  data:any=[]
  ans:string;
  question:string;
  constructor(private dataService : DataService, private route: ActivatedRoute) {}

  ngOnInit(){
    var id = this.route.snapshot.params.id;
    this.loadData(id);
  }

  loadData(pi: number): void {
    this.data.push(this.dataService.showQAs(pi));
    this.question=this.dataService.getQuestion(pi);
  }

  go(form){
     let mem={
      userID:'22',
      ans:form.value.answer,
      comment:[],
      vote:[],
      shares:[]}
     
     this.data[0].push(mem)
  }

  addvote(vote){
      vote.push(Math.random())
  }


}
