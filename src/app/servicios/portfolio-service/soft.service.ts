import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SkillSoft } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SoftService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/soft';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }  
  obtenerSoft():Observable<SkillSoft[]>{
    return this.http.get<SkillSoft[]>(this.url)
  }
  SaveSoft(data:Object):Observable<SkillSoft>{
    console.log(data);
    return this.http.post<SkillSoft>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdSoft(id: number): Observable<SkillSoft>{
    return this.http.get<SkillSoft>(`${this.url}/${id}`);
  }
  UpdateSoft(id: number, data:Object): Observable<SkillSoft>{
   return this.http.put<SkillSoft>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteSoft(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }  
}
