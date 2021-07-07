import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SasaAuthComponent } from './sasa-auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SasaAuthComponent
  ],
  exports: [
    SasaAuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SasaAuthModule { }
