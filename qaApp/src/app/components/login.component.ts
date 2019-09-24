import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
      <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
        <div class="form-group">
          <label for="emailLogin">Email address</label>
          <input type="email" class="form-control" id="emailLogin" placeholder="Enter email" [ngModel]="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="passwordLogin">Password</label>
          <input type="password" class="form-control" id="passwordLogin" placeholder="Password" [ngModel]="password" name="password" required>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="checkBoxLogin" [ngModel]="check" name="check">
          <label class="form-check-label" for="checkBox">Remember me</label>
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="!loginForm.valid">Login</button>
      </form>
      <app-signup></app-signup>
  `
})
export class LoginComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(){}

  onSubmit(form){
    let user = this.dataService.login(form.value.email, form.value.password);
    if(user) this.router.navigate(['./user']);
  }
}
