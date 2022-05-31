import { TestBed } from '@angular/core/testing';

import { SusbcripcionesService } from './susbcripciones.service';

xdescribe('SusbcripcionesService', () => {
  let service: SusbcripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SusbcripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
