import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { LoginComponent } from './components/login/login.component';
import { TipoEmpaquesComponent } from './components/tipo-empaques/tipo-empaques.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'tipoEmpaque', component: TipoEmpaquesComponent},
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
