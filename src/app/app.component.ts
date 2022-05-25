import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { SusbcripcionesService } from './services/susbcripciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplo-angular-pwa';

  constructor(
    private swPush: SwPush,
    private suscripcioneService: SusbcripcionesService
  ) {

    swPush.requestSubscription({
      serverPublicKey: 'BK13YOZMMo1JGebOMuXceX3KluG2ptGTv_lFoyS7XUsz6iStukxLdskm5RqgHdpisGrk6vunWT2SsWFhcCrb8Q4'
    }).then((subscription: PushSubscription) => {
      console.log(subscription);
      this.suscripcioneService.guardarSuscripcion(subscription)
        .subscribe(() => {
          console.log('Suscripción creada, prepárate');
        });
    });


  }


}
