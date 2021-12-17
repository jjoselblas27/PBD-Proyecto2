import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-usuarios-view',
  templateUrl: './usuarios-view.page.html',
  styleUrls: ['./usuarios-view.page.scss'],
})
export class UsuariosViewPage implements OnInit {
  usuarios: any;

  constructor(
    private activatedRoute: ActivatedRoute,  
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        const id_user = data.get('id_user');

        this.userService.getUsuarioById(id_user).subscribe(
          response => {
            console.log(response);
            this.usuarios = response
          },
          error => {
            console.error(error);
          }
        )

      }
    );
  }
}
