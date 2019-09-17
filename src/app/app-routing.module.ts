import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserdetailComponent} from './userdetail/userdetail.component';


const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'user/:id', component: UserdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
