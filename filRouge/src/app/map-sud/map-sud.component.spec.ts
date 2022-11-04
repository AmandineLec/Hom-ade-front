import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapSudComponent } from './map-sud.component';

describe('MapSudComponent', () => {
  let component: MapSudComponent;
  let fixture: ComponentFixture<MapSudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapSudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapSudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
