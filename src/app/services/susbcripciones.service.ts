import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SusbcripcionesService {

  constructor(
    private http: HttpClient
  ) { }

  private URL: string = 'http://localhost:3000/suscripciones';


  guardarSuscripcion( suscripcion: PushSubscription) {
    return this.http.post(  this.URL, suscripcion);
  }
}
