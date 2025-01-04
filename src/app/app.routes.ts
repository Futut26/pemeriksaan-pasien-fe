import { Routes } from '@angular/router';
import { PemeriksaanComponent } from './components/pemeriksaan/pemeriksaan.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { NoAuthGuard } from './guards/no-auth.guard';
import { DokterComponent } from './components/dokter/dokter.component';
import { PasienComponent } from './components/pasien/pasien.component';



export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [NoAuthGuard] },
    { path: 'register', component: RegisterComponent, pathMatch: 'full', canActivate: [NoAuthGuard] },
    { path: 'pemeriksaan', component: PemeriksaanComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'dokter', component: DokterComponent, canActivate: [AuthGuard], pathMatch: 'full' },
    { path: 'pasien', component: PasienComponent, canActivate: [AuthGuard], pathMatch: 'full' }
];
