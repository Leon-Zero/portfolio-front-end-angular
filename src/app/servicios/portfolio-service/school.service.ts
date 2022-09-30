import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Academica, ExtraCurricular } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  private _refresh$ = new Subject<void>();
  private academicaUrl= 'http://localhost:8080/academica';
  private extraUrl= 'http://localhost:8080/extracurricular';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  } 
  obtenerAcademica(): Observable<Academica[]>{
    return this.http.get<Academica[]>(this.academicaUrl)
  }
  obtenerExtra(): Observable<ExtraCurricular[]>{
    return this.http.get<ExtraCurricular[]>(this.extraUrl)
  }
  SaveAcademica(data:Object): Observable<Academica>{
    console.log(data);
    return this.http.post<Academica>(this.academicaUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  SaveExtra(data:Object): Observable<ExtraCurricular>{
    console.log(data);
    return this.http.post<ExtraCurricular>(this.extraUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdAcademica(id: number): Observable<Academica>{
    return this.http.get<Academica>(`${this.academicaUrl}/${id}`);
  }
  UpdateAcademica(id: number, data:Object): Observable<Academica>{
   return this.http.put<Academica>(`${this.academicaUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  IdExtra(id: number): Observable<ExtraCurricular>{
    return this.http.get<ExtraCurricular>(`${this.extraUrl}/${id}`);
  }
  UpdateExtra(id: number, data:Object): Observable<ExtraCurricular>{
   return this.http.put<ExtraCurricular>(`${this.extraUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteAcademica(id: number){
    return this.http.delete(`${this.academicaUrl}/${id}`)
  }
  DeleteExtra(id: number){
    return this.http.delete(`${this.extraUrl}/${id}`)
  }
}
