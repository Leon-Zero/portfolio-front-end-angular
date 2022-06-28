import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBtnRSComponent } from './container-btn-rs.component';

describe('ContainerBtnRSComponent', () => {
  let component: ContainerBtnRSComponent;
  let fixture: ComponentFixture<ContainerBtnRSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerBtnRSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerBtnRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
