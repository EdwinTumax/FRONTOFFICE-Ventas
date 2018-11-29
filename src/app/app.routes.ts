import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { AddUpdateTipoEmpaqueComponent } from './components/tipo-empaque/add-update-tipo-empaque/add-update-tipo-empaque.component';
import { TipoEmpaqueComponent } from './components/tipo-empaque/tipo-empaque.component';
import { TipoRegistroComponent } from './components/tipo-registro/tipo-registro.component';
import { AddUpdateTipoRegistroComponent } from './components/tipo-registro/add-update-tipo-registro/add-update-tipo-registro.component';
import { LoginComponent } from './components/login/login.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'tipo-empaque-update/:id', component: AddUpdateTipoEmpaqueComponent},
    { path: 'tipo-empaque', component: TipoEmpaqueComponent},
    { path: 'tipo-empaque-add', component: AddUpdateTipoEmpaqueComponent},
    { path: 'tipo-registro', component: TipoRegistroComponent},
    { path: 'tipo-registro-add', component: AddUpdateTipoRegistroComponent},
    { path: 'tipo-registro-update/:id', component: AddUpdateTipoRegistroComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
