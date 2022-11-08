import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Proyecto } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/proyecto';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.url)
  }
  SaveProyecto(data: Object):Observable<Proyecto>{
    console.log(data);
    return this.http.post<Proyecto>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdProyecto(id: number): Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.url}/${id}`);
  }
  UpdateProyecto(id: number, data: Object): Observable<Proyecto>{
   return this.http.put<Proyecto>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteProyecto(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }  
}
