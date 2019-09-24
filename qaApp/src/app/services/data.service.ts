import { Injectable } from '@angular/core';
import { from } from 'rxjs';

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
      email: "a@gmail.com",
      password: "123",
      education: {
        school: "Maharishi University of Management",
        main: {},
        secondary: {},
        degree: "",
        end: ""
      },
      work: {
        position: "Manager",
        company: "Nike",
        start: "",
        end: "",
        default: true
      },
      location: {
        location: "",
        start: "",
        end: ""
      },
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

  constructor() {}

  getUsers(){
    return from(this.userSample);
  }

  getUser(){
    return this.currentUser;
  }
  
  login(email:string, password:string){
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
