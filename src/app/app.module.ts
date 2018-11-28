import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Archivo de rutas

import { ROUTES } from './app.routes';

// Servicios

import {CategoriaService} from './services/categoria.service';
import {LoginService} from './services/login.service';
import {ClienteService } from './services/cliente.service';
import {DirClienteService} from './services/dirCliente.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { AddUpdateClienteComponent } from './components/cliente/add-update-cliente/add-update-cliente.component';
import { AddUpdateDirClienteComponent } from './components/dirCliente/add-update-dirCliente/add-update-dirCliente.component';
import { ClienteComponent} from './components/cliente/cliente.component';
import { DirClienteComponent} from './components/dirCliente/dirCliente.component';
import { TelClienteComponent } from './components/telCliente/telCliente.component';
import { AddUpdateTelClienteComponent } from './components/telCliente/add-update-telCliente/add-update-telCliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    AddUpdateCategoriaComponent,
    LoginComponent,
    LoadingComponent,
    AddUpdateCategoriaComponent,
    AddUpdateDirClienteComponent,
    ClienteComponent,
    DirClienteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true})
  ],
  providers: [CategoriaService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
