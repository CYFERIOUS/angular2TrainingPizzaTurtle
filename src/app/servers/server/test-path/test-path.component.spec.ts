import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPathComponent } from './test-path.component';

describe('TestPathComponent', () => {
  let component: TestPathComponent;
  let fixture: ComponentFixture<TestPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
