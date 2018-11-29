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
import {ProductoService} from './services/producto.service';
import {LoginService} from './services/login.service';
import {UsuarioService} from './services/usuario.service';
import {RolService} from './services/rol.service';

import {TipoEmpaqueService} from './services/tipo_empaques.service';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';

import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { FacturaComponent } from './components/factura/factura.component';
import { AddUpdateFacturaComponent } from './components/factura/add-update-factura/add-update-factura.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUpdateUsuarioComponent } from './components/usuario/add-update-usuario/add-update-usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { AddUpdateRolComponent } from './components/rol/add-update-rol/add-update-rol.component';


import { ProductoComponent } from './components/producto/producto.component';
import { AddUpdateProductoComponent } from './components/producto/add-update-producto/add-update-producto.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';
import { AddUpdateTipoEmpaqueComponent } from './components/tipo-empaque/add-update-tipo-empaque/add-update-tipo-empaque.component';
import { TipoRegistroComponent } from './components/tipo-registro/tipo-registro.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    AddUpdateCategoriaComponent,
    LoginComponent,
    LoadingComponent,
    FacturaComponent,
    AddUpdateFacturaComponent,
    UsuarioComponent,
    AddUpdateUsuarioComponent,
    RolComponent,
    AddUpdateRolComponent,
    ProductoComponent,
    AddUpdateProductoComponent,
    TipoEmpaqueComponent,
    AddUpdateCategoriaComponent,
    AddUpdateTipoEmpaqueComponent,
    TipoRegistroComponent,
    DetalleFacturaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true})
  ],
  providers: [CategoriaService, LoginService, UsuarioService, RolService, ProductoService, TipoEmpaqueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
