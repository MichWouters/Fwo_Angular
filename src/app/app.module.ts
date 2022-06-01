import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AssignmentOneComponent } from './assignments/assignment-one/assignment-one.component';
import { SuccessAlertComponent } from './assignments/assignment-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignments/assignment-one/warning-alert/warning-alert.component';
import { AssignmentTwoComponent } from './assignments/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignments/assignment-three/assignment-three.component';
import { ColorsComponent } from './colors/colors.component';
import { DirectiveExampleComponent } from './directives/directive-example/directive-example.component';

// Directives
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { AssignmentFourComponent } from './assignments/assignment-four/assignment-four.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoggingService } from './services/logging.service';
import { AssignmentFiveComponent } from './assignments/assignment-five/assignment-five.component';
import { ActiveUsersComponent } from './assignments/assignment-five/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/assignment-five/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';
import { AssignmentSixComponent } from './assignments/assignment-six/assignment-six.component';
import { AssignmentSixModule } from './assignments/assignment-six/assignment-six.module';
import { FirstComponent } from './assignments/assignment-six/first/first.component';
import { PageNotFoundComponent } from './assignments/assignment-six/page-not-found/page-not-found.component';
import { SecondComponent } from './assignments/assignment-six/second/second.component';
import { ThirdComponent } from './assignments/assignment-six/third/third.component';

const routes: Routes = [
  { path: 'first-page', component: FirstComponent },
  { path: 'second-page', component: SecondComponent },
  { path: 'third-page', component: ThirdComponent },
  { path: '', redirectTo:'/first-page', pathMatch:'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentOneComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    ColorsComponent,
    DirectiveExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AssignmentFourComponent,
    AccountComponent,
    NewAccountComponent,
    AccountsComponent,
    AssignmentFiveComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    AssignmentSixComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AssignmentSixModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
