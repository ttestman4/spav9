import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormTestRoutingModule } from './form-test-routing.module';
import { FormTestComponent } from './form-test.component';


@NgModule({
  declarations: [FormTestComponent],
  imports: [
    CommonModule,
    FormTestRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
  ]
})
export class FormTestModule { }
