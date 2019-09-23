import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  question = {
    questionID:'1',
    category:'',
    question: 'What is your question my dear?',
    tags: [''],
    //datarole="tagsinput"
    // password: 'testpassword',
    // gender: 'male'
  };

  // genders = [
  //   'male',
  //   'female'
  // ];

  onSubmit(form) {
    console.log(form.value);
  }

  constructor() { }

  ngOnInit() {
      // category:['WEB','Database','Desktop Application','cloud','Network','Operating system'],
      // Question:'',
      // Tag:''

  }

}

