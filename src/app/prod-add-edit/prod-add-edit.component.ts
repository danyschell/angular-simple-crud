import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module'; 
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-prod-add-edit',
  templateUrl: './prod-add-edit.component.html',
  styleUrl: './prod-add-edit.component.scss',
  //imports: [MaterialModule]
})
export class ProdAddEditComponent {

  constructor(public matDialog: MaterialModule){}

}
