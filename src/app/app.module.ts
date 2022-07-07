import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { AssignmentOneComponent } from './assignments/assignment-one/assignment-one.component';
import { SuccessAlertComponent } from './assignments/assignment-one/success-alert/success-alert.component';
import { WarningAlertComponent } from './assignments/assignment-one/warning-alert/warning-alert.component';
import { AssignmentTwoComponent } from './assignments/assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignments/assignment-three/assignment-three.component';
import { ColorsComponent } from './components/colors/colors.component';
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
import { AppRoutingModule } from './app-routing-module';
import { TemplateDrivenFormComponent } from './forms/template-driven-form/template-driven-form.component';
import { AssignmentSevenComponent } from './assignments/assignment-seven/assignment-seven.component';
import { HomeComponent } from './observables/home/home.component';
import { ObservableComponent } from './observables/observable/observable.component';
import { UserComponent } from './observables/user/user.component';
import { PostsComponent } from './httpRequests/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { NoteCardComponent } from './state-management/note-card/note-card.component';
import { NoteListComponent } from './state-management/note-list/note-list.component';
import { NoteFormComponent } from './state-management/note-form/note-form.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { HeaderComponent } from './state-management/header/header.component';
import { AssignmentEightStateManagementComponent } from './assignments/assignment-eight-state-management/assignment-eight-state-management.component';
import { BoatCardComponent } from './assignments/assignment-eight-state-management/boat-card/boat-card.component';
import { BoatFormComponent } from './assignments/assignment-eight-state-management/boat-form/boat-form.component';
import { BoatListComponent } from './assignments/assignment-eight-state-management/boat-list/boat-list.component';

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
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    AssignmentSevenComponent,
    HomeComponent,
    ObservableComponent,
    UserComponent,
    PostsComponent,
    NoteCardComponent,
    NoteListComponent,
    NoteFormComponent,
    StateManagementComponent,
    HeaderComponent,
    AssignmentEightStateManagementComponent,
    BoatCardComponent,
    BoatFormComponent,
    BoatListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AssignmentSixModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoggingService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
