import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { Componente1Component } from './componente1/componente1.component';
import { RestritoComponent } from './restrito/restrito.component';
import { GuardGuard } from './guard.guard';

const routes: Routes = [

  { path: 'componente1', component: Componente1Component },
  { path: 'jogos', component: JogosComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path:'restrito',component: RestritoComponent, canActivate: [GuardGuard]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
