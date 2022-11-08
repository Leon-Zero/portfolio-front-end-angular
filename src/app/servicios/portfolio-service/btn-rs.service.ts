import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BtnR } from 'src/assets/data/Data';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BtnRsService {

  private _refresh$ = new Subject<void>();
  private url = environment.url + '/btnrs';

  constructor(private http:HttpClient) { }

  get refresh$(){
    return this._refresh$;
  }
  obtenerBtn():Observable<BtnR[]>{
    return this.http.get<BtnR[]>(this.url)
  }
  SaveBtn(data:Object):Observable<BtnR>{
    console.log(data);
    return this.http.post<BtnR>(this.url, data).pipe(
      tap(()=> { this._refresh$.next();        
      }))
  }
  IdBtn(id: number): Observable<BtnR>{
    return this.http.get<BtnR>(`${this.url}/${id}`);
  }
  UpdateBtn(id: number, data:Object): Observable<BtnR>{
   return this.http.put<BtnR>(`${this.url}/${id}`, data).pipe(
    tap(()=> { this._refresh$.next();        
    }))
  }
  DeleteBtn(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }  
}
