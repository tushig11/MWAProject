import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const apiUrl:string = 'http://localhost:4300';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentUser: any;

  constructor(private http: HttpClient, private router: Router) {}

  async login(email:string, password:string){
    this.http.post(apiUrl+'/login', {
      email: email,
      password: password
    }).subscribe(
      data => {
        console.log();
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

  getQuestionsOfUser(){
    this.http.get(apiUrl+'/profile/questions').subscribe(
      data=>console.log(data)
    )
  }
}
