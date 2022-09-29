import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable, pipe, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Portfolio, SkillSoft } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  private _refresh$ = new Subject<void>();
  private softUrl= 'http://localhost:8080/soft';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }  
  obtenerSoft():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.softUrl)
  }
  SaveSoft(data:Object):Observable<SkillSoft>{
    console.log(data);
    return this.http.post<SkillSoft>(this.softUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdSoft(id:SkillSoft): Observable<Object>{
    return this.http.get(`${this.softUrl}/${id}`);
  }
  UpdateSoft(id: number, data:Object ){
   return this.http.put(`${this.softUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteSoft(id:SkillSoft){
    return this.http.delete(`${this.softUrl}/${id}`)
  }  
}
