import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingComponent } from './programing.component';

describe('ProgramingComponent', () => {
  let component: ProgramingComponent;
  let fixture: ComponentFixture<ProgramingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
