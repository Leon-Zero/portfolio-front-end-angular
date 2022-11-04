import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Contacto } from 'src/assets/data/Data';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private _refresh$ = new Subject<void>();
  //private contactoUrl= 'https://portfolio-leonardo-hidalgo.herokuapp.com/contacto';
  private contactoUrl= 'http://localhost:8080/contacto';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>(this.contactoUrl)
  }
  SaveContacto(data:Object):Observable<Contacto>{
    console.log(data);
    return this.http.post<Contacto>(this.contactoUrl, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdContacto(id: number): Observable<Contacto>{
    return this.http.get<Contacto>(`${this.contactoUrl}/${id}`);
  }
  UpdateContacto(id: number, data:Object): Observable<Contacto>{
   return this.http.put<Contacto>(`${this.contactoUrl}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteContacto(id: number){
    return this.http.delete(`${this.contactoUrl}/${id}`)
  }

}
