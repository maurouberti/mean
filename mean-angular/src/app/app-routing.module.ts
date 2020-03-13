import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostcreateComponent } from './postcreate/postcreate.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: PostlistComponent },
  { path: 'new', component: PostcreateComponent },
  { path: 'post/:slug', component: PostdetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
