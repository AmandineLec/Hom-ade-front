import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSudOuestComponent } from './map-sud-ouest.component';

describe('MapSudOuestComponent', () => {
  let component: MapSudOuestComponent;
  let fixture: ComponentFixture<MapSudOuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSudOuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSudOuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
