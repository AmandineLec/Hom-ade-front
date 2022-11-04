import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEstComponent } from './map-est.component';

describe('MapEstComponent', () => {
  let component: MapEstComponent;
  let fixture: ComponentFixture<MapEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
