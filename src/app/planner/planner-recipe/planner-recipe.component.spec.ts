import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerRecipeComponent } from './planner-recipe.component';

describe('PlannerRecipeComponent', () => {
  let component: PlannerRecipeComponent;
  let fixture: ComponentFixture<PlannerRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
