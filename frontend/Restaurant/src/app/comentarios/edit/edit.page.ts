import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/_service/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  ComentEdit: FormGroup;
  coment_id:any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService : UsersService,
    private formBuilder : FormBuilder,
    private router: Router
  ) { 
    this.ComentEdit = this.formBuilder.group({
      comentario: [''],
      puntuacion: []
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      data => {
        this.coment_id = data.get('id_comentario');

        this.userService.getComentarioById(this.coment_id).subscribe(
          response => {
            console.log(response);
            this.ComentEdit.patchValue(response);
          },
          error => {
            console.error(error);
          }
        )
      }
    );
  }

  EditComentario(values:any){
    console.log(values);
    this.userService.editComentarios(this.coment_id, values).subscribe(
      response =>{
        console.log(response);
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
