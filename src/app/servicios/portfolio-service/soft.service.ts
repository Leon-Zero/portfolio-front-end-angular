import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SkillSoft } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  private _refresh$ = new Subject<void>();
  private softUrl= 'https://portfolio-leonardo-hidalgo.herokuapp.com/soft';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }  
  obtenerSoft():Observable<SkillSoft[]>{
    return this.http.get<SkillSoft[]>(this.softUrl)
  }
  SaveSoft(data:Object):Observable<SkillSoft>{
    console.log(data);
    return this.http.post<SkillSoft>(this.softUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdSoft(id: number): Observable<SkillSoft>{
    return this.http.get<SkillSoft>(`${this.softUrl}/${id}`);
  }
  UpdateSoft(id: number, data:Object): Observable<SkillSoft>{
   return this.http.put<SkillSoft>(`${this.softUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteSoft(id: number){
    return this.http.delete(`${this.softUrl}/${id}`)
  }  
}
