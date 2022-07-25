import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { catchError, throwError } from "rxjs";

export interface AuthResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localId: string,
    registered?:boolean
}

@Injectable({
    providedIn : 'root'
})
export class AuthService {

    constructor(private http: HttpClient){

    }
    signUp(email:string,password:string){

      return  this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDi4MZ9EZnKHgAyCISGg1ZgT5TyCLFL8Ms',
            {   
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(
            catchError(this.handleError)
        );
        
    }

    login(email: string, password: string){
       return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDi4MZ9EZnKHgAyCISGg1ZgT5TyCLFL8Ms',
        {
            email:email,
            password:password,
            returnSecureToken: true
        }).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(erroRes:HttpErrorResponse){
        let errorMessage = 'An unknown error ocurred';
        if(!erroRes.error || !erroRes.error.error){
            return throwError(errorMessage);
        }
        switch(erroRes.error.error.message){
            case 'EMAIL_EXISTS':
                errorMessage = 'this email already exists!';
            break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'this mail does not exist!';
            break;
            case 'INVALID_PASSWORD':
                errorMessage = 'the password is not correct!';
            break;
        }
        return throwError(errorMessage);
        
    };
    
}