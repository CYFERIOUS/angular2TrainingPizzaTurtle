import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ShareModule } from "../share/share.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth.routing.module";


@NgModule({
    declarations:[AuthComponent],
    imports:[ ShareModule, CommonModule,AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule{}