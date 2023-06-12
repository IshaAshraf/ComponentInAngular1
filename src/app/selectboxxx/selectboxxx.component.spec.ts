import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectboxxxComponent } from './selectboxxx.component';

describe('SelectboxxxComponent', () => {
  let component: SelectboxxxComponent;
  let fixture: ComponentFixture<SelectboxxxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectboxxxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectboxxxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
