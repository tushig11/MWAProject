import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  template:`
  <div nz-row>
    <div nz-col nzSpan="10" >
      <form #signupForm="ngForm" (ngSubmit)="onRegister(signupForm)">
        <div class="form-group">
          <label for="fname">Firstname</label>
          <input type="email" class="form-control" id="fname" placeholder="Enter Firstname" [ngModel]="fname" name="firstname" required>
        </div>
        <div class="form-group">
          <label for="lname">Lastname</label>
          <input type="email" class="form-control" id="lname" placeholder="Enter Lastname" [ngModel]="lname" name="lastname" required>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" [ngModel]="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" [ngModel]="password" name="password" required>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!signupForm.valid">Sign up</button>
      </form>
    </div>
  </div> 
  `
})
export class SignupComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
  }

  onRegister(form){
    this.dataService.signup({...form.value});
    this.router.navigate(['./user']);
  }
}
