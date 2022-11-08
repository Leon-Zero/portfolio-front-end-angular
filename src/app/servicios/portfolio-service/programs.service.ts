import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Skill } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/programas';

  constructor(private http:HttpClient) { }

get refresh$(){
  return this._refresh$;
}  
obtenerProgram():Observable<Skill[]>{
  return this.http.get<Skill[]>(this.url)
}
SaveProgram(data:Object):Observable<Skill>{
  console.log(data);
  return this.http.post<Skill>(this.url, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
}
IdProgram(id: number): Observable<Skill>{
  return this.http.get<Skill>(`${this.url}/${id}`);
}
UpdateProgram(id: number, data:Object): Observable<Skill>{
 return this.http.put<Skill>(`${this.url}/${id}`, data).pipe(
  tap(()=> { this._refresh$.next();        
  }))
}
DeleteProgram(id: number){
  return this.http.delete(`${this.url}/${id}`)
}
}
