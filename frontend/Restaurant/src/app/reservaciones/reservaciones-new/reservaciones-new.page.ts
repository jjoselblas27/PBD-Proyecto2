import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_service/auth.service';
import { UsersService } from 'src/app/_service/users.service';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-reservaciones-new',
  templateUrl: './reservaciones-new.page.html',
  styleUrls: ['./reservaciones-new.page.scss'],
})
export class ReservacionesNewPage implements OnInit {

  ReservacionForm : FormGroup;

  constructor(
    private userService : UsersService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.ReservacionForm = this.formBuilder.group({
      id_user: [authService.id_user],
      nombre: [''],
      n_personas: [''],
      tipo_mesa: [''],
      hora_reservacion: [''],
      fecha: [''],
      correo: [''],
      telefono: ['']
    })    
  }    
  
  ngOnInit() {
  }

  agregarReservacion(values: any){
    this.userService.addReservaciones(values).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/home']);

        LocalNotifications.schedule({
          notifications: [
            {
              id: new Date().getTime(),
              title: "Nueva reserva",
              body: `${values.nombre} ha registrado una nueva reserva.`,
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

}
