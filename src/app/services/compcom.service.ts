import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompcomService {

url="https://jsonplaceholder.typicode.com/todos";
  constructor(public _http:HttpClient) { }

getData(id:number):Observable<any>{
  return this._http.get<any>(`${this.url}?id=${id}`);
}

}
