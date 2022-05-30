import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [],
})
export class AccountComponent {
  @Input() account!: { name: string, status: string } ;
  @Input() id!: number;

  constructor(private accountsService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountsService.onStatusChanged(this.id, status)
  }
}
