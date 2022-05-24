import { Component, OnInit } from '@angular/core';
import { VendehumosService } from '../services/vendehumos.service';

@Component({
  selector: 'app-lista-vendehumos',
  templateUrl: './lista-vendehumos.component.html',
  styleUrls: ['./lista-vendehumos.component.css']
})
export class ListaVendehumosComponent implements OnInit {

  vendehumos: Array<any> = [];

  constructor(
    private vendehumosService: VendehumosService
  ) { }

  ngOnInit(): void {
    this.vendehumosService.getVendehumos()
      .subscribe((vendehumos: Array<any>) => {
        this.vendehumos = vendehumos;
      });
  }

  votar(vendehumo: any): void {
    const { id, numVotos } = vendehumo;
    this.vendehumosService.updateVotosVendehumos(id, (numVotos + 1))
      .subscribe((vendehumoActualizado: any) => {
        this.vendehumos = this.vendehumos.map((vendehumo) => {
          if(vendehumoActualizado.id === vendehumo.id) {
            return vendehumoActualizado;
          } else {
            return vendehumo;
          }
        })
      })
  }

}
