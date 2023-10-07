import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesNavbarComponent } from './categories-navbar.component';

describe('CategoriesNavbarComponent', () => {
  let component: CategoriesNavbarComponent;
  let fixture: ComponentFixture<CategoriesNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesNavbarComponent]
    });
    fixture = TestBed.createComponent(CategoriesNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
