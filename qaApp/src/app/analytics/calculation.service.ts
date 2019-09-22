import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  randomUserCount: number = 10;
  constructor( private http: HttpClient) { }

  getOnlineData() {

    this.http.get(`https://randomuser.me/api/?results=${this.randomUserCount}`).pipe(
      map((res:any) => res.results)).subscribe((data:any) => {
      
      for (let i = 0; i < data.length; i++){
        let key = 'user-' + i;
        let value = JSON.stringify(data[i])
        localStorage.setItem(key, value);
        //console.log(key, value); 
      }
    });

  }

  getCachedData(): Observable<Object[]> {
    let users = [];
    for (let i = 0; i < this.randomUserCount; i++){
      let key = localStorage.key(i);
      users.push(JSON.parse(localStorage.getItem(key)))
    }
    return of(users);
  }

  
  getObservableData(){
    return this.http.get('https://randomuser.me/api/?results=10');
  }


}
