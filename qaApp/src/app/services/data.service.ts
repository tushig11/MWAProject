import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const apiUrl:string = 'http://localhost:4300';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userSample = [
    {
      __id: 1,
      image: "",
      firstname: "Gantushig",
      lastname: "Javkhlan",
      email: "a@a.com",
      password: "123",
      biography: "",
      followers: [],
      following: [],
      questions: [],
      answers: [],
      reputation: 10000
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

  private currentUser: any;

  constructor(private http: HttpClient) {}

  getUsers(){
    return from(this.userSample);
  }

  getUser(){
    if(this.currentUser)
      return this.currentUser[0];
    else
      return null;
  }

  
  login(email:string, password:string){
    this.http.post(apiUrl+'/login', {
      email: email,
      password: password
    }).subscribe(
      data => {
      localStorage.setItem("token", data.toString());
    })
       
    this.currentUser = this.userSample.filter( user => user.email === email && user.password === password );
    if(this.currentUser && this.currentUser.length > 0){
      localStorage.setItem("currentUser", this.currentUser[0].email);
      return this.currentUser[0];
    }
    else{
      this.currentUser = null;
      return null;
    } 
  }

  logout(){
    this.currentUser = null;
    localStorage.removeItem("currentUser");
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
