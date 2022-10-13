import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListContainerComponent } from './list-container/list-container.component';
import { ListDetailsComponent } from './list-details/list-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',
    component:ListContainerComponent
  },
  {
    path:'list',
    component:ListContainerComponent
  },
  {
    path:'list-details',
    component:ListDetailsComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
