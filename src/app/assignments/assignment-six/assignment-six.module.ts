import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentSixRoutingModule } from './assignment-six-routing.module';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    AssignmentSixRoutingModule
  ]
})
export class AssignmentSixModule { }
