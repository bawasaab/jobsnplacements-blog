import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

const sharedModules = [
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    sharedModules
  ],
  exports: [
    sharedModules
  ]
})
export class SharedModule { }
