import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  template: `
  <ngb-tabset type="pills">
  <ngb-tab title="Login">
    <ng-template ngbTabContent>
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" [ngModel]="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" [ngModel]="password" name="password" required>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="checkBox" [ngModel]="check" name="check">
          <label class="form-check-label" for="checkBox">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Login</button>
      </form>   
    </ng-template>
  </ngb-tab>
  <ngb-tab title="Signup">
    <ng-template ngbTabContent>
      <form #signupForm="ngForm" (ngSubmit)="onRegister(signupForm)">
        <div class="form-group">
          <label for="fname">Email address</label>
          <input type="email" class="form-control" id="fname" placeholder="Enter Firstname" [ngModel]="fname" name="firstname" required>
        </div>
        <div class="form-group">
          <label for="lname">Email address</label>
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
    </ng-template>
  </ngb-tab>
</ngb-tabset> 
  `
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(){}

  onSubmit(form){
    let user = this.dataService.login(form.value.email, form.value.password);
    console.log(user);
  }

  onRegister(form){
    this.dataService.signup({...form.value});
  }
}
