import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  getComentarios(){
    return this.http.get<any>('http://localhost:3000/comentarios');
  }

  getComentarioById(coment_id:any){
    return this.http.get<any>(`http://localhost:3000/comentarios/${coment_id}`);
  }

  editComentarios(coment_id:any, coment_edit:any){
    return this.http.put<any>(`http://localhost:3000/comentarios/${coment_id}`,coment_edit);
  }
  
  DeleteComentarios(coment_id:any){
    return this.http.delete<any>(`http://localhost:3000/comentarios/${coment_id}`);
  }
  addComentarios(newComent:any){
    return this.http.post<any>('http://localhost:3000/comentarios',newComent);
  }

  addReservaciones(reservacion : any){
    return this.http.post<any>('http://localhost:3000/reservaciones',reservacion);
  }
  
  getZonasReparto(){
    return this.http.get<any>('http://localhost:3000/zonas_reparto');
  }
  
  getUsuarioById(id_user: any) {
    return this.http.get<any>(`http://localhost:3000/usuarios/${id_user}`);
  }

  getUsuarios() {
    return this.http.get<any>('http://localhost:3000/usuarios');
  }  
  

}
