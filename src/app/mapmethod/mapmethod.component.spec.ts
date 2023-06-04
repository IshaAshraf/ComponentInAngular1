import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapmethodComponent } from './mapmethod.component';

describe('MapmethodComponent', () => {
  let component: MapmethodComponent;
  let fixture: ComponentFixture<MapmethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapmethodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
