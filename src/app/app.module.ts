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

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AddUpdateProveedorComponent } from './components/proveedor/add-update-proveedor/add-update-proveedor.component';
import { DirprovComponent } from './components/dirprov/dirprov.component';
import { AddUpdateDirprovComponent } from './components/dirprov/add-update-dirprov/add-update-dirprov.component';
import { TelprovComponent } from './components/telprov/telprov.component';
import { AddUpdateTelprovComponent } from './components/telprov/add-update-telprov/add-update-telprov.component';
import { EmailprovComponent } from './components/emailprov/emailprov.component';
import { AddUpdateEmailprovComponent } from './components/emailprov/add-update-emailprov/add-update-emailprov.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    AddUpdateCategoriaComponent,
    LoginComponent,
    LoadingComponent,
    ProveedorComponent,
    AddUpdateProveedorComponent,
    DirprovComponent,
    AddUpdateDirprovComponent,
    TelprovComponent,
    AddUpdateTelprovComponent,
    EmailprovComponent,
    AddUpdateEmailprovComponent,
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
