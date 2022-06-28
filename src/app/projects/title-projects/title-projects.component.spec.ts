import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleProjectsComponent } from './title-projects.component';

describe('TitleProjectsComponent', () => {
  let component: TitleProjectsComponent;
  let fixture: ComponentFixture<TitleProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
