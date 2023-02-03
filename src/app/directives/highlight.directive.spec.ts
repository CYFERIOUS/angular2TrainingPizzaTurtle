import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from 'protractor';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HighlightDirective,
      ]
    });
  });


  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new HighlightDirective(elRefMock);
    expect(directive).toBeTruthy();
  });

  it('should show pointer on hover behavior', () => {

    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new HighlightDirective(elRefMock);
     directive.onMouseOver();

    expect( elRefMock.nativeElement.style.cursor).toBe('pointer');
  });

});
