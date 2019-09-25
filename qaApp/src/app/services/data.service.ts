import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  userSample = [
    {
      firstname: "Gantushig",
      lastname: "Javkhlan",
      email: "tushig@gmail.com",
      password: "123"
    },
    {
      firstname: "Battushig",
      lastname: "Namsraidorj",
      email: "naya@gmail.com",
      password: "123"
    },
    {
      firstname: "Houssam",
      lastname: "Atif",
      email: "houssam@gmail.com",
      password: "123"
    }
  ]


  QASample = [{
    questionID:'1',
    category:'Angular',
    question: 'what is component?',
    tags: ['Angular','component'],
    answer:[{
      userID:'1',
      ans:'Component is bla bla bla ..........',
      comment:[{userID:5 ,comnt:'I like your explanation, thank you'},
               {userID:4 ,comnt:'but why we have .....?'},
               {userID:25 ,comnt:'good explanation but I have more clarification about ......'}],
      vote:[5,100,3,4],
      shares:[5,25,4,30,24]},
      {
        userID:'18',
        ans:'Comoponent is ..... you can find more information in this website .....',
        comment:[{userID:6 ,comnt:'comment num 1'},
                 {userID:7 ,comnt:'comment num 2'},
                 {userID:8 ,comnt:'comment num 3'},
                 {userID:10 ,comnt:'comment num 4'}],
        vote:[20,30,4],
        shares:[4,2,3]},
      {
        userID:'19',
        ans:'Answer num 3 :Comoponent is ..... you can find more information in this website .....',
        comment:[{userID:6 ,comnt:'comment num 1'},
                 {userID:7 ,comnt:'comment num 2'},
                 {userID:8 ,comnt:'comment num 3'},
                 {userID:10 ,comnt:'comment num 4'}],
        vote:[5,4,20,30,4],
        shares:[4,2,3]},
    ]
  },
  {
    questionID:'2',
    category:'NodeJS',
    question: 'what is NodeJS?',
    tags: ['NodeJS','backend'],
    answer:[{
      userID:'20',
      ans:'nodeJS is bla bla bla ..........',
      comment:[{userID:5 ,comnt:'I like your explanation, thank you'},
               {userID:4 ,comnt:'but why we have .....?'},
               {userID:25 ,comnt:'good explanation but I have more clarification about ......'}],
      vote:[5,25,100,3,4],
      shares:[5,25,4,30,24]},
      {
        userID:'18',
        ans:'NodeJS is ..... you can find more information in this website .....',
        comment:[{userID:6 ,comnt:'comment num 1'},
                 {userID:7 ,comnt:'comment num 2'},
                 {userID:8 ,comnt:'comment num 3'},
                 {userID:10 ,comnt:'comment num 4'}],
        vote:[5,4,20,30,4],
        shares:[4,2,3]},
    ]
  },

];


///////////////////////show the questions/////////////////////////
sortByVote(a,b){
  return b['vote'].length-a['vote'].length;
}

getQuestion(qn:number){
  return this.QASample[qn-1].question
}

showQAs(qn:number){
  return this.QASample[qn-1].answer.sort(this.sortByVote)
}

getQuestions(){
  return this.QASample;
}
///////////////////////************///////////////////////////////


  private currentUser: any;

  constructor() {}

  getUsers(){
    return from(this.userSample);
  }

  login(email:string, password:string){
    this.currentUser = this.userSample.filter( user => user.email === email && user.password === password );
    if(this.currentUser && this.currentUser.length > 0)
      return this.currentUser[0];
    else{
      this.currentUser = null;
      return null;
    }
      
  }

  signup(newUser:any){
    this.userSample = [ ...this.userSample, newUser ];
  }

  isLoggedIn() {
    if(this.currentUser)
      return this.currentUser[0];
    else
      return null;
  }
}
