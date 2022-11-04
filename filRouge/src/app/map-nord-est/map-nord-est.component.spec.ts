import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNordEstComponent } from './map-nord-est.component';

describe('MapNordEstComponent', () => {
  let component: MapNordEstComponent;
  let fixture: ComponentFixture<MapNordEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNordEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapNordEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
