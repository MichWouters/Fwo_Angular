import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

import { SuccessAlertComponent } from './assignments/assignment-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignments/assignment-one/warning-alert/warning-alert.component';
import { ColorsComponent } from './colors/colors.component';
import { DirectiveExampleComponent } from './directives/directive-example/directive-example.component';

import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { AccountComponent } from './accounts/account/account.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { LoggingService } from './services/logging.service';
import { ActiveUsersComponent } from './assignments/assignment-five/active-users/active-users.component';
import { InactiveUsersComponent } from './assignments/assignment-five/inactive-users/inactive-users.component';
import { CounterService } from './services/counter.service';
import { AppRoutingModule } from './app-routing-module';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';

import { AssignmentOneComponent } from './assignments/assignment-one/assignment-one.component';
import { AssignmentTwoComponent } from './assignments/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignments/assignment-three/assignment-three.component';
import { AssignmentFourComponent } from './assignments/assignment-four/assignment-four.component';
import { AssignmentFiveComponent } from './assignments/assignment-five/assignment-five.component';
import { AssignmentSixComponent } from './assignments/assignment-six/assignment-six.component';
import { AssignmentSixModule } from './assignments/assignment-six/assignment-six.module';
import { AssignmentSevenComponent } from './assignments/assignment-seven/assignment-seven.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    AssignmentOneComponent,
    AssignmentTwoComponent,
    AssignmentThreeComponent,
    AssignmentFourComponent,
    AssignmentFiveComponent,
    AssignmentSixComponent,
    AssignmentSevenComponent,
    SuccessAlertComponent,
    WarningAlertComponent,

    ColorsComponent,
    DirectiveExampleComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
    AccountsComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentSixModule,
    AppRoutingModule,
  ],
  providers: [LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
