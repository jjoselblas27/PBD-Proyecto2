import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id_user:any; 
  constructor(
    private http: HttpClient
  ) { }

  login(loginData: any) {
    return this.http.post<any>('http://localhost:3000/login', loginData).pipe(map(response => {
      this.setCurrentUser(response.id_user);
      return response;
    }));
  }
  addUser(user: any) {
    return this.http.post<any>('http://localhost:3000/register', user);
  }

  setCurrentUser(User:any){
    this.id_user =User;
  }
  getCurrentUser() {
    return this.id_user;
  }

  isLoggedIn() {
    return Boolean(this.id_user);
  }

  logout() {
    this.id_user = null;
  }
}
