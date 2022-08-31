import { CanComponentDeactivate } from "./canComponentDeactivate.interface";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";


export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate>{
    canDeactivate(component: CanComponentDeactivate, 
        currentRoute: ActivatedRouteSnapshot, 
        currentState: RouterStateSnapshot, 
        nextState?: RouterStateSnapshot):  Observable<boolean> | Promise<boolean> | boolean{
        //throw new Error("Method not implemented.");
        return component.canDeactivate();
    }
}