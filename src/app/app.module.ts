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
import {TipoEmpaqueService} from './services/tipo_empaques.service';
import {UsuarioService} from './services/usuario.service';
import {RolService} from './services/rol.service';
import {ClienteService } from './services/cliente.service';
import {DirClienteService} from './services/dirCliente.service';
import {EmailClienteService} from './services/emailCliente.service';
import {TelClienteService} from './services/telCliente.service';

// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';

import { LoginComponent } from './components/login/login.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AddUpdateProductoComponent } from './components/producto/add-update-producto/add-update-producto.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';
import { AddUpdateTipoEmpaqueComponent } from './components/tipo-empaque/add-update-tipo-empaque/add-update-tipo-empaque.component';
import { TipoRegistroComponent } from './components/tipo-registro/tipo-registro.component';
import { AddUpdateTipoRegistroComponent } from './components/tipo-registro/add-update-tipo-registro/add-update-tipo-registro.component';
import { CompraComponent } from './components/compra/compra.component';
import { AddUdpateCompraComponent } from './components/compra/add-udpate-compra/add-udpate-compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { AddUpdateDetalleCompraComponent } from './components/detalle-compra/add-update-detalle-compra/add-update-detalle-compra.component';
import { FacturaComponent } from './components/factura/factura.component';
import { AddUpdateFacturaComponent } from './components/factura/add-update-factura/add-update-factura.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUpdateUsuarioComponent } from './components/usuario/add-update-usuario/add-update-usuario.component';
import { RolComponent } from './components/rol/rol.component';
import { AddUpdateRolComponent } from './components/rol/add-update-rol/add-update-rol.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AddUpdateProveedorComponent } from './components/proveedor/add-update-proveedor/add-update-proveedor.component';
import { DirprovComponent } from './components/dirprov/dirprov.component';
import { AddUpdateDirprovComponent } from './components/dirprov/add-update-dirprov/add-update-dirprov.component';
import { TelprovComponent } from './components/telprov/telprov.component';
import { AddUpdateTelprovComponent } from './components/telprov/add-update-telprov/add-update-telprov.component';
import { EmailprovComponent } from './components/emailprov/emailprov.component';
import { AddUpdateEmailprovComponent } from './components/emailprov/add-update-emailprov/add-update-emailprov.component';
import { AddUpdateClienteComponent } from './components/cliente/add-update-cliente/add-update-cliente.component';
import { AddUpdateDirClienteComponent } from './components/dirCliente/add-update-dirCliente/add-update-dirCliente.component';
import { ClienteComponent} from './components/cliente/cliente.component';
import { DirClienteComponent} from './components/dirCliente/dirCliente.component';
import { TelClienteComponent } from './components/telCliente/telCliente.component';
import { AddUpdateTelClienteComponent } from './components/telCliente/add-update-telCliente/add-update-telCliente.component';
import { EmailClienteComponent } from './components/emailCliente/emailCliente.component';
import { AddUpdateEmailClienteComponent} from './components/emailCliente/add-update-emailCliente/add-update-emailCliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriaComponent,
    AddUpdateCategoriaComponent,
    LoginComponent,
    LoadingComponent,
    ProductoComponent,
    AddUpdateProductoComponent,
    TipoEmpaqueComponent,
    AddUpdateCategoriaComponent,
    AddUpdateTipoEmpaqueComponent,
    TipoRegistroComponent,
    AddUpdateTipoRegistroComponent,
    CompraComponent,
    AddUdpateCompraComponent,
    DetalleCompraComponent,
    AddUpdateDetalleCompraComponent,
    FacturaComponent,
    AddUpdateFacturaComponent,
    DetalleFacturaComponent,
    UsuarioComponent,
    AddUpdateUsuarioComponent,
    RolComponent,
    AddUpdateRolComponent,
    ProveedorComponent,
    AddUpdateProveedorComponent,
    DirprovComponent,
    AddUpdateDirprovComponent,
    TelprovComponent,
    AddUpdateTelprovComponent,
    EmailprovComponent,
    AddUpdateEmailprovComponent,
    AddUpdateCategoriaComponent,
    AddUpdateDirClienteComponent,
    ClienteComponent,
    DirClienteComponent,
    AddUpdateEmailClienteComponent,
    EmailClienteComponent,
    AddUpdateTelClienteComponent,
    TelClienteComponent,
    AddUpdateClienteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [CategoriaService, LoginService, UsuarioService, RolService,
    TipoEmpaqueService, ClienteService, DirClienteService, EmailClienteService, TelClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
