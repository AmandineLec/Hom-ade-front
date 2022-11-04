import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSudEstComponent } from './map-sud-est.component';

describe('MapSudEstComponent', () => {
  let component: MapSudEstComponent;
  let fixture: ComponentFixture<MapSudEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSudEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSudEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
