import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  template: `
  <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="" data-numposts="5"></div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  users$;

  constructor(private calcService: CalculationService){}

  fetchUsers() {
    //this.users$ = this.userService.getObservableData();
    this.users$ = this.calcService.getCachedData();

  }

  ngOnInit() {
    this.calcService.getOnlineData();
  }

}
