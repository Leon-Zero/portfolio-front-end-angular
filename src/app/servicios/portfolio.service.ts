import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5000/portfolio'
  constructor(private http:HttpClient) { }
  
  obtenerDatos():Observable<any>{
    return this.http.get(this.apiUrl)
  }
}
