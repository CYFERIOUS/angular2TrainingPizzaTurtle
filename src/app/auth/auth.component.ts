import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error:string = null;
  signupForm: FormGroup;
  constructor(private as:AuthService) { }
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
      },(errorMessage) =>{
        console.log(errorMessage);
        this.error = errorMessage;
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

}
