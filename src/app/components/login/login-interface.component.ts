import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthentificationService } from '../../services/authentification.service';

@Component({
  selector: 'app-login-interface',
  templateUrl: './login-interface.component.html',
  styleUrls: ['./login-interface.component.css']
})
export class LoginInterfaceComponent implements OnInit {
  userType: any = [];
  logginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['']
  });
  ngOnInit(): void { }
  constructor(private fb: FormBuilder, public auth: AuthentificationService) { }
    async onSubmit() {
    await this.auth.posteToken(this.logginForm.value);
    this.userType = this.auth.decodeToken();
    console.log(this.userType);
    this.auth.redirectByRole(this.userType.roles[0]);
  }
}
