import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannerRecipeListComponent } from './planner-recipe-list.component';

describe('PlannerRecipeListComponent', () => {
  let component: PlannerRecipeListComponent;
  let fixture: ComponentFixture<PlannerRecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannerRecipeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannerRecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
