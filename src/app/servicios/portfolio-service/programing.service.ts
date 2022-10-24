import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Skill } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class ProgramingService {

  private _refresh$ = new Subject<void>();
  private programingUrl= 'https://portfolio-leonardo-hidalgo.herokuapp.com/programacion';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerPrograming():Observable<Skill[]>{
    return this.http.get<Skill[]>(this.programingUrl)
  }
  SavePrograming(data: Object):Observable<Skill>{
    console.log(data);
    return this.http.post<Skill>(this.programingUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdPrograming(id: number): Observable<Skill>{
    return this.http.get<Skill>(`${this.programingUrl}/${id}`);
  }
  UpdatePrograming(id: number, data: Object): Observable<Skill>{
   return this.http.put<Skill>(`${this.programingUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeletePrograming(id: number){
    return this.http.delete(`${this.programingUrl}/${id}`)
  }  
}
