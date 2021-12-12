import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  NewUser: FormGroup;

  constructor(
    private userService : UsersService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.NewUser = this.formBuilder.group({
      username: [''],
      password: [''],
      correo: [''],
      telefono: []
    });
   }

  ngOnInit() {
  }

  addUser(values:any){
    
  }

}
