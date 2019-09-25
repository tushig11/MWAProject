import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const apiUrl:string = 'http://localhost:4300';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

getHQuestions(){
  return this.QASample;
}
///////////////////////************///////////////////////////////


  private currentUser: any;
  private topics: any;
  private questions: any;
  private users: any;


  constructor(private http: HttpClient, private router: Router) {}

  async login(email:string, password:string){
    this.http.post(apiUrl+'/login', {
      email: email,
      password: password
    }).subscribe(
      data => {
        if(data.hasOwnProperty("message")){
          console.log(data['message']);
        }
        else{
          this.currentUser = data;
          localStorage.setItem("access_token", data.toString());
          this.router.navigate(['./user']);
        }
    })
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem("access_token");
    this.router.navigate(['']);
  }

  signup(newUser:any){
    this.http.post(apiUrl+'/register', newUser).subscribe(
      data => {
        localStorage.setItem("access_token", data.toString())
        this.router.navigate(['./user']);
      }
    )    
  }

  isLoggedIn(){
    if(this.currentUser)
      return this.currentUser;
    else
      return null;
  }

  getQuestions(){
    this.http.get(apiUrl+'/questions').subscribe(
      data=>{
        console.log(data);
        localStorage.setItem("questions", JSON.stringify(data))
      }
    )
  }

  getTopics(){
    this.http.get(apiUrl+'/topics').subscribe(
      data => {
        this.topics = data;
        localStorage.setItem("topics", JSON.stringify(data));
      }
    )
  }

  addQuestion(obj){
    this.http.post(apiUrl+'/questions/add', obj).subscribe(
      data => {
        console.log(data['message']);
        this.getQuestions();
      }
    )     
  }
}
