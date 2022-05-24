import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendehumosService {

  private URL: string = 'http://localhost:3000/vendehumos';

  constructor(
    private http: HttpClient
  ) { }

  getVendehumos(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  createVendehumos(vendehumos: any): Observable<any> {
    return this.http.post(this.URL, vendehumos);
  }

  updateVotosVendehumos(vendehumosId: number, numVotos: number): Observable<any> {
    return this.http.patch(`${this.URL}/${vendehumosId}`, { numVotos });
  }

}
