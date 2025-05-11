import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreliminaryDataComponent } from './preliminary-data.component';

describe('PreliminaryDataComponent', () => {
  let component: PreliminaryDataComponent;
  let fixture: ComponentFixture<PreliminaryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreliminaryDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreliminaryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
