import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'qaApp';

  OnInit(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('token');
    localStorage.removeItem('questions');
  }
}
