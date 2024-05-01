import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';
import { DeleteDialogComponent } from '../../delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [MaterialModule, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'category',
    'price',
    'actions',
  ];  

  productList: ProductInterface[]=[];

  constructor(
    private productService: ProductService, 
    public dialog: MatDialog
  ){}

  ngOnInit(): void {

    console.log('ngOnInit');

    this.getProducts();
    
  }

  getProducts(){
    this.productService.getProducts().subscribe({
      next: (result) => {
        // console.log("result:",result);
        // console.log("result.products:",result.products);
        this.productList = result;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  delete(id: number) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, );

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'true') {
        this.productList = this.productList.filter((data) => data.id != id);
      }
    });
  }

}
