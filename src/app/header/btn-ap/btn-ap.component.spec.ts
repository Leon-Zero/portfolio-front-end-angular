import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAPComponent } from './btn-ap.component';

describe('BtnAPComponent', () => {
  let component: BtnAPComponent;
  let fixture: ComponentFixture<BtnAPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
