import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListaVendehumosComponent } from './lista-vendehumos.component';
import { VendehumosService } from '../services/vendehumos.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('ListaVendehumosComponent', () => {
  let component: ListaVendehumosComponent;
  let fixture: ComponentFixture<ListaVendehumosComponent>;
  let mockVendehumosService: jasmine.SpyObj<VendehumosService>;

  beforeEach(async () => {
    mockVendehumosService =
      jasmine.createSpyObj(VendehumosService, [ 'getVendehumos', 'updateVotosVendehumo']);

    await TestBed.configureTestingModule({
      declarations: [ ListaVendehumosComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: VendehumosService, useValue: mockVendehumosService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendehumosComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería de pintar un div por cada vendehumos de la lista', () => {
    const mockVendehumos = [
      {
        id: 0,
        nombre: "xxx",
        descripcion: "",
        labels: ["a"],
        numVotos: 39
      },
      {
        id: 1,
        nombre: "zzz",
        descripcion: "",
        labels: ["b"],
        numVotos: 40
      }
    ];

    mockVendehumosService.getVendehumos.and.returnValue(of(mockVendehumos));

    fixture.detectChanges();

    const listaDivs = fixture.debugElement.queryAll(By.css('div'));

    expect(listaDivs).toHaveSize(2);



  });

});
