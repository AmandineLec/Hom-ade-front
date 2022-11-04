import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuJeuComponent } from './menu-jeu.component';

describe('MenuJeuComponent', () => {
  let component: MenuJeuComponent;
  let fixture: ComponentFixture<MenuJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
