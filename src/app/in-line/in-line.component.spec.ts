import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InLineComponent } from './in-line.component';

describe('InLineComponent', () => {
  let component: InLineComponent;
  let fixture: ComponentFixture<InLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
