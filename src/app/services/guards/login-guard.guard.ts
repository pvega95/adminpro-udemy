import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _usuarioService : UsuarioService,
    public  _router : Router
  ){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if ( this._usuarioService.estaLogueado() ){
        console.log('PASO X LOGIN GUARD');
        return true;
      } else{
        console.log('BLOQUEADO POR GUARD');
        this._router.navigate(['/login']);
        return false;
      }
     
    
  }
  
}
