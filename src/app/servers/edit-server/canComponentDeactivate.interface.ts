import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/Observable";
export interface CanComponentDeactivate{
    canDeactivate: ()=> Observable<boolean> | Promise<boolean> | boolean;
}