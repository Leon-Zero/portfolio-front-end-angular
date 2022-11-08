import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Job } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/jobs';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerJob():Observable<Job[]>{
    return this.http.get<Job[]>(this.url)
  }
  SaveJob(data:Object):Observable<Job>{
    console.log(data);
    return this.http.post<Job>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdJob(id: number): Observable<Job>{
    return this.http.get<Job>(`${this.url}/${id}`);
  }
  UpdateJob(id: number, data:Object): Observable<Job>{
   return this.http.put<Job>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteJob(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }
}
