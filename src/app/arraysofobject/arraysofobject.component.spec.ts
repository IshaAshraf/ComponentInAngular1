import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArraysofobjectComponent } from './arraysofobject.component';

describe('ArraysofobjectComponent', () => {
  let component: ArraysofobjectComponent;
  let fixture: ComponentFixture<ArraysofobjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArraysofobjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArraysofobjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
