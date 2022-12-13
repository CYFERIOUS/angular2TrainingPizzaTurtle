import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCentralReducer from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<fromCentralReducer.AppState>,
    private loggingService: LoggingService
  ) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.autoLogin());
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
