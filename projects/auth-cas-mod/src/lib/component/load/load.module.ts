import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadComponent } from './load.component';



@NgModule({
  declarations: [LoadComponent],
  exports: [LoadComponent],
  imports: [
    CommonModule
  ]
})
export class LoadModule { }
