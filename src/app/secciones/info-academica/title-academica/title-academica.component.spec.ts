import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAcademicaComponent } from './title-academica.component';

describe('TitleAcademicaComponent', () => {
  let component: TitleAcademicaComponent;
  let fixture: ComponentFixture<TitleAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAcademicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
