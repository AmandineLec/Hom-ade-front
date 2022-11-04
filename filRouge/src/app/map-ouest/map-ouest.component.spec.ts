import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOuestComponent } from './map-ouest.component';

describe('MapOuestComponent', () => {
  let component: MapOuestComponent;
  let fixture: ComponentFixture<MapOuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapOuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapOuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
