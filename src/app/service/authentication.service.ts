import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { retry, catchError } from 'rxjs/operators';
import { Liga } from '../cuadrangular/liga';
import { Partido } from '../cuadrangular/partido';
import { Equipo } from '../cuadrangular/equipo';

@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {

    apiURL = 'http://localhost:8081/cuadrangular';
    constructor(private http: HttpClient) {
    }

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }  

      crearLiga(equipoRq): Observable<Liga> {
        return this.http.post<Liga>(this.apiURL + '/cargar/equipos', JSON.stringify(equipoRq), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }

      guardarResultado(Liga): Observable<Equipo> {
        return this.http.post<Equipo>(this.apiURL + '/guardar/puntos', JSON.stringify(Liga), this.httpOptions)
        .pipe(
          retry(0)
          //,catchError(this.handleError)
        )
        
      }
      
      handleError(error) {
        let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          window.alert(errorMessage);
          return throwError(errorMessage);
     }
  
}