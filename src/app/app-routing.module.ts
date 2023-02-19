import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsComponent } from './pages/abs/abs.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'abs', component: AbsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }