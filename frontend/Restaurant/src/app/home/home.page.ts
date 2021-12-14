import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_service/auth.service';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private usersService: UsersService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  Comentarios:any[];
  zonasReparto: any[];
  Disponibilidad= {
    'si': 1,
    'no': 0
  };

  ngOnInit() {
  }

  ionViewWillEnter(): void {
    this.usersService.getComentarios().subscribe(data => {
      this.Comentarios = data;
    })
    this.usersService.getZonasReparto().subscribe(data => {
      this.zonasReparto = data;
    })
  }

  DeleteComentario(id_comentario:any){
    this.usersService.DeleteComentarios(id_comentario).subscribe(
      response =>{
        console.log(response);

        //Problema recargar la pagina manualmente.
      },
      error => {
        console.error(error);
      }
    );
  }

  showComent(id:any){
    if(this.authService.id_user == id){
      return true;
    }
    return false;
  }

  EstaDisponible(data:any){
    console.log(data, this.Disponibilidad);
    return this.Disponibilidad[data];
  }
  Logout(){
    this.authService.logout();
  }

}
