import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Academica, ExtraCurricular } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/academica';
  private urlExtra = environment.url + '/extracurricular';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  } 
  obtenerAcademica(): Observable<Academica[]>{
    return this.http.get<Academica[]>(this.url)
  }
  obtenerExtra(): Observable<ExtraCurricular[]>{
    return this.http.get<ExtraCurricular[]>(this.urlExtra)
  }
  SaveAcademica(data:Object): Observable<Academica>{
    console.log(data);
    return this.http.post<Academica>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveExtra(data:Object): Observable<ExtraCurricular>{
    console.log(data);
    return this.http.post<ExtraCurricular>(this.urlExtra, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdAcademica(id: number): Observable<Academica>{
    return this.http.get<Academica>(`${this.url}/${id}`);
  }
  UpdateAcademica(id: number, data:Object): Observable<Academica>{
   return this.http.put<Academica>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdExtra(id: number): Observable<ExtraCurricular>{
    return this.http.get<ExtraCurricular>(`${this.urlExtra}/${id}`);
  }
  UpdateExtra(id: number, data:Object): Observable<ExtraCurricular>{
   return this.http.put<ExtraCurricular>(`${this.urlExtra}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteAcademica(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }
  DeleteExtra(id: number){
    return this.http.delete(`${this.urlExtra}/${id}`)
  }
}
