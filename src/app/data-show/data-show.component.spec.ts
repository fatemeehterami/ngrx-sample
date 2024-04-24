import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataShowComponent } from './data-show.component';

describe('DataShowComponent', () => {
  let component: DataShowComponent;
  let fixture: ComponentFixture<DataShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
