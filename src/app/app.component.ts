import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options = [
    {accountId: 1, name: 'Basic Checking'},
    {accountId: 2, name: 'Advanced Checking'},
    {accountId: 3, name: 'Basic Savings'},
    {accountId: 4, name: 'Advanced Savings'},
    {accountId: 5, name: 'IRA Deposit'}
  ];
  fromAccount = {
    options: this.options,
    selected: null
  };
  toAccount = {
    options: this.options,
    selected: null
  };

  filterFromAccounts() {
    this.fromAccount.options = [];
    for (const option of this.options) {
      if (!this.toAccount.selected) {
        this.fromAccount.options.push(option);
      } else if (option.accountId !== this.toAccount.selected.accountId) {
        this.fromAccount.options.push(option);
      }
    }
  }

  filterToAccounts() {
    this.toAccount.options = [];
    for (const option of this.options) {
      if (!this.fromAccount.selected) {
        this.toAccount.options.push(option);
      } else if (option.accountId !== this.fromAccount.selected.accountId) {
        this.toAccount.options.push(option);
      }
    }
  }
}
