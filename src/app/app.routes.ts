import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { CompraComponent } from './components/compra/compra.component';
import { AddUdpateCompraComponent } from './components/compra/add-udpate-compra/add-udpate-compra.component';
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'compra', component: CompraComponent },
    { path: 'compra-add', component: AddUdpateCompraComponent },
    { path: 'compra-update/:id', component: AddUdpateCompraComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
