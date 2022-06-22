import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './assignments/assignment-six/page-not-found/page-not-found.component';
import { PostsComponent } from './httpRequests/posts/posts.component';

import { HomeComponent } from './observables/home/home.component'
import { UserComponent } from './observables/user/user.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'user/:id', component: UserComponent },
    { path: 'posts', component: PostsComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }