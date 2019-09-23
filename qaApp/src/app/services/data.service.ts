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
