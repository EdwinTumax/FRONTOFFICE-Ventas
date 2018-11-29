import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private _loginService: LoginService, private _router: Router) { 
    this.user = JSON.parse(sessionStorage.getItem('usuario'));
    console.log(this.user);
  }

  ngOnInit() {
  }

  logout() {
    this._loginService.logout();
    window.location.reload();
    this._router.navigateByUrl('/login');
  }
}
