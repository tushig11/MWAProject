import { Component, OnInit } from '@angular/core';
import {QuestionComponent} from '../question/question.component'

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  answers={
    question.questionID:'',
    answer:[{userID:'',ans:'',comment:[''],vote:'',shares:''}]
  }

  constructor() { }

  ngOnInit() {
  }

}
