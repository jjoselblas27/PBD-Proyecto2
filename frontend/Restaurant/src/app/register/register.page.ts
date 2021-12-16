import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../_service/users.service';
import { AuthService } from 'src/app/_service/auth.service';
import { PhotoService } from 'src/app/_service/photo.service';
import { LocalNotifications } from '@capacitor/local-notifications';


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
    private router: Router,
    private authService: AuthService,
    private photoService: PhotoService,
  ) {
    this.NewUser = this.formBuilder.group({
      username: [''],
      password: [''],
      correo: [''],
      telefono: [''],
      url: [''],
    });
   }

  ngOnInit() {
  }

  CreateUser(values:any){
  
    this.authService.addUser(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['']);

        LocalNotifications.schedule({
          notifications: [
            {
              id: new Date().getTime(),
              title: "Usuario creado",
              body: `${values.username} es un nuevo cliente.`,
              schedule: {
                at: new Date(new Date().getTime() + 10000)
              }
            }
          ]
        })

      },
      error => {
        console.error(error);
      }
    );
  
  }
  
  async openCamera(){
    const picture_data = await this.photoService.takePicture();

    this.NewUser.patchValue(picture_data);

  }


}
