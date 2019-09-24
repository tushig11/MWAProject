import { DataService } from './../../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent{

  numberOfFollowers: number = 4;
  gutterSize: number = 30;
  user: any;
  
  constructor(private dataService: DataService){}

  ngDoCheck(){
    this.user = this.dataService.getUser();
  }

}
