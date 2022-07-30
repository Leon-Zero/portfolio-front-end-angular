import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { TASKS } from 'src/assets/data/mock-data';
import {Portfolio, Skill, SkillSoft} from 'src/assets/data/Data';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {


  private dataUrl = 'http://localhost:5000/data'
  private academicaUrl= 'http://localhost:5000/academica'
  private btnUrl= 'http://localhost:5000/btnRS'
  private jobUrl= 'http://localhost:5000/jobs'
  private programingUrl= 'http://localhost:5000/skillPrograming'
  private lenguageUrl= 'http://localhost:5000/skillLenguage'
  private programUrl= 'http://localhost:5000/skillPrograms'
  private softUrl= 'http://localhost:5000/skillSoft'

  constructor(private http:HttpClient) { }
  // metodos get a api de 
  // prueba json-server

  obtenerData():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.dataUrl)
  }
  obtenerAcademica():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.academicaUrl)
  }
  obtenerBtn():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.btnUrl)
  }
  obtenerJob():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.jobUrl)
  }
  obtenerPrograming():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.programingUrl)
  }
  obtenerLengua():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.lenguageUrl)
  }
  obtenerProgram():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.programUrl)
  }
  obtenerSoft():Observable<Portfolio>{
    return this.http.get<Portfolio>(this.softUrl)
  }

  DeleteSoft(id:SkillSoft){
    return this.http.delete(`${this.softUrl}/${id}`)
  }
  DeleteProgram(id:Skill){
    return this.http.delete(`${this.programUrl}/${id}`)
  }
  DeletePrograming(id:Skill){
    return this.http.delete(`${this.programingUrl}/${id}`)
  }
  DeleteLenguage(id:Skill){
    return this.http.delete(`${this.lenguageUrl}/${id}`)
  }

}
