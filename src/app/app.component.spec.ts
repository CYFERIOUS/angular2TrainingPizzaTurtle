/* tslint:disable:no-unused-variable */

import { DebugElement } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';

describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserComponent
      ]
    });
  });
  describe('tittle', () => {
    it('should create the app', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));

    it(`should have as title 'app works!'`, async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      let app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app works!');
    }));

    it('should render title in a h1 tag', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('app works!');
    }));
  });
  describe('clicked()', () => {
    it('should toggle isOn', async(() => {
      const comp = new AppComponent();
      comp.clicked();
      expect(comp.isOn).toBeTruthy();
      comp.clicked();
      expect(comp.isOn).toBeFalsy();
    }));
  });
  describe('backGroundSwitcher()', () => {
    it('should toggle message background color', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').style.backgroundColor).toEqual('red');
    }));
    it('should toggle font color', async(() => {
      let fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').style.color).toEqual('yellow');
    }));
  });
  it('should find the <div> with fixture.debugElement.query(By.css)', () => {
    let fixture = TestBed.createComponent(AppComponent);
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('.unit-test'));
    const div: HTMLElement = paragraphDe.nativeElement;
    expect(getComputedStyle(div).fontSize).toEqual('50px');
  });

});
