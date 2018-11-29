import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateUsuarioComponent } from './components/usuario/add-update-usuario/add-update-usuario.component';

import { UsuarioComponent } from './components/usuario/usuario.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';

import { RolComponent } from './components/rol/rol.component';
import { AddUpdateRolComponent } from './components/rol/add-update-rol/add-update-rol.component';

import { FacturaComponent } from './components/factura/factura.component';
import { AddUpdateFacturaComponent } from './components/factura/add-update-factura/add-update-factura.component';

import { AddUpdateTipoEmpaqueComponent } from './components/tipo-empaque/add-update-tipo-empaque/add-update-tipo-empaque.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';
import { LoginComponent } from './components/login/login.component';
import { ProductoComponent } from './components/producto/producto.component';
import { AddUpdateProductoComponent } from './components/producto/add-update-producto/add-update-producto.component';
import { DetalleFacturaComponent } from './components/detalle-factura/detalle-factura.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'factura', component: FacturaComponent},
    { path: 'factura-add', component: AddUpdateFacturaComponent },
    { path: 'detalle-factura/:id', component: DetalleFacturaComponent},
    { path: 'factura-update/:id', component: AddUpdateFacturaComponent },
    { path: 'usuario', component: UsuarioComponent },
    { path: 'usuario-add', component: AddUpdateUsuarioComponent },
    { path: 'usuario-update/:id', component: AddUpdateUsuarioComponent },
    { path: 'rol', component: RolComponent },
    { path: 'rol-add', component: AddUpdateRolComponent },
    { path: 'rol-update/:id', component: AddUpdateRolComponent },
    { path: 'tipo-empaque', component: TipoEmpaqueComponent},
    { path: 'tipo-empaque-add', component: AddUpdateTipoEmpaqueComponent},
    { path: 'login', component: LoginComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto-add', component: AddUpdateProductoComponent},
    { path: 'producto-update/:id', component: AddUpdateProductoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES, {useHash: true});
