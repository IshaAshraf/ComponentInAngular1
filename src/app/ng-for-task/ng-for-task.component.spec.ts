import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForTaskComponent } from './ng-for-task.component';

describe('NgForTaskComponent', () => {
  let component: NgForTaskComponent;
  let fixture: ComponentFixture<NgForTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgForTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgForTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
