import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {

  ComentarioNew: FormGroup;

  constructor(
    private userService : UsersService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.ComentarioNew = this.formBuilder.group({
        id_user: [authService.id_user],//este se ingresara atravez del auth
        comentario: [''],
        puntuacion: [],
      });
  }

  ngOnInit() {
  }

  addNewComent(values:any){
    this.userService.addComentarios(values).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/home']);
      },
      error =>{
        console.log(error);
      }
    );
  }

}
