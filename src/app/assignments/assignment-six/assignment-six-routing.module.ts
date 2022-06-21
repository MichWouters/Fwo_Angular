import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Disabled for later exercises
const routes: Routes = [
  // { path: 'first-page', component: FirstComponent },
  // { path: 'second-page', component: SecondComponent },
  // { path: 'third-page', component: ThirdComponent },
  // { path: '', redirectTo: '/first-page', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AssignmentSixRoutingModule { }
