import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedarrComponent } from './nestedarr.component';

describe('NestedarrComponent', () => {
  let component: NestedarrComponent;
  let fixture: ComponentFixture<NestedarrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NestedarrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedarrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
