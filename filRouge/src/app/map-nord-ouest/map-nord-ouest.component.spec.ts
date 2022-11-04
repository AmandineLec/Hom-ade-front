import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNordOuestComponent } from './map-nord-ouest.component';

describe('MapNordOuestComponent', () => {
  let component: MapNordOuestComponent;
  let fixture: ComponentFixture<MapNordOuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNordOuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapNordOuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
