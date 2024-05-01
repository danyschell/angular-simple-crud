import { Component, Injectable, OnInit } from '@angular/core';
import { MaterialModule } from '../material/material.module'; 
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-delete-dialog',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss',
})

export class DeleteDialogComponent implements OnInit {
  //constructor(public dialogRef: DialogRef<DeleteDialogComponent>) {}
  constructor() {}

  ngOnInit(): void {}

  // close() {
  //   this.dialogRef.close();
  // }
}
