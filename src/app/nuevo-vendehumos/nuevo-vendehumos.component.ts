import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendehumosService } from '../services/vendehumos.service';

@Component({
  selector: 'app-nuevo-vendehumos',
  templateUrl: './nuevo-vendehumos.component.html',
  styleUrls: ['./nuevo-vendehumos.component.css']
})
export class NuevoVendehumosComponent implements OnInit {

  formVendehumo: FormGroup;

  constructor(
    private vendehumosService: VendehumosService,
    private router: Router
  ) {
    this.formVendehumo = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      numVotos: new FormControl(0, Validators.required),
      labels: new FormArray([]),
    });
  }

  ngOnInit(): void {
  }

  get labelsControls() {
    return (this.formVendehumo.get('labels') as FormArray).controls;
  }

  addLabel(event: any) {
    if(event.target.value.trim()) {
      const nuevoLabel = new FormControl(event.target.value.trim());

      (this.formVendehumo.get('labels') as FormArray).push(nuevoLabel);

      event.target.value = '';
    }

    return false;
  }

  guardar() {
    this.vendehumosService.createVendehumos(this.formVendehumo.value)
      .subscribe(() => {
        this.router.navigateByUrl('/');
      });
  }

}
