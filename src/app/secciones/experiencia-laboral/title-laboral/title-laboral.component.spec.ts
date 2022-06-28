import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleLaboralComponent } from './title-laboral.component';

describe('TitleLaboralComponent', () => {
  let component: TitleLaboralComponent;
  let fixture: ComponentFixture<TitleLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
