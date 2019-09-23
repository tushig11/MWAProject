import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe, of } from 'rxjs';
import { map, filter, take, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  randomUserCount: number = 20;
  constructor( private http: HttpClient) { }

  getObservableData(param:string) {
    return this.http.get(`http://localhost:3000/${param}/`);
    //return this.http.get('https://randomuser.me/api/?results=10');
  }

/*
  getOnlineData() {
    this.http.get(`https://randomuser.me/api/?results=${this.randomUserCount}`).pipe(
       map((res:any) => res.results.filter(x=>x.gender=="male"))
      )   
      .subscribe((data:any) => {
        console.log(data)
        localStorage.clear();
        for (let i = 0; i < data.length; i++){
          let key = 'user-' + i;
          let value = JSON.stringify(data[i])
          localStorage.setItem(key, value);
         // console.log(key); 
        }
    });

  }

  getCachedData(): Observable<Object[]> {
    let users = [];
    console.log(localStorage.length);
    for (let i = 0; i < 7; i++){
      let key = localStorage.key(i);
      users.push(JSON.parse(localStorage.getItem(key)))
    }
    return of(users);
  }

*/
}
