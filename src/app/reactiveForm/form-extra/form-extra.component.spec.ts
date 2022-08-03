import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExtraComponent } from './form-extra.component';

describe('FormExtraComponent', () => {
  let component: FormExtraComponent;
  let fixture: ComponentFixture<FormExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
