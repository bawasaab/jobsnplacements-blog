import { NgModule } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

const sharedModules = [
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatButtonModule,
  NgIf,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  NgFor,
  MatFormFieldModule,
  MatInputModule
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
