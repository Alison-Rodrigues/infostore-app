import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit{

  account = {
    login: '',
    password: ''
  }

  constructor(private accountService: AccountService,
              private router: Router) {}

  ngOnInit(): void {

  }

  async onSubmit() {

    try {
      const result = await this.accountService.create(this.account);
      this.router.navigate(['login']);
      console.log(result);
    } catch (error) {
      console.log(error);
    }


  }

}
