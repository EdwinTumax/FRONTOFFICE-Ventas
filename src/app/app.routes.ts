import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { AddUpdateProveedorComponent } from './components/proveedor/add-update-proveedor/add-update-proveedor.component';
import { DirprovComponent } from './components/dirprov/dirprov.component';
import { AddUpdateDirprovComponent } from './components/dirprov/add-update-dirprov/add-update-dirprov.component';
import { EmailprovComponent } from './components/emailprov/emailprov.component';
import { AddUpdateEmailprovComponent } from './components/emailprov/add-update-emailprov/add-update-emailprov.component';
import { TelprovComponent } from './components/telprov/telprov.component';
import { AddUpdateTelprovComponent } from './components/telprov/add-update-telprov/add-update-telprov.component';
import { LoginComponent } from './components/login/login.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'telprov', component: TelprovComponent},
    { path: 'emailprov', component: EmailprovComponent},
    { path: 'dirprov', component: DirprovComponent },
    { path: 'proveedor', component: ProveedorComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'proveedor-add', component: AddUpdateProveedorComponent },
    { path: 'proveedor-update/:id', component: AddUpdateProveedorComponent },
    { path: 'dirprov-add', component: AddUpdateDirprovComponent },
    { path: 'dirprov-update/:id', component: AddUpdateDirprovComponent},
    { path: 'emailprov-add', component: AddUpdateEmailprovComponent},
    { path: 'emailprov-update/:id', component: AddUpdateEmailprovComponent},
    { path: 'telprov-add', component: AddUpdateTelprovComponent},
    { path: 'telprov-update/:id', component: AddUpdateTelprovComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
