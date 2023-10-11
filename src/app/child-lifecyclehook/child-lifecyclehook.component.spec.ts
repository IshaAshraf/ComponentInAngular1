import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLifecyclehookComponent } from './child-lifecyclehook.component';

describe('ChildLifecyclehookComponent', () => {
  let component: ChildLifecyclehookComponent;
  let fixture: ComponentFixture<ChildLifecyclehookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLifecyclehookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLifecyclehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
