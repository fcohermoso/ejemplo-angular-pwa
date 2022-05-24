import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVendehumosComponent } from './nuevo-vendehumos.component';

describe('NuevoVendehumosComponent', () => {
  let component: NuevoVendehumosComponent;
  let fixture: ComponentFixture<NuevoVendehumosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoVendehumosComponent ]
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
});
