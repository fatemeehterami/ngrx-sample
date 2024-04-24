import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputComponent } from './data-input.component';

describe('DataInputComponent', () => {
  let component: DataInputComponent;
  let fixture: ComponentFixture<DataInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
