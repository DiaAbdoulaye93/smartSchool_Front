import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  baseUrl = environment.baseUrl;
  userToken: any = [];
  userRole: any = '';
  constructor(private http: HttpClient, private router: Router) { }
  loginUser(user: any) {
    return this.http.post<any>(this.baseUrl + 'login_check', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  // On renvoie le token a l'intercepteur
  getToken() {
    return localStorage.getItem('token');
  }
  // tslint:disable-next-line:typedef
   posteToken(credentials: any) {
   return new Promise(resolve => {
    this.loginUser(credentials).subscribe(
      (token: any) => {
        console.log(credentials);
        console.log(token);
        if (token.token !== '') {
          resolve(localStorage.setItem('token', token.token));
        }
      })
   })
     // httpError => console.log(httpError.error.message),
  }
  decodeToken() {
    return localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token') || '{}') : null;
  }
  getRole() {
    this.userToken = this.decodeToken();
    this.userRole = this.userToken.roles[0];
    return this.userRole;
  }
  logout() {
    localStorage.setItem('token', '');

    this.router.navigate(['']);
  }
  // tslint:disable-next-line:typedef
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_administrateur': {
        this.router.navigate(['admin_layout']);
        break;
      }
      case 'ROLE_enseignant': {
        this.router.navigate(['formateur']);
        break;
      }
      case 'ROLE_Apprenant': {
        this.router.navigate(['apprenant']);
        break;
      }
      default: {
        this.router.navigate(['/']);
        break;
      }
    }
  }
}
