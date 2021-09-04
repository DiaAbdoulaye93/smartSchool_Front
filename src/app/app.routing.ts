import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginInterfaceComponent } from '../app/components/login/login-interface.component';
import { EditerUtilisateurComponent } from './components/utilisateurs/editer-utilisateur/editer-utilisateur.component';
import { AjoutUtilisateursComponent } from './components/utilisateurs/ajout-utilisateurs/ajout-utilisateurs.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';
import { ListUtilisateursComponent } from './components/utilisateurs/list-utilisateurs/list-utilisateurs.component';


const routes: Routes = [
  { path: '', component: LoginInterfaceComponent },
  {path: 'utilisateur', component: UtilisateursComponent,
  children:
   [
     {path: '', component: ListUtilisateursComponent},
    {path: 'add-user', component: AjoutUtilisateursComponent},
    {path: 'edit-user/:id', component: EditerUtilisateurComponent},
   ]
},
  { path: 'list-profil', component:  UserProfileComponent},
  {
    path: 'admin_layout',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
