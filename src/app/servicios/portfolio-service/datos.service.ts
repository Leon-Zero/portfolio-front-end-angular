import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Datum } from 'src/assets/data/Data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/datos';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerData():Observable<Datum[]>{
    return this.http.get<Datum[]>(this.url)
  }
  IdData(id: number): Observable<Datum>{
    return this.http.get<Datum>(`${this.url}/${id}`);
  }
  UpdateData(id: number, data:Object ): Observable<Datum>{
   return this.http.put<Datum>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }

//Creacion de unica vez, luego lo retire del codigo del formulario comentandolo
  SaveData(data:Object):Observable<Datum>{
    console.log(data);
    return this.http.post<Datum>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();  
      }))
  }

}
