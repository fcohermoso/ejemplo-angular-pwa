import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { VendehumosService } from '../services/vendehumos.service';

import { NuevoVendehumosComponent } from './nuevo-vendehumos.component';

describe('NuevoVendehumosComponent', () => {
  let component: NuevoVendehumosComponent;
  let fixture: ComponentFixture<NuevoVendehumosComponent>;
  let mockVendehumosService: jasmine.SpyObj<VendehumosService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockVendehumosService = jasmine.createSpyObj(VendehumosService, [ 'createVendehumos']);

    mockRouter = jasmine.createSpyObj(Router, [ 'navigateByUrl']);

    await TestBed.configureTestingModule({
      declarations: [ NuevoVendehumosComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: VendehumosService, useValue: mockVendehumosService },
        { provide: Router, useValue: mockRouter }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoVendehumosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de navegar a / cuando se crea un vendehumos', () => {

    mockVendehumosService.createVendehumos.and.returnValue(of(true));

    component.formVendehumo.setValue({
      nombre: "v1",
      descripcion: "desc",
      labels: [],
      numVotos: 0
    });

    fixture.detectChanges();

    component.guardar();

    expect(mockRouter.navigateByUrl).toHaveBeenCalledOnceWith('/');

  });

});
