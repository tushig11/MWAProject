import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const apiUrl:string = 'http://localhost:4300';

@Injectable({
  providedIn: 'root'
})
export class DataService {

panels = [
  {
    active: true,
    name: 'Mongo DB',
    disabled: false,
    description: "MongoDB is a cross-platform and open-source document-oriented database, a kind of NoSQL database. As a NoSQL database, MongoDB shuns the relational database's table-based structure to adapt JSON-like documents that have dynamic schemas which it calls BSON."
  },
  {
    active: false,
    disabled: false,
    name: 'Express JS',
    description: "Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
  },
  {
    active: true,
    disabled: false,
    name: 'Angular JS',
    description: "AngularJS is a structural framework for dynamic web applications. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application components clearly and succinctly."
  },
  {
    active: false,
    disabled: true,
    name: 'Node JS',
    description: "Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications."
  }
];

///////////////////////show the questions/////////////////////////
sortByVote(a:any,b:any){
  return b['vote'].length-a['vote'].length;
}

getQuestion(qn:number){
  const questions = JSON.parse(localStorage.getItem("questions"));
  return questions.filter(x=>x._id==qn)[0];
}

showQAs(qn:number){
  const questions = JSON.parse(localStorage.getItem("questions"));
  const data = this.questions.filter(x=>x._id==qn)[0];
  console.log(data);
  return null;
}

addAnswer(obj:any, id:number){
  this.http.patch(apiUrl+'/answer/add', {qid:id, obj:obj}).subscribe(
    data => {
      console.log(data['message']);
      this.getQuestions();
    }
  )  
}

addVote(num:number, id:number){
  this.http.patch(apiUrl+'/vote/add', {qid:id, obj:num}).subscribe(
    data => {
      console.log(data['message']);
      this.getQuestions();
    }
  )  
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
          this.getTopics();
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
        if(data['message']) console.log(data);
        else localStorage.setItem("questions", JSON.stringify(data))
      }
    )
  }

  getTopics(){
    this.http.get(apiUrl+'/topics').subscribe(
      data => {
        this.topics = data;
        if(data['message']) console.log(data);
        else localStorage.setItem("topics", JSON.stringify(data));
      }
    )
  }

  getPanels(){
    return this.panels;
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
