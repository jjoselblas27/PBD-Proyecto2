import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  usuarios: any[];

  constructor(
    private usuariosService: UsersService
  ) { }

  ngOnInit(): void {
  }

  ionViewWillEnter(): void {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    })
  }

}
