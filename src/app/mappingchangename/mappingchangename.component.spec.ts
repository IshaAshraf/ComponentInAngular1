import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MappingchangenameComponent } from './mappingchangename.component';

describe('MappingchangenameComponent', () => {
  let component: MappingchangenameComponent;
  let fixture: ComponentFixture<MappingchangenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MappingchangenameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MappingchangenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
