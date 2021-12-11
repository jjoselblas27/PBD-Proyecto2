import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../_service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute
  ) { }

  Comentarios:any[];
  zonasReparto: any[];


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

}
