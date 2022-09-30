import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Job } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _refresh$ = new Subject<void>();
  private jobUrl= 'http://localhost:8080/jobs';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerJob():Observable<Job[]>{
    return this.http.get<Job[]>(this.jobUrl)
  }
  SaveJob(data:Object):Observable<Job>{
    console.log(data);
    return this.http.post<Job>(this.jobUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdJob(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.jobUrl}/${id}`);
  }
  UpdateJob(id: number, data:Object): Observable<Job>{
   return this.http.put<Job>(`${this.jobUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteJob(id: number){
    return this.http.delete(`${this.jobUrl}/${id}`)
  }
}
