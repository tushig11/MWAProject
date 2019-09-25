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
    _id:19,
    topic:'Angular',
    question: 'What is component?',
    tags: ['Angular'],
      answer:[{
        userID:'1',
        ans:'I guess it is the best practice in the software development since it is extremely easy and time efficient.',
        vote:[5,100,3,4]},
      {
        userID:'18',
        ans:'Its an idea of breaking large, complex software applications into a series of pre-built and easily developed, understood, and changeable software modules.',
        vote:[20,30,4]},
      {
        userID:'19',
        ans:'Example, if you have textboxes, dropdowns, checkboxes…etc in your page. We can write seperate components for these along with those functions. So that same component can be used in every other pages where we want that to appear.',
        vote:[5,4,20,30,4]}
    ]
  },
  {
    _id:20,
    topic:'NodeJS',
    question: 'How can I become an expert in AngularJS and NodeJS?',
    tags: ['NodeJS','AngularJS'],
    answer:[{
        userID:'20',
        ans:'Learn basics, Expert is one who knows basics very well than others :)',
        vote:[5,25,100,3,4]},
      {
        userID:'18',
        ans:'To become a Node.js developer it is enough to know only Node.js, but with front-end frameworks along with Node.js, makes you a badass JavaScript developer with the above-mentioned skills and tools to build all sorts of web applications.',
        vote:[5,4,20,30,4]}]
  },
];

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
  const data = this.QASample.filter(x=>x._id==qn)[0];
  if(data) return data.question;
  else return null;
}

showQAs(qn:number){
  const data = this.QASample.filter(x=>x._id==qn)[0];
  if(data) return data.answer.sort(this.sortByVote);
  else return null;
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
