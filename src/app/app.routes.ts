import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { AddUpdateCategoriaComponent } from './components/categoria/add-update-categoria/add-update-categoria.component';
import { AddUpdateClienteComponent} from './components/cliente/add-update-cliente/add-update-cliente.component';
import { ClienteComponent} from './components/cliente/cliente.component';
import { AddUpdateTelClienteComponent} from './components/telCliente/add-update-telCliente/add-update-telCliente.component';
import { TelClienteComponent} from './components/telCliente/telCliente.component';
import { AddUpdateDirClienteComponent} from './components/dirCliente/add-update-dirCliente/add-update-dirCliente.component';
import { DirClienteComponent} from './components/dirCliente/dirCliente.component';
import { AddUpdateEmailClienteComponent} from './components/emailCliente/add-update-emailCliente/add-update-emailCliente.component';
import { EmailClienteComponent} from './components/emailCliente/emailCliente.component';
import { LoginComponent } from './components/login/login.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categoria', component: CategoriaComponent },
    { path: 'categoria-add', component: AddUpdateCategoriaComponent },
    { path: 'categoria-update/:id', component: AddUpdateCategoriaComponent },
    { path: 'cliente', component: ClienteComponent},
    { path: 'cliente-add', component: AddUpdateClienteComponent},
    { path: 'cliente-update/:id', component: AddUpdateClienteComponent},
    { path: 'telCliente', component: TelClienteComponent},
    { path: 'telCliente-add', component: AddUpdateTelClienteComponent},
    { path: 'telCliente-update/:id', component: AddUpdateTelClienteComponent},
    { path: 'dirCliente', component: DirClienteComponent},
    { path: 'dirCliente-add', component: AddUpdateDirClienteComponent},
    { path: 'dirCliente-update/:id', component: AddUpdateDirClienteComponent},
    { path: 'emailCliente', component: EmailClienteComponent},
    { path: 'emailCliente-add', component: AddUpdateEmailClienteComponent},
    { path: 'emailCliente-update/:id', component: AddUpdateEmailClienteComponent},
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
