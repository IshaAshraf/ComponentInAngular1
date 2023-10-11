import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLifecyclehookComponent } from './parent-lifecyclehook.component';

describe('ParentLifecyclehookComponent', () => {
  let component: ParentLifecyclehookComponent;
  let fixture: ComponentFixture<ParentLifecyclehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLifecyclehookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentLifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
