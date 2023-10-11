import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputautoComponent } from './inputauto.component';

describe('InputautoComponent', () => {
  let component: InputautoComponent;
  let fixture: ComponentFixture<InputautoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputautoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
