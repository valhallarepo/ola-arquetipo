import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotMyHomeComponent } from './not-my-home.component';

const routes: Routes = [{ path: '', component: NotMyHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotMyHomeRoutingModule { }
