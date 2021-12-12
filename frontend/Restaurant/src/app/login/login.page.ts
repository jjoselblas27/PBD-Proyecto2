import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm:FormGroup;

  constructor(
    private authService:AuthService,
    private formBuilder: FormBuilder, 
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }

  ngOnInit() {
  }

  
  makeLogin(loginData: any) {
    this.authService.login(loginData).subscribe(
      response => {
        console.log(response);
        if(response) {
          this.router.navigate(['/home']);
        }
        else{
          alert("Usuario Incorrecto");
        }
        
      },
      error => {
        console.error(error);
      }
    );
  }

  
}
