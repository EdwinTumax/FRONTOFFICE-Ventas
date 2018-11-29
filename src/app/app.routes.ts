import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateUsuarioComponent } from './components/usuario/add-update-usuario/add-update-usuario.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { CompraComponent } from './components/compra/compra.component';
import { AddUdpateCompraComponent } from './components/compra/add-udpate-compra/add-udpate-compra.component';
import { DetalleCompraComponent } from './components/detalle-compra/detalle-compra.component';
import { AddUpdateDetalleCompraComponent } from './components/detalle-compra/add-update-detalle-compra/add-update-detalle-compra.component';

import { RolComponent } from './components/rol/rol.component';
import { AddUpdateRolComponent } from './components/rol/add-update-rol/add-update-rol.component';

import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { AddUpdateFacturaComponent } from './components/factura/add-update-factura/add-update-factura.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'compra-add', component: AddUdpateCompraComponent },
    { path: 'compra-update/:id', component: AddUdpateCompraComponent},
    { path: 'detalle-compra', component: DetalleCompraComponent },
    { path: 'detalle-compra-add', component: AddUpdateDetalleCompraComponent },
    { path: 'detalle-compra-update/:id', component: AddUpdateDetalleCompraComponent},
    { path: 'factura', component: FacturaComponent},
    { path: 'factura-add', component: AddUpdateFacturaComponent },
    { path: 'factura-update/:id', component: AddUpdateFacturaComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-add', component: AddUpdateUsuarioComponent },
    { path: 'usuario-update/:id', component: AddUpdateUsuarioComponent },
    { path: 'rol', component: RolComponent },
    { path: 'rol-add', component: AddUpdateRolComponent },
    { path: 'rol-update/:id', component: AddUpdateRolComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
