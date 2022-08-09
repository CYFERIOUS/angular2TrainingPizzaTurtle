import { Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';
import {AlertComponent} from '../share/alert/alert.component';
import { PlaceholderDirective } from '../share/placeholder/placeholder.directive';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error:string = null;
  signupForm: FormGroup;
  @ViewChild(PlaceholderDirective) alertHost:PlaceholderDirective;

  private closeSub:Subscription;
  constructor(private as:AuthService, private router:Router, private cfr:ComponentFactoryResolver ) { }
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(){
    //console.log(this.signupForm.value);

    if(!this.signupForm.valid){
      return;
    }
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;
    this.isLoading = true;

  let authObs: Observable<AuthResponseData>;

    if(this.isLoginMode){
      authObs = this.as.login(email,password);
    }else{
      authObs = this.as.signUp(email,password);
    }
    authObs.subscribe(
      (resData)=>{
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },(errorMessage) =>{
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
    });
    this.signupForm.reset();
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password': new FormControl(null,[Validators.required,Validators.minLength(6)]),
    });
  }
  onHandleError(){
    this.error = null;
  }

  private showErrorAlert(message:string){
   const alertCompFactory =  this.cfr.resolveComponentFactory(AlertComponent);
   const hostViewContainer = this.alertHost.vCRef;
    hostViewContainer.clear();
   const refComp = hostViewContainer.createComponent(alertCompFactory);
   refComp.instance.message = message;
   this.closeSub = refComp.instance.close.subscribe(()=>{
    this.closeSub.unsubscribe();
    hostViewContainer.clear();
   });
  }

  ngOnDestroy(): void {
    if(this.closeSub){
      this.closeSub.unsubscribe();
    }
      
  }

}
