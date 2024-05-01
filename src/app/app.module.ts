import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdAddEditComponent } from './prod-add-edit/prod-add-edit.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    ProdAddEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AppModule { }
