import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavComponent, LoginComponent]
})
export class SharedModule { }
