
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinComponent } from './loguin.component';



@NgModule({
  declarations: [
    LoguinComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoguinComponent

  ]
})
export class LoguinModule { }
