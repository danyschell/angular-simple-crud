import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from './material/material.module';
import { ProdAddEditComponent } from './prod-add-edit/prod-add-edit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MaterialModule
  ],
  providers: [
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-simple-crud';

  constructor(
    public dialog: MatDialog
  ){}

  openAddEditProdForm(id: number) {
    const dialogRef = this.dialog.open(ProdAddEditComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        // this.productList = this.productList.filter((data) => data.id != id);
      }
    });
  }


}
