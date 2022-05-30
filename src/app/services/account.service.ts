import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()  // If a service needs services of its own, we need to add the @Injectable decorator
export class AccountService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService){

    }

    public getAccounts(){
        return this.accounts;
    }

    public onAccountAdded(newAccount: { name: string, status: string }) {
        this.accounts.push(newAccount);
        this.loggingService.logStatusChange(status)
    }

    public onStatusChanged( id: number, newStatus: string ) {
        this.accounts[id].status = newStatus;
        this.loggingService.logStatusChange(newStatus)
    }
}