import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNordComponent } from './map-nord.component';

describe('MapNordComponent', () => {
  let component: MapNordComponent;
  let fixture: ComponentFixture<MapNordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapNordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
