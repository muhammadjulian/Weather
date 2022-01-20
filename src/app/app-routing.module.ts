import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplikasiBerandaComponent } from './aplikasi-beranda/aplikasi-beranda.component';

const routes: Routes = [
  { path: '**', component: AplikasiBerandaComponent },
  { path: 'aplikasi-beranda-component', component: AplikasiBerandaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
