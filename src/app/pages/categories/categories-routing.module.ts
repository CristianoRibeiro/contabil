import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { CategoriesFormComponent } from "./categories-form/categories-form.component";


const routes: Routes = [
  {path: '', component: CategoriesListComponent },
  {path: 'new', component: CategoriesFormComponent },
  {path: ':id/edit', component: CategoriesFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
