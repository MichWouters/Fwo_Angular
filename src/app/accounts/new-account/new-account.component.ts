import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []
})
export class NewAccountComponent {
  constructor(private accountsService: AccountService) {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.onAccountAdded({
      name: accountName,
      status: accountStatus
    });
  }
}
