import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormTestComponent } from './form-test.component';

const routes: Routes = [{ path: '', component: FormTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormTestRoutingModule { }
