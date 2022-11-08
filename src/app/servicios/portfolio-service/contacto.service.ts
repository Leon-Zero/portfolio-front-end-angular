import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Contacto } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/contacto';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.url)
  }
  SaveContacto(data:Object):Observable<Contacto>{
    console.log(data);
    return this.http.post<Contacto>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdContacto(id: number): Observable<Contacto>{
    return this.http.get<Contacto>(`${this.url}/${id}`);
  }
  UpdateContacto(id: number, data:Object): Observable<Contacto>{
   return this.http.put<Contacto>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteContacto(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }

}
