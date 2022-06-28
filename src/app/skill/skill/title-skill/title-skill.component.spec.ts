import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSkillComponent } from './title-skill.component';

describe('TitleSkillComponent', () => {
  let component: TitleSkillComponent;
  let fixture: ComponentFixture<TitleSkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleSkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
