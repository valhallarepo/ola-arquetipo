import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotMyHomeRoutingModule } from './not-my-home-routing.module';
import { NotMyHomeComponent } from './not-my-home.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [NotMyHomeComponent],
  imports: [
    CommonModule,
    NotMyHomeRoutingModule,
    SharedModule
  ]
})
export class NotMyHomeModule { }
