import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapCentreComponent } from './map-centre.component';

describe('MapCentreComponent', () => {
  let component: MapCentreComponent;
  let fixture: ComponentFixture<MapCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapCentreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
