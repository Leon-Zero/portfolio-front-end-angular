import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Proyecto } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _refresh$ = new Subject<void>();
  //private proyectoUrl= 'https://portfolio-leonardo-hidalgo.herokuapp.com/proyecto';
  private proyectoUrl= 'http://localhost:8080/proyecto';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.proyectoUrl)
  }
  SaveProyecto(data: Object):Observable<Proyecto>{
    console.log(data);
    return this.http.post<Proyecto>(this.proyectoUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdProyecto(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.proyectoUrl}/${id}`);
  }
  UpdateProyecto(id: number, data: Object): Observable<Proyecto>{
   return this.http.put<Proyecto>(`${this.proyectoUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteProyecto(id: number){
    return this.http.delete(`${this.proyectoUrl}/${id}`)
  }  
}
